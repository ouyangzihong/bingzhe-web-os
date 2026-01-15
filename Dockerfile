# --- 第一阶段：构建阶段 (Builder) ---
# 使用 Node 16 (适配 Vue 2)
FROM node:16-alpine as builder

# 设置工作目录
WORKDIR /app

# 先只复制 package.json 安装依赖 (利用 Docker 缓存层，加速二次构建)
COPY package*.json ./
# 安装依赖 (使用 npm ci 比 npm install 更稳定)
RUN npm config set registry https://registry.npmmirror.com/ && npm install

# 复制所有源代码
COPY . .

# 执行构建命令，生成 dist 文件夹
RUN npm run build

# --- 第二阶段：生产环境 (Production) ---
# 使用轻量级 Nginx 镜像
FROM nginx:stable-alpine

# 从第一阶段复制构建好的 dist 文件到 Nginx 默认目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制我们自定义的 Nginx 配置文件
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]