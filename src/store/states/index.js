
import {cookieStorage} from 'common/storage'

export default {
  //用户信息和是否登录
  user_info: cookieStorage.get('user_info'),
 // api_auto_token:  cookieStorage.get('api_auto_token')     // @@@@
}
