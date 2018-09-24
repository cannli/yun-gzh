<!--
@desc 菊花旋转loading
@isLoading {Boolean} 是否菊花是否显示
@svgWidth {Number} 菊花的宽度 有默认值可不传
@svgHeight {Number} 菊花的高度 有默认值可不传
@boxTop {Number} 上边距和影响蒙层的高度 calc 有默认值可不传
@boxLeft {Number} 做边距和影响的宽度 calc 有默认值可不传
e.g：
<loading :isLoading="isLoading" :boxLeft="boxLeft" :boxTop="boxTop" :svgWidth="svgWidth" :svgHeight="svgHeight"></loading>
-->
<template>
  <div v-if="myIsLoading" :style="loadingBox" class="loadingBox" @click="showFn">

        <img :src="imgUrl" class="bannerImg"/>

   <!-- <div class="back">X</i></div>-->
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function () {
      return {
        myIsLoading: this.isLoading
      }
    },
    watch: {
      isLoading (val) {
        this.myIsLoading = val
      }
    },
    props: {
      imgUrl:[String],
      isLoading: {
        type: Boolean,
        default: false
      },
      boxTop: {
        type: Number,
        default: 0
      },
      boxLeft: {
        type: Number,
        default: 0
      }
    },
    computed: {// 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。
      loadingBox: function () {
        var self = this
        return {
          top: self.boxTop + 'px',
          left: self.boxLeft + 'px',
          width: 'calc( 100% - ' + self.boxLeft + 'px )',
          height: 'calc( 100% - ' + self.boxTop + 'px )'
        }
      }
    },
    methods: {
      setBannerH () {
        this.bannerH = (document.body.clientHeight - 100) + 'px'
        console.log(this.bannerH)
      },
      showFn () {
        this.myIsLoading = false
        this.$emit('showFn')
      }
    },
    mounted () {
      this.setBannerH()
      /*  window.addEventListener('resize', () => {
          this.setBannerH()
        }, false) */

      // window.addEventListener('resize', this.setBannerH)
    },
    beforeDestroy () {

      // window.removeEventListener('resize', this.setBannerH)
      // this.bannerH = null
      // this.setBannerH = null
    }
  }
</script>

<style type="text/css">
  .loadingBox {
    position: fixed;
    z-index: 10000;
    top: 0;
    left:0;
    background-color: rgba(0, 0, 0, .8);
  }
  .bannerImg {
   margin-top: 9%;
    width: 100%;
    height: 90%;
    min-height: 360px;
  }
</style>
