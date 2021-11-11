const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  //将打包的生产环境路径为相对路径，开发环境为绝对路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist', //运行npm run build 时的打包文件夹
  assetsDir: '', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录

  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'vue cli4 demo',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    one: {
      // page 的入口
      entry: 'src/pages/onepage/onePage.js',
      // 模板来源
      template: 'public/one-page.html',
      // 在 dist/index.html 的输出
      filename: 'one-page.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'one'
    },
    two: {
      // page 的入口
      entry: 'src/pages/twopage/twoPage.js',
      // 模板来源
      template: 'public/two-page.html',
      // 在 dist/index.html 的输出
      filename: 'two-page.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'two'
    },
  },
  
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: 'localhost',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    
    //跨域处理，利用同源策略，将后端 api 地址映射到本地
    proxy: {
      /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
      实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
      */
     // 匹配所有以 '/api'开头的请求路径
      '/api': {
        target: 'http://192.168.0.90:3000', // 实际请求接口的 api 地址，该地址跨域
        ws: true,
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '', //用/api 代替target
        },
      },
    },
  },

  // webpack的配置,会被 webpack-merge 合并入最终的 webpack 配置
  configureWebpack: config => { },
  //对内部的webpack配置进行更细粒度的修改
  chainWebpack: config => { },
}