<template>
  <div class="container my-5" style="width:500px; min-height:700px">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="">
        <b-form-input
          id="input-1"
          type="email"
          v-model="sign.email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="sign.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>
      <div class="my-4">
        <b-button type="submit" variant="primary" class="mr-3">Signin</b-button>
        <b-button type="button" variant="secondary"><router-link to="/register" class="text-white">Regiser</router-link></b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import SignInService from './service/SignInService'
export default {
  name: 'Signin',
  data () {
    return {
      sign: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$parent.signin = true
      this.postSign()
      this.$router.push('/')
    },
    async postSign () {
      const response = await SignInService.postSignIn(this.sign)
      this.$parent.pushData(response.data)
      localStorage.setItem('userid', response.data.id)
      localStorage.setItem('username', response.data.name)
      localStorage.setItem('useremail', response.data.email)
    }
  }
}
</script>
