const path = require('path');
const resolve = dir=>path.join(__dirname, dir);
module.exports = {
  //将打包的生产环境路径为相对路径，开发环境为绝对路径
  publicPath: process.env.NODE_ENV==='production' ? './' : '/',
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

  // pages:{
  //   index: {
  //     // page 的入口
  //     entry: 'src/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'vue cli4 demo',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   onePage: {
  //     entry: "src/pages/onepage/onePage.js",
  //     template: "public/one-page.html",
  //     filename: "one-page.html",
  //     title: "one"
  //   },
  //   twoPage: {
  //     entry: "src/pages/twopage/twoPage.js",
  //     template: "public/two-page.html",
  //     filename: "one-page.html",
  //     title: "two"
  //   },
  // },

  // devServer:{
  //   host: 'localhost',
  //   port: '8080', //当同时运行多个项目时就需要配置这个端口
  //   https: false,
  //   hotOnly: true, //是否热更新
  //   open: false, //是否自动启动浏览器
  //   // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
  //   historyApiFallback: {
  //       index: '/index.html', //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
  //   },
  // },
  // webpack的配置,会被 webpack-merge 合并入最终的 webpack 配置
  configureWebpack: config => {},
  //对内部的webpack配置进行更细粒度的修改
  chainWebpack: config => {
    // config
    //   .plugin('html')
    //   .tap(args => {
    //     args[0].title= 'todolist-demo'
    //     return args
    //   })
  },
}