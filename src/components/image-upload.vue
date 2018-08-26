<template>
  <div>
    <div class="image-list">

      <vue-img-inputer v-model="picValue" theme="light" size="small" name="headImg"
                       icon="../../static/images/upload.png"></vue-img-inputer>

    </div>

  </div>
</template>
<script>

  import VueImgInputer from 'vue-img-inputer'

  export default {
    data: function () {
      return {
        show: false,
        imgUrls: [],
        urlArr: [],
        isPhoto: true,
        btnTitle: "",
        isModify: false,
        previewImg: "",
        isPreview: false,
        picValue: ""
      }
    },
    component: {
      'VueImgInputer': VueImgInputer
    }

  };
</script>
<style lang="scss" scoped>
  .image_upload {
    background: #fff;
  }

  .image-list {
    position: relative;
    border: 1px dashed #a2a2a2;
    width: 80px;
    height: 80px;
    margin: 20px auto;

  .img-inputer--small {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    background: url(../../static/images/upload.png) no-repeat 0 0;
  }

  }

  .img-inputer__label {
    background: url(../../static/images/upload.png) no-repeat 0 0;
  }

  .input-upload {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

</style>
