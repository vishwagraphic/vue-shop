import API from '../Api'
const getProducts = (type) => {
  return API.axiosService().get('products', {params: {type: type}})
}
export default {
  getProducts
}
