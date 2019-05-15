import API from '../Api'
const postSignIn = (user) => {
  return API.axiosService().post('signIn', user, {headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
}
export default {
  postSignIn
}
