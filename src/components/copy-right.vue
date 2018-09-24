<template>
    <div class="copyright" :style="{'position':$store.state.status}" style="margin-top:20px;">
        <slot name="btns"></slot>
        <div>
            <img src="../assets/images/logo.png" alt="" style="vertical-align:middle;"> 红运天传提供技术支持
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
  //  console.log("winHeight", this.$store.state.winHeight);
  //  console.log("bodyHeight", this.$store.state.bodyHeight);
  //  console.log("status", this.$store.state.status);
  }
};
</script>

<style lang="scss" scoped>
</style>

