import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VTest1 from '@/components/VTest1'
import EleTest1 from '@/components/EleTest1'
import Login from '@/components/2_1login/Login'
import Vtest2 from '../Vtest2'
import BackGround from '@/components/common/BackGround'
import Home from '@/components/2_2home/2_2'
import two_three from  '@/components/2_3/2_3'
import two_four from  '@/components/2_4/2_4'
import start from '@/components/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
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
    },
    {
      path: '/vtest2',
      name: 'Vtest2',
      component: Vtest2
    },
    {
      path: '/background',
      name: BackGround,
      component: BackGround
    },
    {
      path:'/home',
      name: Home,
      component: Home,
      children:[{
        path: '/two_four',
        name: two_four,
        component: two_four

      }]
    },
    {
      path: '/two_three',
      name: two_three,
      component: two_three
    },
    {
      path: '/start',
      name: start,
      component:start
    }


  ]
})
