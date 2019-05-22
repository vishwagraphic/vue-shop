<template>
  <div id="app" class="main">
    <Topnav v-bind:signin="signin" ref="childComponent"></Topnav>
    <router-view />
    <Bottomnav></Bottomnav>
  </div>
</template>

<script>
import Topnav from '@/components/common/Topnav'
import Bottomnav from '@/components/common/Bottomnav'
export default {
  name: 'App',
  components: {
    Topnav,
    Bottomnav
  },
  data () {
    console.log(localStorage)
    return {
      signin: false,
      user: {
        name: localStorage.username || '',
        id: localStorage.id || '',
        email: localStorage.email || ''
      },
      cart: {
        count: 0
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
      this.$refs.childComponent.setValue(userData.name)
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
