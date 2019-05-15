import API from '../Api'
const registerUser = (user) => {
  return API.axiosService().post('register', user, {headers: {'Accept': 'application/json'}})
}
export default {
  registerUser
}
