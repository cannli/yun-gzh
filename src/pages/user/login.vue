<template>
  <div class="page">

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {SET_USER_INFO} from 'store/actions/type'

  export default {
    data() {
      return {}
    },
    components: {},
    head() {
      return this.$seo('我的宝贝')
    },
    created() {
      //  this.$router.push( '/home')
    },
    mounted() {
      this.$nextTick(() => {
        let obj = window.localStorage.getItem('tokenId')
        this.set_user_info({
          user: obj.Authorization,
        //  login: obj.isbindPhone
        })
        this.$router.push( '/home')
      })

    },
    methods: {
      ...mapActions({
        set_user_info: SET_USER_INFO
      }),
    }
  }
</script>

<style lang="scss" scoped>
</style>

