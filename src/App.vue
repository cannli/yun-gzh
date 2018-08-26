<template>
  <section class="body-warp">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>
<script type="text/javascript">
  export default {
    name: 'app'
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import '~assets/scss/index';

</style>
