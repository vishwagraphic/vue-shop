<template>
  <div id="app" class="main">
    <Topnav v-bind:signin="signin" ref="childComponent"></Topnav>
    <div class="mb-5">
      <router-view />
    </div>
    <Bottomnav></Bottomnav>
  </div>
</template>

<script>
import Topnav from '@/components/common/Topnav'
import Bottomnav from '@/components/common/Bottomnav'
import CartItemService from '@/components/service/CartItemService'

/* import CartService from './components/service/CartService' */
export default {
  name: 'App',
  components: {
    Topnav,
    Bottomnav
  },
  data () {
    return {
      signin: false,
      user: {
        name: localStorage.username || '',
        id: localStorage.id || '',
        email: localStorage.email || ''
      },
      cart: {
        count: localStorage.cartCount || 0,
        idArr: localStorage.idArr || {}
      }
    }
  },
  watch: {
    user: function (val) {
      this.$refs.childComponent.setValue(val.name)
    }
  },
  mounted () {
    if (localStorage.username) {
      this.signin = true
      this.$refs.childComponent.setValue(this.user.name)
    } else {
      this.signin = false
      this.$refs.childComponent.setValue('')
    }
  },
  methods: {
    pushData (userData) {
      this.user.name = userData.name
      this.user.id = userData.id
      this.user.email = userData.email
      this.getCartDetails()
      this.$refs.childComponent.setValue(userData.name)
    },
    cartDetails (count, id) {
      let dcount = this.cart.idArr
      let totalqty = count + dcount[id]
      console.log(dcount[id])
      if (totalqty !== 0) {
        dcount[id] = (dcount[id] || 0) + count
      } else {
        delete dcount[id]
      }
      this.cart.count = parseInt(this.cart.count) + parseInt(count)
      localStorage.setItem('cartCount', this.cart.count)
      localStorage.setItem('cartArr', JSON.stringify(this.cart.idArr))
      this.updateCart()
    },
    async updateCart () {
      console.log(this.user.email)
      const response = await CartItemService.updateCart(this.user.email, this.cart.idArr, this.cart.count)
      if (response.data === 0) {
        this.postItemtoCart()
      }
    },
    async postItemtoCart () {
      console.log(this.user.email)
      const response = await CartItemService.postCart(this.user.email, this.cart.idArr, this.cart.count)
      console.log(response)
    },
    async getCartDetails () {
      const response = await CartItemService.getCartDetails(this.user.email)
      this.cart.count = response.data[0].totalcount || 0
      this.cart.idArr = response.data[0].productids || {}
      localStorage.setItem('cartCount', this.cart.count)
      localStorage.setItem('cartArr', JSON.stringify(this.cart.idArr))
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
 </style>
