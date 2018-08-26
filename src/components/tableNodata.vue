<template>
  <div class="table-nodata">
    <div class="table-nodata-wrap">
      <div class="ico-nodata"><!-- 无结果图标 --></div>
      <p>{{text}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      text:{
        type:[Number,String],
        default:'请添加宝贝~'
      }
    },
    data() {
      return {
      }
    }
  }
</script>
<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  .table-nodata {
    text-align: center;
    font-size: 18px;
    color: #000;
    .table-nodata-wrap {
      display: inline-block;
      padding-top: 20px;
      p {
        text-align: center;
        color: #80848F;
        font-size: 12.5px;
        margin: 0;
      }
      .ico-nodata {
        width: 260px;
        height: 160px;
        margin: 0 auto;
        background: url(../assets/images/no-data.png) no-repeat 0 0;
        background-size: 100%;
      }

    }
  }
</style>
