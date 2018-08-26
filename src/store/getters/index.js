
import * as type from 'store/getters/type'

export default {
  //获取用户信息
  [type.GET_USER_INFO]: state => {
    return state.user_info
  },
  // 获取token @@@@
  /*[type.GET_TOKEN_INFO]: state => {
    return state.api_auto_token
  },*/
}
