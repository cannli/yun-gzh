<template>
  <div class="page">
    <header-vue class="">
      <user-info slot="info" :parent="parent"></user-info>
    </header-vue>

    <div class="content" v-if="babyList.length>0">
      <div class="content-title">
        <div>我的宝贝</div>
      </div>
      <baby-list :data="babyList"></baby-list>
    </div>
    <noData v-else></noData>
    <copy-right>
      <div class="btns" slot="btns">
        <router-link to="/addBaby">
          <mt-button type="primary">添加宝贝</mt-button>
        </router-link>
      </div>
    </copy-right>
  </div>
</template>

<script>
  // import { getData } from '~/plugins/axios.js'
  import {mapActions} from 'vuex'
  import {SET_USER_INFO} from 'store/actions/type'
  import HeaderVue from '../../components/header.vue'
  import UserInfo from 'components/user-info.vue'
  import BabyList from 'components/baby-list.vue'
  import CopyRight from 'components/copy-right.vue'
  import noData from 'components/tableNodata.vue'

  export default {
    data() {
      return {
        babyList: [],
        parent: {}
      }
    },
    components: {
      HeaderVue,
      UserInfo,
      BabyList,
      CopyRight,
      noData
    },
    head() {
      return this.$seo('我的宝贝')
    },
    created() {
     let obj = window.localStorage.getItem('tokenId')
   //   let obj = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5YjA1ZmVkNS00NmI0LTQwZjItOTRjNi0xMGRkYTM3MmFkYmQiLCJpYXQiOjE1NDQ5NTU0MDIsInN1YiI6IntcImhlYWRJbWdcIjpcImh0dHA6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSXZQaWI2YXhQb1pwbHhOS1NHbExZa29QbDgwd2lhdkw5SUJXaWNZN3BpY3J3TlFNZUt1ZDNwR1NxTEp6cG4xSTVwTzBTNGxDbmlickdpY2lhMVEvMTMyXCIsXCJuaWNrTmFtZVwiOlwi6IOh5bCa5aWOXCIsXCJzZXhcIjpcIjFcIixcImlkXCI6NzAyLFwidXNlclR5cGVcIjpcIjFcIn0iLCJleHAiOjE1NDQ5OTg2MDJ9.1ADreMUsi6O_Ru85OlW-LrjuMriERzv_eBJjASYBGWw'
      this.set_user_info({
        user: obj,
        //  login: obj.isbindPhone
      })
    },
    mounted() {
      this.$nextTick(() => {
        this.$indicator.open('加载中...');
        this.getBabyInfo();
      })
    },
    methods: {
      ...mapActions({
        set_user_info: SET_USER_INFO
      }),
      getBabyInfo() {
        let self = this
        let params = {}
        self.$fetch.dataApi.getBabyInfo(params).then(({data, msg, total}) => {
          self.babyList = data.childrenList;
          self.parent = data.userInfo;
          self.$indicator.close()
        }).catch(() => {
          self.$indicator.close()
        })
      },
      babyManage() {
        this.$router.push('/babyManage')
      },
      userCenter() {
        this.$router.push('/userCenter')
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  .content-title {
    width: 300px;
    font-size: 16px;
    color: #999;
    margin: 0 auto;
    position: relative;
    text-align: center;
    div:before {
      content: '';
      border-top: 1px solid #e5e5e5;
      display: block;
      position: absolute;
      width: 90px;
      top: 10px;
      left: 0;
    }
    div:after {
      content: '';
      border-top: 1px solid #e5e5e5;
      display: block;
      position: absolute;
      width: 90px;
      top: 10px;
      right: 0;
    }
  }
</style>

