<template>
  <div class="page">

    <form class="signin-form form-horizontal">
      <div class="contenter">
        <div class="page-part">
          <fallback slot="arrow" style="position:absolute;top:15px;left:15px;z-index:100"></fallback>
          <!-- <div class="image_upload">
             <div>
               <img :src="data.imgUrl" width="90" height="90">
             </div>
           </div>-->
          <!--  <image-upload class="image_upload" :imgUrl="data.imgUrl"></image-upload>
            <div class="image_upload">
              <div>
                <input type="file" />
              </div>
            </div>-->
          <div  class="image_upload">
            <vue-core-image-upload

              :crop="false"
              @imageuploaded="imageuploaded"
              input-of-file="file"
              :max-file-size="5242880"
              :url="uploadUrl"
              :headers="headers">
              <img :src="dataObj.imgUrl" style="width: 100px;height: 100px; border-radius: 50%;"/>
            </vue-core-image-upload>
          </div>
        </div>

        <div class="page-part">
          <a class="mint-cell mint-field">
            <!---->
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                <!---->
                <span class="mint-cell-text">姓名</span>
                <!---->
              </div>
              <div class="mint-cell-value">
                <input placeholder="" type="text" class="mint-field-core" name="name"
                       v-model="dataObj.name">
              </div>
              <!---->
            </div>
            <div class="mint-cell-right"></div>

          </a>

          <a class="mint-cell mint-field">
            <!---->
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                <span class="mint-cell-text">性别</span>
              </div>
              <div class="mint-cell-value">
                <label class="mint-radiolist-label">
                                    <span class="mint-radio">
                                        <input type="radio" class="mint-radio-input" value="1" name="sex"
                                               v-model="dataObj.sex">
                                        <span class="mint-radio-core"></span>
                                    </span>
                  <span class="mint-radio-label">男</span>
                </label>
                <label class="mint-radiolist-label">
                                    <span class="mint-radio">
                                        <input type="radio" class="mint-radio-input" value="2" name="sex"
                                               v-model="dataObj.sex">
                                        <span class="mint-radio-core"></span>
                                    </span>
                  <span class="mint-radio-label">女</span>
                </label>

                <span class="mint-field-state is-default">
                                    <i class="mintui mintui-field-default"></i>
                                </span>
                <div class="mint-field-other"></div>
              </div>
            </div>
            <div class="mint-cell-right"></div>
          </a>
          <a class="mint-cell mint-field">
            <!---->
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                <!---->
                <span class="mint-cell-text">手机</span>
                <!---->
              </div>
              <div class="mint-cell-value">
                <input placeholder="" type="text" class="mint-field-core"
                       v-model="dataObj.phone" value="">
              </div>
              <!---->
            </div>
            <div class="mint-cell-right"></div>

          </a>

        </div>


      </div>

      <copy-right>
        <div class="btnsn" slot="btns">
          <mt-button type="primary" size="large" @click="submitFn">保存</mt-button>
        </div>
      </copy-right>

    </form>
  </div>
</template>

<script>
  import fallback from 'components/fallback.vue'
  import CopyRight from 'components/copy-right.vue'
  import AreaList from 'components/area-list.vue'
  import VueCoreImageUpload from 'vue-core-image-upload'
  import {Toast} from 'mint-ui'
  export default {
    data() {
      return {

        headers: {},
        uploadUrl: window.projectRootUrl + '/weChat/uploadImg.do',
        dataObj: {
          imgUrl: require('../../static/images/1.jpg'),
          name: '',
          sex: '1',
          phone: ''
        }
      }
    },
    components: {
      fallback,
      CopyRight,
      AreaList,
      VueCoreImageUpload
    },
    head() {
      return this.$seo('修改资料')
    },
    mounted() {
      this.$nextTick(() => {
        this.headers = {Authorization: this.$store.state.user_info.user, userType: 1}
      })
    },
    created() {
        this.getBabyInfo();
    },
    methods: {
      imageuploaded(res) {
        console.log(res)
        if (res.code == 200) {
          this.dataObj.imgUrl = res.data.fileName;
        } else {
          Toast({
            message: data.msg,
          })
        }
      },
      getBabyInfo() {
        let self = this
        let params = {

        }
        this.$fetch.dataApi.getBabyInfo(params).then(({data, msg, total}) => {
          self.babyList = data.childrenList;
          self.dataObj = data.userInfo;
        }).catch(({code,data,msg}) => {

        })
      },
      open: function (picker) {
        this.$refs[picker].open()
      },

      submitFn() {
        let self = this
        let params = {
          name: self.dataObj.name,

        }
        this.$fetch.dataApi.updateUserInfo(params).then(({data, msg, total}) => {
          Toast({
            message: '保存成功'
          })
        }).catch((code,data,msg) => {
          Toast({
            message: msg,
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  .page {
    background: #f5f5f5;
  }

  .fallback {
    padding: 20px 20px 0;
    background: #fff;
  }

  .page-part {
    margin-bottom: 15px;

    span.red {
      color: #ff6363;
      font-size: 14px;
      margin-right: 20px;
    }

  }

  .getCity {
    font-size: 20px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  img {
    height: 60px;
    width: 60px;
  }

  .image_upload {
    text-align: center;
    width: 100%;
    height: 150px;
    position: relative;
    top: 70px;
    margin-bottom: 50px;
    display: inline-block;
  }

  .mint-cell-value {
    position: relative;
  }

  .is-danger {
    position: absolute;
    right: 0;
    padding: 5px 8px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 5px;
    z-index: 100;

    &
    ::before {
      position: absolute;
      top: 50%;
      left: 0;
      content: '';
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 7px solid rgba(0, 0, 0, 0.7);
      transform: translate(-100%, -50%);
    }

  }
</style>

