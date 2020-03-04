import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VTest1 from '@/components/VTest1'
import EleTest1 from '@/components/EleTest1'
import Login from '@/components/2_1login/Login'
import Vtest2 from '../Vtest2'
import BackGround from '@/components/common/BackGround'
import Home from '@/components/2_2home/2_2'
import two_four from  '@/components/2_4/2_4'
import two_five from '@/components/2_5/2_5'
import two_six from '@/components/2_6/2_6'
import two_three from '@/components/2_3/2_3'
import start from '@/components/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
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
      path: '/background',
      name: BackGround,
      component: BackGround
    },
    {
      path:'/home',
      name: Home,
      component: Home,
      children:[
        {
          path: '/two_three',
          name: two_three,
          component: two_three
        },
        {
        path: '/two_four',
        name: two_four,
        component: two_four
      },
      {
        path: '/two_five',
        name: two_five,
        component: two_five
      },
      {
        path: '/two_six',
        name: two_six,
        component: two_six
      },

      ]
    },



  ]
})
