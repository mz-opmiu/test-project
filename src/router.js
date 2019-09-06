import Vue from 'vue'
import Router from 'vue-router'
import { checkDeviceKind } from '@/js/utils/device.js'

const deviceKind = checkDeviceKind()

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/mimaskstick',
      name: 'mimaskstick',
      component: () => import(`./mimaskstick/${deviceKind}/App.vue`)
    },
    { path: '/', redirect: { name: 'mimaskstick' } }
  ]
})
