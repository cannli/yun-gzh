//导入样式
// import 'normalize.css'
// import 'font-awesome/scss/font-awesome.scss'
//导入Vue框架
import Vue from 'vue'
//导入组件
import router from './router'
//导入状态管理器
import store from 'store'
//导入请求框架
import api from './api'
//导入主视图文件
import App from './App'
//导入mock数据
import ku from "./assets/js/ku.js"
import './ui.js'
// 使用icon
//import 'assets/icon/style.css'

import Mint from 'mint-ui'

Vue.use(Mint);
//import 'mint-ui/lib/style.css'
window.projectRootUrl = 'http://www.egrowth.cn/api'


Vue.use(api)
Vue.use(ku)

//发布后是否显示提示
Vue.config.productionTip = false

//是否开启工具调试
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  router,
  store,
  ...App
}).$mount('mainbody')
