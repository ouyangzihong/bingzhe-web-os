const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭 ESLint 保存检查

  // --- 部署相关配置 ---
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false, // 生产环境不生成 SourceMap

  // --- 修复点：使用 chainWebpack 去除 console.log ---
  chainWebpack: config => {
    // 只有在生产环境 (build) 时才执行
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap(args => {
        // args[0] 是 terser 的配置对象
        // 确保 compress 对象存在，防止报错
        if (!args[0].terserOptions) {
            args[0].terserOptions = {};
        }
        if (!args[0].terserOptions.compress) {
            args[0].terserOptions.compress = {};
        }
        
        // 开启去除 console 和 debugger
        args[0].terserOptions.compress.drop_console = true;
        args[0].terserOptions.compress.drop_debugger = true;
        
        return args;
      });
    }
  }
})