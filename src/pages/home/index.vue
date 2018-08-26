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
      //let obj = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiMGNjY2U0OS00YzRmLTQzMTItOTYyMC1kY2VjMDdlOGMyYTMiLCJpYXQiOjE1MzQ5MTc3ODQsInN1YiI6IntcImhlYWRJbWdcIjpcImh0dHA6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9pYUh4cTU3UVhka0lMeFNlNFBTbnVEMFc4blJIRDNHbUQ3ZUc3NW1YeGlhdXI1SnVKUGdSVmljMFQ3TE03V1ZRSHdJUGZmSGdMdmJ3Y3RVeXlpY0pxdGtoSmcvMTMyXCIsXCJuaWNrTmFtZVwiOlwiYWJvXCIsXCJzZXhcIjpcIjFcIixcIm5hbWVcIjpcImFib1wiLFwiaWRcIjo2ODAsXCJ1c2VyVHlwZVwiOlwiMVwiLFwidXNlck5hbWVcIjpcImFib1wifSIsImV4cCI6MTUzNDk2MDk4NH0.v5C93CJxmwUlZjy7wxrWEvmqy2UAG_3iyYurLCODco8'
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
        this.$fetch.dataApi.getBabyInfo(params).then(({data, msg, total}) => {
          self.babyList = data.childrenList;
          self.parent = data.userInfo;
          self.$indicator.close()
        }).catch(() => {
          this.$indicator.close()
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

