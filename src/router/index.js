import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VTest1 from '@/components/VTest1'
import EleTest1 from '@/components/EleTest1'
import Login from '@/components/2_1login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vtest1',
      name: 'VTest1',
      component: VTest1
    },
    {
      path: '/eletest1',
      name: 'EleTest1',
      component: EleTest1
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
