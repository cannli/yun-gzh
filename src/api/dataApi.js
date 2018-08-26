import fetch from 'common/fetch'

// 应用 - 添加编辑文章
export function saveOrUpdateArticle(data) {
  return fetch({
    url: window.projectRootUrl + '/saveOrUpdateArticle.do',
    method: 'post',
    data
  })
}

// 手机验证 window.projectRootUrl = 'http://health.junlz.com/bghealth/api'
/*
queryFrom=1 学校注册
queryFrom==2  微信家长绑定手机号接口
 queryFrom==3     微信认领孩子时候手机验证接口
* */
export function getPhoneCode(params) {
  return fetch({
    url: window.projectRootUrl + '/users/getPhoneCode.do',
    method: 'get',
    params
  })
}

// 获取宝贝信息
export function getBabyInfo(params) {
  return fetch({
    url: window.projectRootUrl + '/weChat/getStudentList.do',
    method: 'get',
    params
  })
}

// 确认宝贝 确认父母信息
export function submit(params) {
  return fetch({
    url: window.projectRootUrl + '/weChat/addStudent.do',
    method: 'post',
    params
  })
}
// 资料修改保存

export function updateUserInfo(params) {
  return fetch({
    url: window.projectRootUrl + '/weChat/updateUserInfo.do',
    method: 'post',
    params
  })
}

