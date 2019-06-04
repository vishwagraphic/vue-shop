<template>
    <b-navbar toggleable="lg" fixed="top"  type="dark" v-bind:sticky="true" variant="danger">
        <router-link to="/">
            <b-navbar-brand href="#"><img class="logo-img" src="@/assets/logo.png" height=40 />
            <strong class="logo" style="color:yellow"><router-link to="/" style="color:yellow">VUE-SHOPPING</router-link></strong></b-navbar-brand>
        </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item>
                    <router-link to="/about" class="text-white">About</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/products" class="text-white">Products</router-link>
                </b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#" v-if="!signin"><router-link to="/signin" class="text-white">Signin</router-link></b-nav-item>
                <b-nav-item-dropdown v-if="signin" right>
                    <template slot="button-content"><em>Hi, {{shortname}}</em></template>
                    <b-dropdown-item><router-link to="/profile" class="text-dark">Profile</router-link></b-dropdown-item>
                    <b-dropdown-item @click="signout">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">
                    <router-link to="/cart" class="text-white">
                        <span class="cart-count">{{$parent.cart.count}}</span>
                        <img src="@/assets/cart-icon.png" height="25" />
                    </router-link>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
  name: 'Topnav',
  props: ['signin'],
  data () {
    return {
      shortname: '',
      cartCnt: ''
    }
  },
  methods: {
    signout () {
      localStorage.clear()
      this.$parent.user.id = ''
      this.$parent.user.name = ''
      this.$parent.user.email = ''
      this.$parent.cart.count = 0
      this.$parent.cart.idArr = {}
      this.$parent.signin = false
      this.$router.push('/')
    },
    setValue (name) {
      this.shortname = name.split(' ')[0]
    }
  }
}
</script>
