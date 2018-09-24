<template>
  <div class="page">
    <div class="pic">
      <fallback slot="arrow" style="position:absolute;top:15px;left:15px;"></fallback>
      <img src="../assets/images/bj2.jpg" style="width:100%;max-height:375px" alt="">
    </div>

    <div class="box3">
      <div class="cell">
        <div class="cell-wrapper">
          <div class="cell-left">
            <div class="name">{{detail.name}}</div>
            <div class="birthday">{{detail.cTime}}</div>
          </div>
          <div class="cell-right"><!--../assets/images/xl.jpg-->
            <img :src="detail.headImg" width="68" height="68">
          </div>
        </div>
      </div>
      <div class="fix">
        <div>
          <h3>{{detail.examNum}}</h3>
          <p>检测人数</p>
        </div>
        <div>
          <h3>{{detail.ranking}}</h3>
          <p>排名</p>
        </div>
      </div>
    </div>

    <div class="nav" id="nav-container">
      <ul id="nav-box">
        <li v-for="(item,i) in navList" :class="{cur:(i===0)}" :key="i">{{item.name}}</li>
      </ul>
    </div>

    <div class="cntent-box" id="text">
      <!-- <div class="page-part">
  <div class="info-header">
    <div class="middle">
      <img src="../assets/images/100x100.png" width="68" height="68">
      <h2>王小丽</h2>
      <div>性别：女 | 年龄：7 | 编号：0407</div>
      <p>阳光小学 / 四年级二班</p>
    </div>
  </div>

  <div class="cell-df">
    <div>
      <h3>综合得分76</h3>
      <p>击败了50.28%</p>
    </div>
    <div>
      <progress-circle :radius="radius" :percent="percent"></progress-circle>
    </div>
  </div>

  <div class="cell-df">
    <div>
      <h3>检测排名 3109</h3>
      <p>总人数 6310</p>
    </div>
    <div>
      <progress-circle :radius="radius" :percent="percent2" :stroke="purple" class="fail"></progress-circle>
    </div>
  </div>

</div> -->

      <!-- 基本数据分析 -->
      <div class="page-part">
        <mt-cell title="基本数据分析"></mt-cell>
        <a class="mint-cell">
          <!---->
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--综合得分-->
              <div class="data-analysis">
                <span class="title">身高</span>
                <div class="value">
                  <span>{{detail.height}}</span>厘米
                </div>
                <!--  <div class="height">
                    <div class="blue">偏低</div>
                    <div class="green">标准</div>
                    <div class="yellow">偏高</div>
                    <i style="left:41%"></i>
                  </div>-->
              </div>
              <div class="item-center">
                <span class="span1" :style="{width:  ((detail.height+50)/widthS)*100+'%'}"></span>
              </div>
              <!---->
            </div>
            <!---->
          </div>
        </a>
        <a class="mint-cell">
          <!---->
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--综合得分-->
              <div class="data-analysis">
                <span class="title">体重</span>
                <div class="value">
                  <span>{{detail.weight}}</span>公斤
                </div>
                <!--<div class="height">
                  <div class="purple">严重偏低</div>
                  <div class="blue">偏低</div>
                  <div class="green">标准</div>
                  <div class="yellow">偏高</div>
                  <div class="red">严重偏高</div>
                  <i :style="{left: detail.weight/widthS}"></i>
                </div>-->
              </div>
              <div class="item-center">
                <span class="span2" :style="{width:  ((detail.weight+100)/widthS)*100+'%'}"></span>
              </div>
              <!---->
            </div>
            <!---->
          </div>
        </a>
        <a class="mint-cell">
          <!---->
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--综合得分-->
              <div class="data-analysis">
                <span class="title">BMI</span>
                <div class="value">
                  <span>{{detail.bmi}}</span>
                </div>
              </div>
              <div class="item-center">
                <span :style="{width:  ((detail.bmi+150)/widthS)*100+'%'}"></span>
              </div>
              <!---->
            </div>
            <!---->
          </div>
        </a>
      </div>

      <!-- 体态检测分析 -->
      <div class="page-part">
        <mt-cell title="体态检测分析"></mt-cell>

        <a class="mint-cell">
          <!---->
          <div style="text-align:center;position:relative;" class="ttjcfx">
            <img src="../../static/images/tt.png" alt="" style="width:100%;height:500px;">
            <span>头侧歪:{{shape.headCoronalMain}}</span>
            <span>头前倾:{{shape.headForeMain}}</span>
            <span>驼背:{{shape.humpBackMain}}</span>
            <span>骨盆:{{shape.pelvisPitchMain}}</span>
            <span>肩:{{shape.shoulderCoronalMain}}</span>
            <span>躯干:{{shape.bodyCenterMain}}</span>
            <span>腿型:{{shape.legXoMain}}</span>
          </div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--综合得分-->
              <div class="test">
                <div class="title">身体姿态评估</div>
                <div class="cont flex" id="flex1" style="margin-top: 20px;">
                  <div v-for="(item,n) in pgData" :key="n" @click="chooseThis(item)">
                    <img :src="item.val" alt=""></div>
                </div>
                <div class="cont" v-for="(x , index) in mainContent">
                  <div class="black-bold">{{x.name}}</div>
                  <p>{{x.mContent}}</p>
                </div>

                <div class="title">3D骨骼及肌筋膜状况</div>
                <div class="cont flex" id="flex2" style="margin-top: 20px;">
                  <div v-for="(item,n) in pgData1" :key="n" @click="chooseThis2(item)">
                    <img :src="item.val" alt=""></div>
                </div>
                <div class="cont hui" v-for="x in pgData2">
                  <h4 style="font-weight: bold;color: #333333;">{{x.name}}</h4>
                  <p style="font-size: 14px;">{{x.mContent}}</p>
                </div>

              </div>
              <!---->
            </div>
            <!---->
          </div>
        </a>
      </div>
      <!-- 风险预测 -->
      <div class="page-part">
        <mt-cell title="风险预测"></mt-cell>
        <a class="mint-cell">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <!--风险预测-->
              <div class="test">
                <div class="cont">
                  <ve-bar :data="postureData" :settings="postureSettings" :height="'500px'"></ve-bar>
                </div>
              </div>
            </div>
          </div>
        </a>

      </div>
      <!-- 足弓发育分析 -->
      <!-- <div class="page-part">
         <mt-cell title="足弓发育分析"></mt-cell>
         <a class="mint-cell">
           &lt;!&ndash;&ndash;&gt;
           <div class="mint-cell-left"></div>
           <div class="mint-cell-wrapper">
             <div class="mint-cell-title">
               &lt;!&ndash;足弓发育分析&ndash;&gt;
               <div class="test">

                 &lt;!&ndash;<div class="wrap" id="img3">
                   <img src="../../static/images/1.jpg" alt="">
                   <p>{{}}</p>
                 </div>&ndash;&gt;
                 <div class="cont flex" id="flex3">
                   <div v-for="(item,n) in pgData3" :key="n">
                     <img :src="item.val" alt=""></div>
                 </div>
                 <div class="cont">
                   <div class="black-bold">结果分析：扁平足</div>
                   <p>定义：足弓是人类脚的重要结构，通常表现为头部相应肩膀往前移动，经常出现于面对电脑工作者，坐姿不正确久坐者，经常使用手机者，不良体态的人群中。</p>
                   <p>危害：一骨盆长时间前倾，不但影响美观，严重会加重下背部及颈部的负担，造成疼痛和肩颈酸痛等问题。</p>

                 </div>

               </div>
               &lt;!&ndash;&ndash;&gt;
             </div>
             &lt;!&ndash;&ndash;&gt;
           </div>
         </a>
       </div>-->
      <!--  &lt;!&ndash; 动能分析 &ndash;&gt;
        <div class="page-part">
          <a class="mint-cell">
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                &lt;!&ndash;运动能力分析&ndash;&gt;
                <div class="test">
                  <div class="title">动能分析</div>
                  <div class="cont">
                    <div class="data-analysis">

                      <div class="height">
                        <div class="red">超弱</div>
                        <div class="purple">偏弱</div>
                        <div class="blue">正常</div>
                        <div class="green">偏强</div>
                        <div class="yellow">极高</div>
                        <i style="left:50%"></i>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        &lt;!&ndash; 心率分析 &ndash;&gt;
        <div class="page-part">
          <mt-cell title="心率分析（bpm）"></mt-cell>
          <a class="mint-cell">
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                &lt;!&ndash;运动能力分析&ndash;&gt;
                <div class="test">
                  <div class="cont">
                    <ve-line :data="heartData" :settings="heartSettings"></ve-line>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        &lt;!&ndash; 结果分析 &ndash;&gt;
        <div class="page-part">
          <mt-cell title="结果分析"></mt-cell>
          <a class="mint-cell">
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                &lt;!&ndash;报告总结&ndash;&gt;
                <div class="test">
                  <div class="cont">
                    <p>定义：头前倾也叫头部前引，通常表现为头部相应肩膀往前移动，经常出现于面对电脑工作者，坐姿不正确久坐者，经常使用手机者，不良体态的人群中。</p>
                    <p>危害：一骨盆长时间前倾，不但影响美观，严重会加重下背部及颈部的负担，造成疼痛和肩颈酸痛等问题。</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>-->
    </div>
    <div class="article_list">
      <h1>推荐文章</h1>
      <a class="list_item js_post" v-for="(x,index) in rticleList" :key="index"
         :href="x.articleUrl">
        <div class="cover">
          <img class="img js_img"
               :src="x.imgurl"
               alt="">
        </div>
        <div class="cont">
          <h2 class="title js_title">{{x.title}}</h2>
          <p class="desc">{{x.articleBrief}}</p>
        </div>
      </a>
    </div>
    <copy-right></copy-right>
    <imgCarousel :isLoading="isLoading" :imgUrl="imgUrl" @showFn="showFn"></imgCarousel>
  </div>
</template>

<script>
  import ProgressCircle from 'components/progress-circle.vue'
  import imgCarousel from 'components/imgCarousel.vue'
  import VeLine from 'v-charts/lib/line'
  import VeRadar from 'v-charts/lib/radar'
  import VeBar from 'v-charts/lib/bar'
  import VeHistogram from 'v-charts/lib/histogram'
  import CopyRight from 'components/copy-right.vue'
  import fallback from 'components/fallback.vue'
  import zug1 from '../assets/images/zug1.png'
  import zug2 from '../assets/images/zug2.png'

  export default {
    head() {
      return this.$seo('报告详情')
    },
    data() {
      return {
        isLoading: false,
        imgUrl: '',
        /*state*/
        detail: {
          name: '',
          cTime: '',
          ranking: '',
          height: '',
          weight: '',
          bmi: '',
          examNum: '',
          headImg: ''
        },
        shape: {
          bodyCenterMain: "偏移",
          headCoronalMain: "后凸",
          headForeMain: "前倾",
          humpBackMain: "驼背",
          legXoMain: "O型腿",
          pelvisPitchMain: "偏移",
          shoulderCoronalMain: "高低肩",
        },
        mainContent: [],

        /*end*/
        // 导航配置
        navList: [
          {id: 1, name: '综合'},
          {id: 2, name: '体态'},
          {id: 3, name: '风险预测'},
          {id: 4, name: '为您推荐'},
          /* {id: 5, name: '动能'},
           {id: 6, name: '心率'},
           {id: 7, name: '结果'}*/
        ],
        // 综合得分 检测排名
        radius: '100px',
        percent: 0.76,
        radius2: '70px',
        percent2: 0.5028,
        percent3: 40,
        yellow: '#fedb5b',
        purple: '#f36cbe',
        // 心率
        /* heartSettings: {
           metrics: ['心率'],
           dimension: ['标准']
         },*/
        /*  heartData: {
            columns: ['标准', '心率'],
            rows: [
              {标准: '心率下限', 心率: 134},
              {标准: '平均心率', 心率: 140},
              {标准: '最大心率       ', 心率: 150}
            ]
          },*/
        // 风险预测
        postureData: {
          columns: ['体态', '第一次'],
          rows: []
        },
        postureSettings: {
          yAxisType: '第一次',
          label: {
            normal: {show: true, position: 'right'}
          }
        },
        widthS: 360,
        //身体姿态评估
        pgData: [
          {
            key: '正面',
            val: '../../static/images/1.jpg'
          },
          {
            key: '反面',
            val: 'http://localhost:3333/static/images/2.jpg'
          },
          {
            key: '左侧面',
            val: 'http://localhost:3333/static/images/3.jpg'
          },
          {
            key: '右侧面',
            val: 'http://localhost:3333/static/images/4.jpg'
          }
        ],
        pgData1: [
          {
            key: '正面',
            val: '../../static/images/1.jpg'
          },
          {
            key: '反面',
            val: 'http://localhost:3333/static/images/2.jpg'
          }
        ],
        pgData2: [],
        pgData3: [
          {
            key: '正面',
            val: zug1
          },
          {
            key: '反面',
            val: zug2
          }
        ],
        // 获取url参数
        custCode: '',
        babyId: '',
        // 文章推荐
        rticleList: []
      }
    },
    components: {
      imgCarousel,
      ProgressCircle,
      VeLine,
      VeRadar,
      VeBar,
      VeHistogram,
      CopyRight,
      fallback
    },
    created() {
      this.widthS = document.body.scrollWidth
      this.custCode = this.$route.query.custCode
      this.babyId = this.$route.query.id
    },
    mounted() {

      var navContainer = document.getElementById('nav-container')
      var navBox = document.getElementById('nav-box')
      var text = document.getElementById('text')
      var navBoxChild = navBox.children
      var textChild = text.children
      var num = navContainer.offsetTop
      var a = navContainer.offsetHeight
      navBox.style.width = '100%'
      window.onscroll = function () {
        let scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop
        if (scrollTop >= num) {
          navContainer.className = 'nav fixed'
          text.style.paddingTop = a + 'px'
        } else {
          navContainer.className = 'nav'
          text.style.paddingTop = ''
        }
        //当导航与相应文档接触的时候自动切换
        for (let i = 0; i < navBoxChild.length - 1; i++) {
          if (
            scrollTop + 100 >= textChild[i].offsetTop &&
            window.innerHeight + scrollTop != document.body.scrollHeight
          ) {
            for (let j = 0; j < navBoxChild.length; j++) {
              navBoxChild[j].className = ''
            }
            navBoxChild[i].className = 'cur'

            if (i > 3 && i < navBoxChild.length - 2) {
              navBox.style.transform = 'translateX(-' + (i - 2) * 72 + 'px)'
              navBox.style.transition = 'all .7s'
            } else if (
              i < navBoxChild.length - 3 &&
              navBox.style.transform != ''
            ) {
              navBox.style.transform = 'translateX(0px)'
              navBox.style.transition = 'all .7s'
            }
          }
        }
      }
      for (let i = 0; i < navBoxChild.length; i++) {
        var interval
        navBoxChild[i].index = i
        navBoxChild[i].onclick = function () {
          let scrollTop2 =
            document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop

          let self = this

          if (self.index == navBoxChild.length - 1) {
            for (let k = 0; k < navBoxChild.length; k++) {
              navBoxChild[k].className = ''
            }
            navBoxChild[self.index].className = 'cur'
          }

          window.scrollTo(0, textChild[self.index].offsetTop - 50)

          if (self.index > 3 && self.index < navBoxChild.length - 2) {
            navBox.style.transform =
              'translateX(-' + (self.index - 2) * 72 + 'px)'
            navBox.style.transition = 'all .7s'
          } else if (
            self.index < navBoxChild.length - 3 &&
            navBox.style.transform != ''
          ) {
            navBox.style.transform = 'translateX(0px)'
            navBox.style.transition = 'all .7s'
          }

          // clearInterval(interval)
          // interval = setInterval(function() {
          //   if (document.body.scrollTop + a <= textChild[self.index].offsetTop) {
          //     document.body.scrollTop += 40
          //     if (
          //       document.body.scrollTop + a >=
          //       textChild[self.index].offsetTop
          //     ) {
          //       document.body.scrollTop = textChild[self.index].offsetTop - a
          //       clearInterval(interval)
          //     }
          //   } else {
          //     document.body.scrollTop /= 1.1
          //     if (
          //       document.body.scrollTop + a <=
          //       textChild[self.index].offsetTop
          //     ) {
          //       document.body.scrollTop = textChild[self.index].offsetTop - a
          //       clearInterval(interval)
          //     }
          //   }
          // }, 40)
        }
      }

      //轮播图
      this.$nextTick(() => {
        this.examdetail()
        this._recommendArticleList()
      })
    },
    methods: {
      showFn() {
        this.isLoading = false
      },
      // 根据小孩ID获取小孩体检里面的详情
      examdetail() {
        let self = this
        let params = {
          id: self.babyId,
          custCode: self.custCode
        }
        self.$fetch.dataApi.examdetail(params).then(({data, msg, total}) => {
          self.detail = {
            name: data.student.username,
            cTime: data.studentExamRecord.createTime,
            ranking: data.studentExamRecord.ranking,
            height: data.height.height,
            weight: data.weight.weight,
            bmi: data.bmi.bmiNum,
            examNum: data.studentExam.examNum,
            headImg: data.student.headImg ? data.student.headImg : '../assets/images/xl.jpg'
          }
          self.shape = {
            bodyCenterMain: data.studentExamRecord.bodyCenterMain,
            headCoronalMain: data.studentExamRecord.headCoronalMain,
            headForeMain: data.studentExamRecord.headForeMain,
            humpBackMain: data.studentExamRecord.humpBackMain,
            legXoMain: data.studentExamRecord.legXoMain,
            pelvisPitchMain: data.studentExamRecord.pelvisPitchMain,
            shoulderCoronalMain: data.studentExamRecord.shoulderCoronalMain,
          }
          // self.mainContent = JSON.parse(data.studentExamRecord.mainContent)
          self.mainContent = [
            {name: data.studentExamRecord.headCoronal, mContent: data.studentExamRecord.headCoronalDes},
            {name: data.studentExamRecord.humpBack, mContent: data.studentExamRecord.humpBackDes},
            {name: data.studentExamRecord.pelvisPitch, mContent: data.studentExamRecord.pelvisPitchDes},
            {name: data.studentExamRecord.legXo, mContent: data.studentExamRecord.legXoDes},
          ]
          self.pgData = [
            {key: '正面', val: data.studentExamRecord.frontImageUrl},
            {key: '反面', val: data.studentExamRecord.behindImageUrl},
            {key: '左侧面', val: data.studentExamRecord.leftImageUrl},
            {key: '右侧面', val: data.studentExamRecord.rightImageUrl}
          ]


          self.pgData1 = [
            {key: '正面', val: data.studentExamRecord.frontPerImageUrl},
            {key: '反面', val: data.studentExamRecord.behindPerImageUrl}
          ]
          self.pgData2 = JSON.parse(data.studentExamRecord.mainContent)
          /* [
          {
            title: '头颈部：',
            val: data.studentExamRecord.humpBack,
            text: data.studentExamRecord.humpBackDes.split('：')[1]
          },
          {
            title: '肩部：',
            val: data.studentExamRecord.headCoronal,
            text: data.studentExamRecord.headCoronalDes.split('：')[1]
          },
          {title: '躯干：', val: '', text: '暂无数据'},
          {title: '腰部：', val: '', text: data.studentExamRecord.pelvisPitchDes},
          {title: '腿部：', val: '', text: data.studentExamRecord.legXoDes},
          {title: '肌肉状态：', val: '', text: data.studentExamRecord.muscleDes},
        ]*/
          // 获取风险数据
          self.postureData = {
            columns: ['体态', '第一次'],
            rows: [
              {体态: '颈椎退化', 第一次: data.studentExamRecord.lumbago},
              {体态: '骨刺', 第一次: data.studentExamRecord.dizzy},
              {体态: '头痛', 第一次: data.studentExamRecord.headache},
              {体态: '头晕', 第一次: data.studentExamRecord.hemp},
              {体态: '手脚麻', 第一次: data.studentExamRecord.cervicalDege},
              {体态: '便秘', 第一次: data.studentExamRecord.nsPain},
              {体态: '颈肩痛', 第一次: data.studentExamRecord.spur},

              {体态: '背痛', 第一次: data.studentExamRecord.constipation},
              {体态: '腰痛', 第一次: data.studentExamRecord.backache},
              {体态: '腰椎间盘突出', 第一次: data.studentExamRecord.ringEar},
              {体态: '膝关节痛', 第一次: data.studentExamRecord.deforeSpine},
              {体态: '胸闷气短', 第一次: data.studentExamRecord.chronicStrain},
              {体态: '失眠', 第一次: data.studentExamRecord.lumbaDisk},


              {体态: '脊柱变形', 第一次: data.studentExamRecord.physicalFatigue},
              {体态: '慢性劳损', 第一次: data.studentExamRecord.kjPain},
              {体态: '眼睛干涩', 第一次: data.studentExamRecord.dryEye},
              {体态: '身体疲倦', 第一次: data.studentExamRecord.insomnia},
              {体态: '耳鸣', 第一次: data.studentExamRecord.shortBreath},
            ]
          }
          console.log(self.pgData, '88888888888')
        }).catch(() => {
          self.$indicator.close()
        })
      },
      handleScroll(el) {
        this.scrollTop = this.$refs.content.scrollTop //打印出来就是滚动条距离页面的距离
      },
      chooseThis(item) {
        /* let wImg = document.querySelectorAll('#img1 img')
         let wP = document.querySelectorAll('#img1 p')
         let imgBox = document.querySelectorAll('#flex1 div')
         wImg[0].setAttribute('src', item.val)
         wP[0].text = item.key
         for (let i = 0; i < imgBox.length; i++) {
           imgBox[i].classList.remove('cur')
         }
         event.currentTarget.classList.add('cur')*/
        this.isLoading = true
        this.imgUrl = item.val
      },
      chooseThis2(item) {
        this.isLoading = true
        this.imgUrl = item.val
      },
      // 根据小孩ID获取小孩体检里面的详情
      _recommendArticleList() {
        let self = this
        let params = {
          id: self.babyId,
          custCode: self.custCode
        }
        self.$fetch.dataApi.recommendArticleList(params).then(({data, msg, total}) => {
          self.rticleList = data
        })
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  .article_list {
    background-color: #fff;
    h1 {
      font-size: 18px;
      font-weight: bold;
      padding: 10px;
      border-bottom: #cccccc 1px solid;
    }
    .list_item {
      display: block;
      padding: 15px 15px 10px 10px;
      overflow: hidden;
      position: relative;
      text-decoration: none;
      -webkit-tap-highlight-color: transpar;
      .cover {
        float: left;
        margin-right: 10px;
        .img {
          display: block;
          width: 80px;
          height: 60px;
        }
      }
      .cont {
        overflow: hidden;
        .title {
          font-weight: 400;
          font-size: 16px;
          color: #000;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
        .desc {
          font-size: 13px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          line-height: 1.3;
        }
      }
    }
    .list_item:after {
      content: " ";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #e2e2e2;
      -webkit-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(.5);
      -ms-transform: scaleY(.5);
      transform: scaleY(.5);
      left: 10px;
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
    .span1 {
      background: #26a2ff;
    }
    .span2 {
      background: #f44336;
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

  .page {
    background: #fafafa;
  }

  .page-part {
    /* margin-bottom: 20px;*/
    border-radius: 10px;
    margin: 10px;
    background: #cccccc;
    .cell-df {
      margin-top: 15px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 10px;
      div {
        flex: 1;
        &:last-child {
          text-align: right;
        }
        p {
          color: #ccc;
          padding-top: 10px;
        }
      }
    }
    .mint-cell-title {
      font-weight: bold;
    }
    .mint-cell-wrapper,
    .mint-cell:last-child {
      background-image: none;
    }
  }

  .info-header {
    display: flex;
    .middle {
      flex: 1;
      text-align: center;
      align-items: center;
      padding: 20px 0;
      line-height: 38px;
      background: #fff;
      img {
        border-radius: 50%;
      }
      p {
        color: #ccc;
      }
    }
  }

  /* 圆形进度条*/

  .score {
    margin: 20px auto 0;
    width: 140px;
    box-sizing: border-box;
    position: relative;
    .fail {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .icon-mini {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      text-align: center;
      line-height: 22px;
      i {
        font-style: normal;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .remark {
    display: flex;
    margin-bottom: 20px;
    & > div {
      flex: 1;
      margin: 10px 20px;
      line-height: 21px;
      text-align: center;
      color: #666;
      span {
        display: inline-block;
        width: 28px;
        height: 21px;
        background: #37a1da;
        vertical-align: top;
        border-radius: 2px;
        margin-right: 10px;

        &.yellow {
          background: #fedb5b;
        }
        &.percent {
          background: #f36cbe;
        }
      }
    }
  }

  .data-analysis {
    padding-top: 30px;
    padding-bottom: 10px;
    .title {
      font-size: 16px;
    }
    .value {
      text-align: center;
      font-size: 14px;
      color: #666;
      span {
        font-size: 18px;
        color: #333;
      }
    }
    .height {
      height: 5px;
      background: #e2e2e2;
      display: flex;
      position: relative;
      margin: 20px 0px;
      & > div {
        flex: 1;
        height: 5px;
        line-height: 42px;
        text-align: center;
        &.blue {
          background: #48c0e3;
        }
        &.green {
          background: #abce1c;
        }
        &.yellow {
          background: #fec70a;
        }
        &.purple {
          background: #a78ae7;
        }
        &.red {
          background: #e54734;
        }
      }
      i {
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        border: 5px solid #abce1c;
        border-radius: 50%;
        background: #fff;
      }
    }
  }

  /*体态检测分析*/
  .test {
    line-height: 28px;
    // padding-bottom: 20px;
    .title {
      color: #000;
      font-size: 18px;
      margin-top: 25px;
      font-weight: bold;
    }
    .cont {
      margin-top: 25px;
      &.hui {
        color: #8a8a8a;
        font-weight: normal;
      }
      p {
        margin-bottom: 10px;
        color: #8a8a8a;
        font-weight: normal;
      }
      &.flex {
        display: flex;
        margin-top: 0;
        div {
          flex: 1;
          text-align: center;
          margin: 0 5px;
          border: 1px solid #fff;
          &.cur {
            border: 1px solid #37a1da;
          }
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .black-bold {
        color: #000;
        /* font-weight: bold;*/
      }
    }
  }

  // 滚动
  .nav {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: #fff;
    position: relative;
    box-shadow: 0 0 20px 2px #ccc;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
    }
    ul {
      position: absolute;
      left: 0;
      top: 0;
      height: 50px;
      display: flex;
      li {
        float: left;
        text-align: center;
        cursor: pointer;
        color: #ccc;
        position: relative;
        padding: 0 10px;
        flex: 1;
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

  .cntent-box {
    /* margin-top: 20px;*/
  }

  .baseData {
    padding: 20px 0;
    li {
      height: 50px;
      line-height: 50px;
      .object {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        width: 50px;
        font-weight: normal;
        color: #666;
        border-right: 1px solid #8e8e8e;
        vertical-align: top;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 5px;
          height: 1px;
          background: #8e8e8e;
        }
      }
      .value {
        display: inline-block;
        width: calc(100% - 50px);
        height: 50px;
        padding: 10px 0;
        font-weight: normal;
        color: #fff;
        .pro {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          background: #92ce5d;
          color: #fff;
          text-align: right;
          vertical-align: top;
          padding-right: 10px;
          width: 0;
          position: relative;
          .tip {
            position: absolute;
            right: -10px;
            top: 3px;
            bottom: 3px;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            transform: translateX(100%);
            padding: 0px 8px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            border-radius: 5px;
            z-index: 100;
            opacity: 0;
            transition: all 0.5s linear 0.1s;
            &::before {
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
          &:hover {
            .tip {
              opacity: 1;
            }
          }
        }
      }
    }
    .bz {
      margin-left: 50px;
      width: calc(100% - 50px);
      height: 50px;
      line-height: 50px;
      font-size: 12px;
      div {
        width: 20%;
        display: inline-block;
        font-weight: normal;
        color: #666;
        border-top-width: 2px;
        border-top-style: solid;
        text-align: center;
        &:nth-child(1) {
          border-color: #e54734;
        }
        &:nth-child(2) {
          border-color: #ff9a8e;
        }
        &:nth-child(3) {
          border-color: #abce1c;
        }
        &:nth-child(4) {
          border-color: #48c0e3;
        }
        &:nth-child(5) {
          border-color: #02789a;
        }
      }
    }
  }

  .box3 {
    margin-top: -30px;
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

    .cell {
      background: rgba(0, 158, 224, 1);
      border-radius: 4px 4px 0px 0px;
      padding: 5px 10px;
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
  }

  // 轮播图
  #img1,
  #img2,
  #img3 {
    text-align: center;
    margin: 20px auto 10px;
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
