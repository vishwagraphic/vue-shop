import API from '../Api'
const getDeals = () => {
  return API.axiosService().get('dealsProducts')
}
export default {
  getDeals
}
