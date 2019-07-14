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
<<<<<<< HEAD
    // let obj = window.localStorage.getItem('tokenId')
      let obj = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3ZGY2YTU5Ni1hMjg4LTRiMGItYmZhMS0yMzNkZjM5ZjQ5ODAiLCJpYXQiOjE1NDc1NjUyMDQsInN1YiI6IntcImhlYWRJbWdcIjpcImh0dHA6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi8yNGdNeWlibWdTbzJuUFM1eExycUdzVFRXb2lhN1BZaWNpYk1pYzd4eWM2ZnBpYTEzNTZOQW05WVQ4YURJN2VUQU5IVzlpY2s1a3czMXZpY3ZzaE5pYlZyWWE4SGdMdy8xMzJcIixcIm5pY2tOYW1lXCI6XCLmmq7kupFcIixcInNleFwiOlwiMVwiLFwiaWRcIjo2OTEsXCJ1c2VyVHlwZVwiOlwiMVwifSIsImV4cCI6MTU0NzYwODQwNH0.9I114Rdc9DCscCrzJv_gvyVHjI6n6kX3WeEJkKg7N4w'
=======
     let obj = window.localStorage.getItem('tokenId')
     // let obj = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMWQzYTBiNi03YzQ4LTQ4MzQtYjZmNy01NzBiN2M1NWYzOWUiLCJpYXQiOjE1NDc2NDM0NzgsInN1YiI6IntcImhlYWRJbWdcIjpcImh0dHA6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi8yNGdNeWlibWdTbzJuUFM1eExycUdzVFRXb2lhN1BZaWNpYk1pYzd4eWM2ZnBpYTEzNTZOQW05WVQ4YURJN2VUQU5IVzlpY2s1a3czMXZpY3ZzaE5pYlZyWWE4SGdMdy8xMzJcIixcIm5pY2tOYW1lXCI6XCLmmq7kupFcIixcInNleFwiOlwiMVwiLFwiaWRcIjo2OTEsXCJ1c2VyVHlwZVwiOlwiMVwifSIsImV4cCI6MTU0NzY4NjY3OH0.vNyyilopn_KOAuFZBqXUqz_yoBvPQNFgm6-SNG-PiR4'
>>>>>>> 63b7639ecde8fe024928e04563892d0ce99f7495
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

