import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
//如果需要获取根组修件，注释掉上面这一句，用下面两句
// window.app =  createApp(App).use(store).use(router);
// window.vm = app.mount("#app");
