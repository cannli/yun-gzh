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

// 根据小孩ID获取小孩体检的次数
export function getStudentExamList(params) {
  return fetch({
    url: window.projectRootUrl + '/weChat/getStudentExamList.do',
    method: 'get',
    params
  })
}

// 根据小孩ID获取小孩体检里面的详情
export function examdetail(params) {
  return fetch({
    url: window.projectRootUrl + '/weChat/getExamRecordDetail.do',
    method: 'get',
    params
  })
}

/**********************************成长轨迹**********************************/

// 身高
export function heightTrail(params) {
  return fetch({
    url: window.projectRootUrl + '/admin/user/heightTrail.do',
    method: 'get',
    params
  })
}
// 体重
export function weightTrail(params) {
  return fetch({
    url: window.projectRootUrl + '/admin/user/weightTrail.do',
    method: 'get',
    params
  })
}

// 获取人体数据 /admin/user/shapeTrail.do?
export function shapeTrail(params) {
  return fetch({
    url: window.projectRootUrl + '/admin/user/shapeTrail.do',
    method: 'get',
    params
  })
}
// 风险
export function riskTrail(params) {
  return fetch({
    url: window.projectRootUrl + '/admin/user/riskTrail.do',
    method: 'get',
    params
  })
}

// 文章推荐  /weChat/recommendArticleList.do?custCode=&id=学生id
export function recommendArticleList(params) {
  return fetch({
    url: window.projectRootUrl + '/weChat/recommendArticleList.do',
    method: 'get',
    params
  })
}
