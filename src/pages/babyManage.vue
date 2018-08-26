<template>
  <div class="page">
    <div class="content">
      <fallback slot="arrow"></fallback>
      <baby-list :data="babyList" :manage="true"></baby-list>
    </div>
  <!--  <copy-right>
      <div class="btns" slot="btns" style="padding:0 20px;">
        <mt-button type="primary" size="large" class="addbaby-btn" @click="add">添加宝贝</mt-button>
      </div>
    </copy-right>-->

  </div>
</template>

<script>

  import fallback from "components/fallback.vue";
  import BabyList from "components/baby-list.vue";
 // import CopyRight from "components/copy-right.vue";

  export default {
    data() {
      return {
        babyList: []
      };
    },
    components: {
      BabyList,
    //  CopyRight,
      fallback
    },
    /*   head() {
           return this.$seo("宝贝管理");
       },*/
    created() {
      this.getBabyInfo();
    },
    methods: {
      getBabyInfo() {
        let self = this
        let params = {}
        this.$fetch.dataApi.getBabyInfo(params).then(({data, msg, total}) => {
          self.babyList = data.childrenList;
          //  self.parent = data.userInfo;
        }).catch(() => {

        })
      },

      add() {
        this.$router.push("/addbaby");
      }
    }
  };
</script>
