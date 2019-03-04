import VueRouter from 'vue-router'
import first from './component/tab-component/1.vue'
import second from './component/tab-component/2.vue'
import third from './component/tab-component/3.vue'
import fouth from './component/tab-component/4.vue'

let router = new VueRouter({
  routes: [
    {path: '/first', component: first},
    {path: '/second', component: second},
    {path: '/third', component: third},
    {path: '/fouth', component: fouth}
  ],
  linkActiveClass: 'mui-active'
})

export default router