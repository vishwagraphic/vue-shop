import axios from 'axios'

const axiosService = () => {
  return axios.create({
    baseURL: `https://vue-react-server.herokuapp.com`
  })
}
export default {
  axiosService
}
