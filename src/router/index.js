import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Product from '@/components/Productdetail'
import Signin from '@/components/Signin'
import Register from '@/components/Register'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
