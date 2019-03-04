import Vue from 'vue'
import MintUi from 'mint-ui'
import App from './app.vue'
import VueRouter from 'vue-router'
//mint-ui 组件注册为Vue全局组件使用
import { Button, Cell, Header} from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header)

//导入mui样式
import '../lib/mui/css/mui.css'

import router from '../src/router.js'
//Vue 使用 路由
Vue.use(VueRouter)

let vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})