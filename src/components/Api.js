import axios from 'axios'

const axiosService = () => {
  return axios.create({
    // baseURL: `http://localhost:8081`
    baseURL: `https://vue-react-server.herokuapp.com`
  })
}
export default {
  axiosService
}
