import API from '../Api'
const getLowCost = () => {
  return API.axiosService().get('lowCostProducts')
}
export default {
  getLowCost
}
