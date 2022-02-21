import App from './App'
import Vue from 'vue'
import store from './store'  

import uView from '@/uni_modules/uview-ui'
import bottomTabBar from "components/bottomTabBar/bottomTabBar.vue"//引入我们自己定义的tabBar组件
Vue.component('bottomTabBar', bottomTabBar)//使用全局tabBar组件
Vue.use(uView)

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.prototype.$baseUrl="http://127.0.0.1:3002"  //后台接口

App.mpType = 'app'
const app = new Vue({
    ...App,
    store
})
app.$mount()


// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif