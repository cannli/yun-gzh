<template>
  <div>
    <router-link to="/">
      <div class="fallback">
        <i class="mintui mintui-back arrow"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'fallback',
    methods: {
      goback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  .fallback {
    padding: 20px 0 0 20px;
    .arrow {

      padding: 4px;
      color: #fff;
      font-size: 21px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      z-index: 9999;
      width: 32px;
      height: 32px;
      text-align: center;
    }
  }

</style>

