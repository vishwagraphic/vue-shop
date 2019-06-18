<template>
  <div class="container my-5 form-width">
    <div v-if="signInErr" class="text-danger">You have entered invalid username or password</div>
    <b-form @submit="onSubmit" novalidate="">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="">
        <b-form-input
          id="input-1"
          autocomplete="email"
          type="text"
          name="email"
          v-model="sign.email"
          v-validate="'required|email'"
          placeholder="Enter email"
          v-bind:class="{'form-control': true, 'error': errors.has('email') }"
        ></b-form-input>
        <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          name="password"
          autocomplete="password"
          v-model="sign.password"
          v-validate="'required'"
          placeholder="Enter Password"
          v-bind:class="{'form-control': true, 'error': errors.has('password') }"
        ></b-form-input>
        <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
      </b-form-group>
      <div class="my-4 ">
        <b-button type="submit" variant="primary" class="mr-3 w-100" :disabled="errors.any()">Signin</b-button>
      </div>
      <div>
        <p class="m-0">New user? Regiser here</p>
        <b-button type="button" variant="secondary" class="w-100"><router-link to="/register" class="text-white">Regiser</router-link></b-button>
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
        email: '',
        password: ''
      },
      signInErr: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.log('test')
      this.$validator.validateAll().then(() => {
        if (this.errors.items.length < 1) {
          this.postSign()
        }
      }).catch(() => {
        console.log('Errors ' + this.errors)
      })
    },
    async postSign () {
      await SignInService.postSignIn(this.sign)
        .then(response => {
          this.$parent.pushData(response.data)
          localStorage.setItem('userid', response.data.id)
          localStorage.setItem('username', response.data.name)
          localStorage.setItem('useremail', response.data.email)
          this.$parent.signin = true
          this.$router.push('/')
          this.signInErr = false
        })
        .catch(() => {
          this.signInErr = true
        })
    }
  }
}
</script>
