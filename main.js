import App from './App'

import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import tabBar from "components/tabBar/tabBar.vue"//引入我们自己定义的tabBar组件
Vue.component('tab-bar', tabBar)//使用全局tabBar组件
Vue.use(uView)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
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