<template>
  <div class="container my-5" style="width:500px; min-height:700px">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Full Name:" label-for="input-1" description="">
        <b-form-input
          id="input-1"
          type="text"
          v-model="register.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="">
        <b-form-input
          id="input-2"
          type="email"
          v-model="register.email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="register.password"
          type="password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>
      <div class="my-4">
        <b-button type="submit" variant="primary" class="mr-3">Register</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import registerService from './service/RegisterService'
export default {
  name: 'Register',
  data () {
    return {
      register: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$router.push('/signin')
      this.registerCall()
    },
    async registerCall () {
      const response = await registerService.registerUser(this.register)
      console.log(response.data)
    }
  }
}
</script>
