<template>
  <div class="cell">

      <div class="cell-wrapper">
        <div class="cell-left">
          <img :src="parent.imgUrl" width="78" height="78" style="border-radius: 50%;">
        </div>
        <div class="cell-center">
          <h3>{{parent.nickName}}</h3>
          <p>性别：{{parent.sex == 1 ? '男' : parent.sex == 2?'女':'-'}}</p>
        </div>
       <!-- <div class="cell-right">
          <i class="mintui mint-cell-allow-right arrow" style="font-size:20px;"></i>
        </div>-->
      </div>
  </div>
</template>

<script>

  export default {
    name: "userInfo",
    props: ['parent'],
  };
</script>

<style lang="scss" scoped>
  .mint-cell-allow-right {
    font-size: 14px;

  &
  ::after {
    width: 14px;
    height: 14px;
    border-color: #fff;
    right: 5px;
  }

  }
</style>

