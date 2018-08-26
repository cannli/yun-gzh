<template>
  <div class="growth-trail">
    <div class="pic">
      <img src="../assets/images/timg.jpg" style="width:100%;max-height:375px" alt="">
    </div>

    <div class="box3">
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
      <div class="fix">
        <div>
          <h3>女</h3>
          <p>性别</p>
        </div>
        <div>
          <h3>8</h3>
          <p>年龄</p>
        </div>
        <div>
          <h3>0407</h3>
          <p>编号</p>
        </div>
      </div>
    </div>

    <div class="nav nav1" id="nav-container1">
      <ul id="nav-box1">
        <li v-for="(item,i) in navList" :class="{cur:(i===0)}" :key="i">{{item.name}}</li>
      </ul>
    </div>
    <div id="text1">
      <div class="part">
        <mt-cell title="身高（cm）"></mt-cell>
        <a class="mint-cell">
          <!---->
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--成长曲线图（cm）-->
              <div class="chart">
                <ve-histogram :data="heightData" :settings="heightSettings"></ve-histogram>
              </div>
              <!---->
            </div>
            <div class="mint-cell-value">
              <span></span>
            </div>
            <!---->
          </div>
          <div class="mint-cell-right"></div>
        </a>
      </div>

      <div class="part">
        <mt-cell title="体重（kg）"></mt-cell>
        <a class="mint-cell">
          <!---->
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--体重曲线图（kg）-->
              <div class="chart">
                <ve-line :data="weightData" :extend="extend"></ve-line>
              </div>
              <!---->
            </div>
            <div class="mint-cell-value">
              <span></span>
            </div>
            <!---->
          </div>
          <div class="mint-cell-right"></div>
        </a>
      </div>

      <div class="part">
        <mt-cell title="体态判定"></mt-cell>
        <a class="mint-cell">
          <!---->
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--体态判定-->
              <div class="titai">
                <tab :line-width=2 active-color='#37a1da' v-model="index">
                  <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in titai"
                            @click="demo2 = item" :key="index">{{item.key}}
                  </tab-item>
                </tab>

                <!--   <mt-navbar v-model="index" class="titai">
                     <mt-tab-item  class="vux-center" v-for="(item, index) in titai">{{item.key}} :key="index"</mt-tab-item>
                   </mt-navbar>
                   <mt-tab-container v-model="index">

                     <mt-tab-container-item :id="index"  v-for="(item, index) in titai" :key="index">
                       <div class="tab-swiper vux-center">
                         <div style="text-align:center;position:relative;" class="ttjcfx">
                           <img :src="item.val" alt="" style="width:100%;height:500px;">
                           <span>轻度头侧歪</span>
                           <span>轻度头前倾</span>
                           <span>中度驼背</span>
                           <span>骨盘后倾</span>
                           <span>无高低肩</span>
                           <span>躯干轻度偏移</span>
                           <span>腿型正常</span>
                         </div>
                       </div>
                     </mt-tab-container-item>

                   </mt-tab-container>-->
                <swiper v-model="index" height="486px" :show-dots="false">
                  <swiper-item v-for="(item, index) in titai" :key="index">
                    <div class="tab-swiper vux-center">
                      <div style="text-align:center;position:relative;" class="ttjcfx">
                        <img :src="item.val" alt="" style="width:100%;height:500px;">
                        <span>轻度头侧歪</span>
                        <span>轻度头前倾</span>
                        <span>中度驼背</span>
                        <span>骨盘后倾</span>
                        <span>无高低肩</span>
                        <span>躯干轻度偏移</span>
                        <span>腿型正常</span>
                      </div>
                    </div>
                  </swiper-item>
                </swiper>
                <!-- <div class="nav" id="nav-container">
                  <ul id="nav-box">
                    <li v-for="(item,i) in titai" :class="{cur:(i===0)}" :key="i">{{item.key}}</li>
                  </ul>
                </div>


                <div class="wrap">
                  <ul class="box" id="text">
                    <li v-for="(item,i) in titai" :key="i">
                      <div class="box1 box2"> <img :src="item.val" alt=""></div>
                    </li>

                  </ul>
                </div> -->

              </div>
              <!---->
            </div>
            <div class="mint-cell-value">
              <span></span>
            </div>
            <!---->
          </div>
        </a>
      </div>
      <div class="part">
        <mt-cell title="风险预测"></mt-cell>
        <a class="mint-cell">
          <!---->
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--风险预测-->
              <div class="chart">
                <ve-bar :data="riskData" :settings="riskSettings" height="800px"></ve-bar>
              </div>
              <!---->
            </div>
            <div class="mint-cell-value">
              <span></span>
            </div>
            <!---->
          </div>
          <div class="mint-cell-right"></div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
  import VeHistogram from 'v-charts/lib/histogram'
  import VeBar from 'v-charts/lib/bar'
  import VeLine from 'v-charts/lib/line'

  export default {
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      VeHistogram,
      VeBar,
      VeLine
    },
    created: function () {
      this.heightData = {
        columns: ['次数', '身高'],
        rows: [
          {身高: 115, 次数: '第一次'},
          {身高: 125, 次数: '第二次'},
          {身高: 132, 次数: '第三次'},
          {身高: 147, 次数: '第四次'},
          {身高: 157, 次数: '第五次'}
        ]
      }
      this.heightSettings = {
        dimension: ['次数']
      }

      this.riskData = {
        columns: ['状况', '第一次', '第二次', '第三次'],
        rows: [
          {状况: '腰痛', 第一次: 20, 第二次: 20, 第三次: 30},
          {状况: '头晕', 第一次: 10, 第二次: 10, 第三次: 20},
          {状况: '头痛', 第一次: 10, 第二次: 20, 第三次: 30},
          {状况: '手脚麻', 第一次: 10, 第二次: 20, 第三次: 30},
          {状况: '颈椎硬化', 第一次: 10, 第二次: 20, 第三次: 30},
          {状况: '颈肩痛', 第一次: 10, 第二次: 20, 第三次: 30},
          {状况: '骨刺', 第一次: 10, 第二次: 20, 第三次: 30},
          {状况: '便秘', 第一次: 20, 第二次: 40, 第三次: 20},
          {状况: '背痛', 第一次: 10, 第二次: 20, 第三次: 30},
          {状况: '耳鸣', 第一次: 10, 第二次: 20, 第三次: 10},
          {状况: '脊柱变形', 第一次: 10, 第二次: 10, 第三次: 30},
          {状况: '慢性劳损', 第一次: 10, 第二次: 20, 第三次: 20},
          {状况: '腰椎间盘突出', 第一次: 10, 第二次: 20, 第三次: 30},
          {状况: '身体疲惫', 第一次: 40, 第二次: 40, 第三次: 30},
          {状况: '膝关节痛', 第一次: 10, 第二次: 10, 第三次: 23},
          {状况: '眼睛干涩', 第一次: 20, 第二次: 20, 第三次: 30},
          {状况: '失眠', 第一次: 10, 第二次: 30, 第三次: 30},
          {状况: '胸闷气短', 第一次: 10, 第二次: 20, 第三次: 30}
        ]
      }
      this.riskSettings = {
        metrics: ['第一次', '第二次', '第三次']
      }
    },
    data() {
      return {
        list2: ['第一次', '第二次', '第三次', '第四次', '第五次'],
        index: 0,
        demo2: '第一次',
        // 导航配置
        navList: [
          {
            id: 1,
            name: '身高'
          },
          {
            id: 2,
            name: '体重'
          },
          {
            id: 3,
            name: '体态'
          },
          {
            id: 4,
            name: '风险预测'
          }
        ],
        weightData: {
          columns: ['次数', '体重'],
          rows: [
            {体重: 22, 次数: '第一次'},
            {体重: 28, 次数: '第二次'},
            {体重: 24, 次数: '第三次'},
            {体重: 20, 次数: '第四次'},
            {体重: 16, 次数: '第五次'}
          ]
        },
        titai: [
          {
            key: '第一次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第二次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第三次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第四次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第五次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第六次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第七次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第八次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第九次',
            val: require('../../static/images/tt.png')
          },
          {
            key: '第十次',
            val: require('../../static/images/tt.png')
          }
        ],
        extend: {
          series: {
            label: {
              normal: {
                show: true
              }
            }
          }
        }
      }
    },

    mounted() {
      var w = document.body.offsetWidth
      /**
       * 顶部的导航
       */
      var navContainer1 = document.getElementById('nav-container1')
      var navBox1 = document.getElementById('nav-box1')
      var text1 = document.getElementById('text1')
      var navBoxChild1 = navBox1.children
      var textChild1 = text1.children
      var num1 = navContainer1.offsetTop
      var a1 = navContainer1.offsetHeight
      navBox1.style.width = '100%'
      var t = navContainer1.offsetTop

      window.onscroll = function () {
        let scrollTop1 = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

        if (scrollTop1 - 50 >= t) {
          navContainer1.className = 'nav nav1 fixed'
          navContainer1.style.position = 'absolute'
          navContainer1.style.width = '100%'
          navContainer1.style.height = '50px'
          navContainer1.style.left = '100%'
          navContainer1.style.top = scrollTop1 - 50 + 'px'
          navContainer1.style.zIndex = '9999'
        } else {
          navContainer1.className = 'nav nav1'
          text1.style.paddingTop = ''
          navContainer1.style.position = 'relative'
          navContainer1.style.top = '0'
          navContainer1.style.left = '0'
        }
        //当导航与相应文档接触的时候自动切换
        for (var i = 0; i < navBoxChild1.length; i++) {
          if (scrollTop1 + 50 >= textChild1[i].offsetTop) {
            //    console.log('3',scrollTop1,textChild1[i].offsetTop)
            for (var j = 0; j < navBoxChild1.length; j++) {
              navBoxChild1[j].className = ''
            }
            navBoxChild1[i].className = 'cur'

            if (i > 3 && i < navBoxChild1.length - 2) {
              navBox1.style.transform = 'translateX(-' + (i - 2) * 72 + 'px)'
              navBox1.style.transition = 'all .7s'
            } else if (
              i < navBoxChild1.length - 3 &&
              navBox1.style.transform != ''
            ) {
              navBox1.style.transform = 'translateX(0px)'
              navBox1.style.transition = 'all .7s'
            }
          }
        }
      }
      for (let i = 0; i < navBoxChild1.length; i++) {
        let interval2
        navBoxChild1[i].index = i
        navBoxChild1[i].onclick = function () {
          let scrollTop2 = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

          let self = this
          //  console.log(11111,textChild1[self.index].offsetTop,scrollTop2)
          window.scrollTo(0, textChild1[self.index].offsetTop)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-cell-wrapper {
    background-image: none;
  }

  .chart {
    padding-top: 20px;
  }

  .part {
    margin-bottom: 20px;
    background: #fff;
    .mint-cell {
      .mint-cell-wrapper {
        background-image: none !important;
      }
    }
  }

  // 滚动
  .titai {
    width: calc(100% + 20px);
    overflow: hidden;
    position: relative;
    margin: 0 -10px;
  }

  .nav {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: #fff;
    position: relative;
    box-shadow: 0 0 20px 2px #ccc;
    overflow: hidden;

    &.fixed {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9999;
      transform: translate3d(0, 0, 0);
    }
    ul {
      position: absolute;
      left: 0;
      top: 0;
      height: 50px;

      li {
        float: left;
        text-align: center;
        cursor: pointer;
        color: #ccc;
        position: relative;
        padding: 0 15px;
        &::after {
          content: '';
          position: absolute;
          bottom: -1px;
          transform: translateX(-50%);
          left: 50%;
          width: 25px;
          height: 3px;
          background: #fff;
        }
        &.cur {
          color: #37a1da;
          &::after {
            background: #009ee0;
          }
        }
      }
    }
  }

  #text {
    position: absolute;
    left: 0;
    top: 0px;
    margin-top: 0px;
    padding: 20px 0;
    transform: translateX(0);
    transition: all 0.7s;
    div {
      padding: 20px;
      text-align: center;
      float: left;
      width: 100%;
      img {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
      }
    }
  }

  .cntent-box {
    margin-top: 20px;
  }

  .wrap {
    position: relative;
    overflow: hidden;
    height: 400px;
  }

  .box {
    position: absolute;
    list-style: none;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
  }

  .box li {
    float: left;
  }

  .box {
    position: relative;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .box3 {
    margin-top: -108px;
    margin-left: 20px;
    margin-right: 20px;
    background: #fff;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    box-shadow: 0 0 10px 5px #ccc;
    margin-bottom: 20px;
    .fix {
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      div {
        flex: 1;
        padding: 15px 0;
        h3 {
          font-weight: bold;
          padding: 5px 0;
        }
        p {
          color: #666;
          padding: 5px 0;
        }
      }
    }
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

  .mint-cell:last-child {
    background-image: none;
  }

  .nav1 {
    li {
      float: none;
      width: 25%;
      text-align: center;
    }
  }

  .ttjcfx {
    span {
      color: #fff;
      border-radius: 3px;
      padding: 5px 5px;
      font-size: 16px;
      position: absolute;
      left: 50%;
      &:nth-child(2) {
        background: #f36cbe;
        top: 15px;

        margin-left: -150px;
      }
      &:nth-child(3) {
        background: #37a1da;
        top: 57px;
        margin-left: 40px;
      }
      &:nth-child(4) {
        background: #a78ae7;
        top: 117px;
        margin-left: -166px;
      }
      &:nth-child(5) {
        background: #fec70a;
        top: 207px;
        margin-left: -169px;
      }
      &:nth-child(6) {
        background: #02789a;
        top: 132px;
        margin-left: 83px;
      }
      &:nth-child(7) {
        background: #48c0e3;
        top: 186px;
        margin-left: 60px;
      }
      &:nth-child(8) {
        background: #ff9a8e;
        bottom: 25px;
        margin-left: 40px;
      }
    }
  }
</style>
