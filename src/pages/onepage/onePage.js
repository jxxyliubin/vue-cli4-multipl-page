//类似main.js
import { createApp } from 'vue'
import onePage from "./onePage.vue";
import router from '../../router/onePageRouter'
import store from '../../store'

createApp(onePage).use(store).use(router).mount('#onePage')
