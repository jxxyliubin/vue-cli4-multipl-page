const path = require('path');
const resolve = dir=>path.join(__dirname, dir);
module.exports = {
  //将打包的生产环境路径为相对路径，开发环境为绝对路径
  publicPath: process.env.NODE_ENV==='production' ? './' : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'todolist-demo'
        return args
      })
  },
  // webpack的配置
  configureWebpack: config => {},
}