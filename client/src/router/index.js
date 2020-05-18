import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Registrado from '@/components/Registrado'
import Blog from '@/components/Blog'
import Registro from '@/components/Registro'
import Login from '@/components/Login'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/registrado',
      name: 'Registrado',
      component: Registrado
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
