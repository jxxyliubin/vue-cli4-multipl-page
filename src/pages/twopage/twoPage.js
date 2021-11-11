//类似main.js
import { createApp } from 'vue'
import twoPage from "./twoPage.vue";
import router from '../../router/twoPageRouter'
import store from '../../store'

createApp(twoPage).use(store).use(router).mount('#twoPage')