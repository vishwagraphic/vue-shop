import API from '../Api'
const postCart = (email, idArr, count) => {
  return API.axiosService().post('postCart', {
    email: email,
    productids: idArr,
    count: count
  })
}
const updateCart = (email, idArr, count) => {
  return API.axiosService().put('postCart', {
    email: email,
    productids: idArr,
    count: count
  })
}
const getCartDetails = (email) => {
  return API.axiosService().post('cartDetails', {email})
}
export default {
  postCart,
  updateCart,
  getCartDetails
}
