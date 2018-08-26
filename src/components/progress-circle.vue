<template>
    <div class="progress-circle">
        <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent" />
            <circle class="progress-bar" :style="{stroke:stroke}" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset" />
        </svg>
        <slot></slot>
    </div>
</template>  
  
<script type="text/ecmascript-6">
export default {
  props: {
    radius: {
      type: String,
      default: "0.32rem"
    },
    percent: {
      type: Number,
      default: 0
    },
    stroke: {
        type: String,
        default: '#37a1da'
    }
  },
  data() {
    return {
      dashArray: Math.PI * 100
    };
  },
  computed: {
    dashOffset() {
      return (1 - this.percent) * this.dashArray;
    }
  }
};
</script>  
  
<style scoped lang="scss">  
  .progress-circle {
    position: relative;  
    circle  {
      stroke-width: 22px;
      transform-origin: center;  
      &.progress-background{
        transform: scale(0.8);  
        stroke: #e2e2e2;
      }
      &.progress-bar{
        transform: scale(0.8) rotate(-90deg);  
        stroke: #36a0d9;  
      }
    }
}
</style>  