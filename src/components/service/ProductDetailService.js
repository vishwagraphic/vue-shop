import API from '../Api'
const GetProductDetail = (id) => {
  return API.axiosService().post('product/' + id, {id: id})
}
export default {
  GetProductDetail
}
