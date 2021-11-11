import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue' //首页组件需要引入进来

//路由的配置数组
// path 必填。对应地址路径必须以 / 开头
// component 必填。对应的的路由组件
// name 路由的名字
const routes = [
  {
    path: '/', //首页
    name: 'Start',
    component: Start //首页对应的组件，已用import引入
  },
  {
    path: '/about',
    name: 'About',
    //按需引入，节约性能。除首页外，一般都按需引入。
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    //按需引入，节约性能。除首页外，一般都按需引入。
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  {
    path: '/home',
    name: 'Home',
    //按需引入，节约性能。除首页外，一般都按需引入。
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      document.getElementById("title").innerHTML = 'Home';
      next();
    }
  }
]

//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
