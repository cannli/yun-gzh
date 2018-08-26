/**
 * 路由Map
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from 'store';
// import 'nprogress/nprogress.css';

//import components
//view page warp component
const viewPageComponent = resolve => require(['pages/App'], resolve)
//home
const homeComponent = resolve => require(['pages/home/index'], resolve)
//login
const loginComponent = resolve => require(['pages/user/login'], resolve)

// 添加宝贝
const addBaby = resolve => require(['pages/addBaby'], resolve)
// babyManage
const babyManage = resolve => require(['pages/babyManage'], resolve)
// parentManage
const parentManage = resolve => require(['pages/parentManage'], resolve)
//babyInfo
const babyInfo = resolve => require(['pages/babyInfo'], resolve)
//info
const info = resolve => require(['pages/info'], resolve)
//bindPhone1
// const bindPhone1 = resolve => require(['pages/bindPhone1'], resolve)
Vue.use(VueRouter)

//使用AMD方式加载
// component: resolve => require(['pages/home'], resolve),
const routes = [
  {
    path: '/user/login',
    name: 'login',
    component: loginComponent
  },
  {
    path: '/',
    redirect: '/home',
    component: viewPageComponent,
    children: [
      {
        path: '/home',
        name: 'home',
        component: homeComponent,
        meta: {
          title: '我的宝贝',
          auth: true
        }
      },
      {
        path: '/addBaby',
        name: 'addBaby',
        component: addBaby,
        meta: {
          title: '添加宝贝',
          auth: true
        }
      },
      {
        path: '/babyManage',
        name: 'babyManage',
        component: babyManage,
        meta: {
          title: '宝贝详情',
          auth: true
        }
      },
      {
        path: '/parentManage',
        name: 'parentManage',
        component: parentManage,
        meta: {
          title: '宝贝详情',
          auth: true
        }
      },
      {
        path: 'babyInfo',
        name: 'babyInfo',
        component: babyInfo,
        meta: {
          title: '宝贝健康列表',
          auth: true
        }
      },
      {
        path: 'info',
        name: 'info',
        component: info,
        meta: {
          title: '宝贝健康详情',
          auth: true
        }
      }/*,
      {
        path: 'bindPhone1',
        name: 'bindPhone1',
        component: bindPhone1,
        meta: {
          title: '家长绑定电话',
          auth: true
        }
      }*/
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'hash', //default: hash ,history
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  }
});

//全局路由配置
//路由开始之前的操作
/*router.beforeEach((to, from, next) => {
  // NProgress.done().start();
  let toName = to.name;
  // let fromName = from.name
  let is_login = store.state.user_info.login;
  if (!is_login && toName !== 'login') {
    next({
      name: 'login'
    });
  } else {
    if (is_login && toName === 'login') {
      next({
        path: '/'
      });
    } else {
      next();
    }
  }
});*/

//路由完成之后的操作
/*
router.afterEach(route => {
  NProgress.done();
});
*/

export default router;
