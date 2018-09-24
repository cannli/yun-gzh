/**
 * @file: index.
 * @intro: 数据请求统一封装.
 */
//导入模块
import axios from 'axios'
import {port_code} from 'common/port_uri'
import router from 'src/router'
import store from 'store'
import {SET_USER_INFO} from 'store/actions/type'
import {server_base_url} from 'common/config'


const qs = require('qs')

//设置用户信息action
const setUserInfo = function (user) {
  store.dispatch(SET_USER_INFO, user)
}

export default function fetch(options) {
  return new Promise((resolve, reject) => {
    //创建一个axios实例
    const instance = axios.create({
      //设置默认根地址
      baseURL: server_base_url,
      //设置请求超时设置
      timeout: 5000,
      //设置请求时的header text/plain,*/*
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Accept': 'application/json'

        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json,text/plain,*/*',
        'userType': 1,
       // 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwMjIzNjFlOS1iMTUxLTQ3N2EtYTI5NS04MDYwZTViZGRkMjQiLCJpYXQiOjE1MzU4NjQyOTIsInN1YiI6IntcImhlYWRJbWdcIjpcImh0dHA6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9pYUh4cTU3UVhka0lMeFNlNFBTbnVEMFc4blJIRDNHbUQ3ZUc3NW1YeGlhdXI1SnVKUGdSVmljMFQ3TE03V1ZRSHdJUGZmSGdMdmJ3Y3RVeXlpY0pxdGtoSmcvMTMyXCIsXCJuaWNrTmFtZVwiOlwiYWJvXCIsXCJzZXhcIjpcIjFcIixcIm5hbWVcIjpcImFib1wiLFwiaWRcIjo2ODAsXCJ1c2VyVHlwZVwiOlwiMVwiLFwidXNlck5hbWVcIjpcImFib1wifSIsImV4cCI6MTUzNTkwNzQ5Mn0.wMP0XQ3tD1jl6aT2At6bBIeESQR-gjZr_105iae7ZkY'
      }
    })
    instance.interceptors.request.use(options => {
      let is_login = store.state.user_info
     // if (Boolean(is_login.login)) {
        options.headers['Authorization'] = is_login.user// 让每个请求携带token--['token']为自定义key, 本项目不用 token
     // }
      // options.data = qs.stringify(options.data);
      options.data = options.data;
      return options;
    }, error => {
      Promise.reject(error);
    })
    //请求处理
    instance(options).then(({data: {code, msg, data, total}}) => {
      // alert(data)
      // 请求成功时,根据业务判断状态
      if (code == 200) {
        resolve({code, msg, data, total})
        return false
      }

      reject({code, msg, data})
    }).catch((error) => {
      //请求失败时,根据业务判断状态
      if (error.response) {
        let resError = error.response
        let resCode = resError.status
        let resMsg = error.message
        reject({code: resCode, msg: resMsg})
      }
    })
  })
}
