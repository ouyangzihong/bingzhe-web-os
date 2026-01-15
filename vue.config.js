const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // 生产环境不生成 .map 文件，加速构建并保护源码
  productionSourceMap: false,
  // 部署应用包时的基本 URL (如果部署在根路径就是 '/', 如果是子路径 '/app/' 就填 '/app/')
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 静态资源目录 (js, css, img, fonts)
  assetsDir: 'assets',
  
  // (可选) 简单的 Webpack 配置优化
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境去掉 console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
})