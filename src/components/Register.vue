<template>
  <div class="container my-5" style="width:300px; min-height:700px">
    <div v-if="registerErr" class="text-danger">User already exist</div>
    <b-form v-on:submit.prevent="onSubmit" novalidate="">
      <b-form-group id="input-group-1" label="Full Name:" label-for="name">
        <b-form-input
          id="name"
          autocomplete="name"
          type="text"
          v-model="register.name"
          name="name"
          v-validate="'required|alpha_spaces'"
          placeholder="Enter name"
          v-bind:class="{'form-control': true, 'error': errors.has('name') }"
        ></b-form-input>
        <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
      </b-form-group>
      <b-form-group id="input-group-1" label="Email address:" label-for="email">
        <b-form-input
          id="email"
          autocomplete="email"
          type="email"
          name="email"
          v-model="register.email"
          v-validate="'required|email'"
          placeholder="Enter email"
        ></b-form-input>
        <span v-show="errors.has('name')" class="text-danger">{{ errors.first('email') }}</span>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="password">
        <b-form-input
          id="password"
          autocomplete="password"
          v-model="register.password"
          type="password"
          name="password"
          v-validate="'required'"
          placeholder="Enter Password"
        ></b-form-input>
        <span v-show="errors.has('name')" class="text-danger">{{ errors.first('password') }}</span>
        <p></p>
      </b-form-group>
      <div class="my-4">
        <button class="btn btn-primary w-100" :disabled="errors.any()" >Register</button>
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
      },
      registerErr: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$validator.validateAll().then(() => {
        if (this.errors.items.length < 1) {
          this.registerCall()
        }
      }).catch(() => {
        console.log('errors exist', this.errors)
      })
    },
    async registerCall () {
      await registerService.registerUser(this.register)
        .then((response) => {
          this.$router.push('/signin')
        })
        .catch((error) => {
          if (error.response.data === 'User already exist') {
            this.registerErr = true
          }
        })
    }
  }
}
</script>
