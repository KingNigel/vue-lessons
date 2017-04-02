import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
