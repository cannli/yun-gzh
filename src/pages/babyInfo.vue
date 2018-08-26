<template>
  <div class="page">

    <div class="contenter">
      <mt-navbar class="tabhead" :class="[isSwipe ? 'select':'']">
        <router-link to="/">
          <mt-button icon="back" style="border:none;background:none;box-shadow:none;"></mt-button>
        </router-link>
        <a class="mint-tab-item" @click="tab(false)">
          <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">成长刻度（4）</div>
        </a>
        <a class="mint-tab-item" @click="tab(true)">
          <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">成长轨迹</div>
        </a>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container class="tabbody" :class="[isSwipe ? 'move':'']">
        <mt-tab-container-item id="1">
          <div class="pic">
            <img src="../assets/images/timg.jpg" style="width:100%;max-height:375px" alt="">
          </div>

          <div class="box4">
            <div class="cell">
              <div class="cell-wrapper">
                <div class="cell-left">
                  <div class="name">王小丽</div>
                  <div class="birthday">2009/09/13</div>
                </div>
                <div class="cell-right">
                  <img src="../assets/images/xl.jpg" width="68" height="68">
                </div>
              </div>
            </div>

            <router-link class="item" v-for="n in 8" :key="n" to="/info" style="display:block;">

              <div class="item-left">
                <span>第4次评估</span>
                <span>排名
                                    <i>03</i>
                                </span>
              </div>
              <div class="item-center">
                <span style="width:80%;"></span>
              </div>
              <div class="item-right">
                评估时间：2018/04/18
              </div>
            </router-link>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <!-- 成长轨迹 -->
          <growth-trail></growth-trail>
        </mt-tab-container-item>
      </mt-tab-container>

    </div>

    <!-- <copy-right></copy-right>-->
  </div>
</template>

<script>
  // import Fallback from '~/components/fallback.vue'
  // import CopyRight from '~/components/copy-right.vue'
  import GrowthTrail from 'components/growth-trail.vue'

  export default {
    data() {
      return {
        selected: '1',
        isSwipe: false
      }
    },
    components: {
      // Fallback,
      // CopyRight,
      GrowthTrail
    },
    head() {
      return this.$seo('宝贝信息')
    },
    methods: {
      goback() {
        this.$router.go(-1)
      },
      info() {
        this.$router.push('/info')
      },
      tab(val) {
        console.log(val)
        if (val) {
          this.isSwipe = true
        } else {
          this.isSwipe = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-cell-wrapper,
  .mint-cell:last-child {
    background-image: none;
  }

  .page {
    background: #f5f5f5;
  }

  .box4 {
    margin-top: -108px;
    margin-left: 20px;
    margin-right: 20px;
    background: #fff;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    box-shadow: 0 0 10px 5px #ccc;
  }

  .cell {
    background: rgba(0, 158, 224, 1);
    border-radius: 4px 4px 0px 0px;
    padding: 20px 10px;
    margin-top: 0;
    .cell-wrapper {
      margin-top: 0;
      position: relative;
      img {
        border: 1px solid rgba(0, 158, 224, 1);
        border-radius: 50%;
      }
      .cell-left {
        color: #fff;
        line-height: 36px;
        .name {
          font-size: 20px;
        }
        .birthday {
          font-size: 12px;
          background: url(../../static/images/birth.png) no-repeat 0 center;
          padding-left: 20px;
        }
      }
      .cell-center {
        text-align: right;
        padding-right: 10px;
      }
      .cell-right {
        .mint-cell-allow-right {
          font-size: 14px;
          &::after {
            width: 14px;
            height: 14px;
            border-color: #fff;
            right: 5px;
          }
        }
      }
    }
  }

  /*列表*/

  .item {
    background: #fff;
    padding: 10px 15px;
    .item-left {
      display: flex;
      span {
        flex: 1;
        height: 50px;
        line-height: 50px;
        &:first-child {
          background: url(../../static/images/fk.png) no-repeat 0 center;
          padding-left: 20px;
        }
        &:last-child {
          text-align: right;
          color: #999999;
          i {
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            color: #000;
          }
        }
      }
    }
    .item-center {
      height: 6px;
      background: #d8d8dd;
      border-radius: 3px;
      line-height: 32px;
      position: relative;
      .mint-cell-wrapper {
        background-image: none;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        height: 6px;
        border-radius: 3px;
        background: #30e0a4;
      }
      div {
        font-size: 16px;
      }
      p {
        color: #808080;
      }
    }
    .item-right {
      text-align: left;
      padding-right: 20px;
      position: relative;
      line-height: 26px;
      margin: 10px auto;
      &::after {
        border: solid 2px #e0e0e0;
        border-bottom-width: 0;
        border-left-width: 0;
        content: ' ';
        top: 50%;
        right: 0px;
        position: absolute;
        width: 14px;
        height: 14px;
        -webkit-transform: translateY(-50%) rotate(45deg);
        transform: translateY(-50%) rotate(45deg);
      }
      div {
        color: #fd4d9c;
        font-size: 18px;
      }
      p {
        color: #aaaaaa;
      }
    }
  }

  /**/
  .page .contenter {
    width: 100%;
    overflow-x: hidden;
  }

  .tabhead {
    & > a {
      color: #26a2ff;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        background: #26a2ff;
        width: 25px;
        height: 3px;
        transform: translateX(-70%);
      }
      &:last-child {
        border: none;
        color: #000;
        margin-bottom: 0;
        &::after {
          background: none;
        }
      }
    }
  }

  .tabhead.select > a {
    border: none;
    color: #000;
    margin-bottom: 0;
    &::after {
      background: none;
    }
    &:last-child {
      color: #26a2ff;
      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        background: #26a2ff;
        width: 25px;
        height: 3px;
        transform: translateX(-70%);
      }
    }
  }

  .tabbody {
    overflow: initial;
    transform: translateX(0);
    transition-duration: 0.5s;
  }

  .tabbody .mint-tab-container-item {
    display: block !important;
    &:last-child {
      //height: 10px;
      overflow-y: hidden;
    }
  }

  .tabbody.move {
    transform: translateX(-100%);
    transition-duration: 0.5s;
  }

  .tabbody.move .mint-tab-container-item {
    &:last-child {
      height: auto;
    }
  }
</style>

