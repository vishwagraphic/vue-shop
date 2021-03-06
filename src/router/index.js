import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Product from '@/components/Productdetail'
import Signin from '@/components/Signin'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Cart from '@/components/Cart'
import Products from '@/components/Products'
import Regconfirm from '@/components/Regconfirm'

Vue.use(Router)

export default new Router({
  /* mode: 'history', */
  hash: false,
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
      path: '/product/:id',
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
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/regconfirm',
      name: 'Regconfirm',
      component: Regconfirm
    }
  ]
})
