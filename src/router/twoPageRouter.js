import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import twoPage from '../pages/twopage/twoPage.vue' //首页组件需要引入进来

//路由的配置数组
// path 必填。对应地址路径必须以 / 开头
// component 必填。对应的的路由组件
// name 路由的名字
const routes = [
  {
    path: '/two', //首页
    name: 'twoPage',
    component: twoPage //首页对应的组件，已用import引入
  },
]

//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
