import API from '../Api'
const GetCartProducts = (ids) => {
  return API.axiosService().post('cart/', {ids: ids})
}
export default {
  GetCartProducts
}
