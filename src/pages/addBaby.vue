<template>
  <div class="page">
    <fallback slot="arrow"></fallback>
    <div class="signin-form form-horizontal">
      <div class="contenter">
        <div class="page-part">
          <a class="mint-cell mint-field">
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                <span class="mint-cell-text">添加方式</span>
              </div>
              <div class="mint-cell-value">
                <label class="mint-radiolist-label">
                                    <span class="mint-radio">
                                        <input type="radio" class="mint-radio-input" value="2" name="types"
                                               v-model="dataObj.types">
                                        <span class="mint-radio-core"></span>
                                    </span>
                  <span class="mint-radio-label">手机号码</span>
                </label>
                <label class="mint-radiolist-label">
                                    <span class="mint-radio">
                                        <input type="radio" class="mint-radio-input" value="1" name="types"
                                               v-model="dataObj.types">
                                        <span class="mint-radio-core"></span>
                                    </span>
                  <span class="mint-radio-label">宝贝证件号</span>
                </label>

                <span class="mint-field-state is-default">
                                    <i class="mintui mintui-field-default"></i>
                                </span>
                <div class="mint-field-other"></div>
              </div>
            </div>
            <div class="mint-cell-right"></div>
          </a>


          <mt-field v-show="dataObj.types==1" label="证件" placeholder="出生证编号或身份证号"
                    v-model="dataObj.cartNum"></mt-field>

          <mt-field v-show="dataObj.types==2" label="家长电话" placeholder="请输入家长联系号码"
                    v-model="dataObj.parentPhone"></mt-field>

          <!-- <mt-field v-if="data.types==1" label="验证码" placeholder="验证码" v-model="data.code"></mt-field>-->

          <div class="par" v-show="dataObj.types==2">
            <!--  <span>短信验证码：</span>-->
            <mt-field v-model="dataObj.code" label="短信验证码" placeholder="请输入短信验证码"
                      style="width: 70%;"></mt-field>
            <div class="butYZM">
              <mt-button type="primary" @click="dx_yzm_bt" class="tip1" v-show="is_dx_yz">获取验证码
              </mt-button>
              <mt-button type="primary" class="tip2"
                         v-show="!is_dx_yz">{{time}}秒后重新获取
              </mt-button>
            </div>
          </div>
        </div>
      </div>

      <copy-right>
        <div class="btnsn" slot="btns">
          <mt-button type="primary" size="large" @click="submit">确认添加</mt-button>
          <p style="text-align:center;color:#B2B2B2;font-size:12px;margin-top:10px;">宝贝信息只用于账户绑定，其他人不会看见</p>
        </div>
      </copy-right>

    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  // import {getData} from '~/plugins/axios.js'
  import fallback from 'components/fallback.vue'
  // import ImageUpload from '~/components/image-upload.vue'
  import CopyRight from 'components/copy-right.vue'
  //import AreaList from 'components/area-list.vue'


  export default {
    data() {
      return {
        dataObj: {
          types: '2',
          cartNum: '',
          code: '',
          parentPhone: ''
        },
        time: 60,
        is_dx_yz: true,
      }
    },
    components: {
      fallback,
      CopyRight,
      // AreaList,
      //  ImageUpload
    },
    /*  head() {
        return this.$seo('添加宝贝')
      },*/
    methods: {
      dx_yzm_bt() {
        if (!this.dataObj.parentPhone || this.dataObj.parentPhone === '' || this.dataObj.parentPhone === null) {
          Toast({
            message: '手机号码不能为空~',
          })
          return
        } else {
          this.is_dx_yz = false
          this.getPhoneCode()
          let dx_djs = setInterval(() => {
            if ((this.time--) <= 0) {
              this.time = 60;
              this.is_dx_yz = true;
              clearInterval(dx_djs);
            }
          }, 1000)
        }

      },
      submit() {
        let data = this.dataObj;
        let params = {
          types: data.types,
          cartNum: data.cartNum,
          code: data.code,
          parentPhone: data.parentPhone
        }
        this.$fetch.dataApi.submit(params).then(({data}) => {
          this.$router.push("/babyManage");
        }).catch((data) => {
          Toast({
            message: data.msg,
          })
        })
      },
// 获取验证码 getPhoneCode
      getPhoneCode() {
        let data = this.dataObj
        let params = {
          queryFrom: 2,
          phone: data.parentPhone
        }
        this.$fetch.dataApi.getPhoneCode(params).then(({data}) => {

        }).catch((data) => {
          Toast({
            message: data.msg,
          })
        })
      },
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  .par {
    width: 100%;
    position: relative;

    .butYZM {
      width: 30%;
      position: absolute;
      right: 0;
      top: 0;

      .tip1 {
        width: 100%;
        font-size: 12px;
        height: 48px;
        border-radius: 0;
      }

      .tip2 {
        width: 100%;
        font-size: 12px;
        height: 48px;
        border-radius: 0;
      }

    }
  }

  .mint-cell-wrapper {

    .mint-cell-title {
      font-size: 14px;
      font-weight: bold;
      width: 80px;
    }

    .mint-radio-label {
      font-size: 14px;
      color: #5a5a5a;
    }

  }

  .page {
    background: #f5f5f5;
  }

  .fallback {
    padding: 20px 20px 0;
    background: #fff;
  }

  .page-part {
    margin-bottom: 15px;
    margin-top: 20%;
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

    background: #fff;
    position: relative;
    width: 100%;
    height: 200px;

    div {
      width: 90px;
      height: 90px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px dashed #ccc;
      border-radius: 5px;

      &
      ::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        transform: translateY(-50%);
        background: #ccc;
      }

      &
      ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 1px;
        background: #ccc;
      }

      input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

      }

    }
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

