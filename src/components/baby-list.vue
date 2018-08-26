<template>
    <div>
            <!-- 宝贝管理列表 -->
    <ul class="babylist" v-if="manage">
        <li class="cell" v-for="(item,index) in data" :key="index">
            <router-link class="cell-wrapper" to="/babyInfo">
                <div class="cell-left">
                    <div class="name">{{item.username}}</div>
                    <div class="birthday">{{item.birth}}</div>
                </div>
                <div class="cell-right">
                    <img  :src="item.headImg"  width="68" height="68">
                </div>
            </router-link>
            <div class="cell-wrapper flex">
                <!--<router-link class="cell-left " to="/addBaby">-->
                    <!--<div>-->
                        <!--<span>编辑</span>-->
                    <!--</div>-->
                <!--</router-link>-->
                <router-link class="cell-right" :to="{path:'/babyInfo',query: {id: item.id}}">
                    <div>
                        <span>查看详情</span>
                        <i class="mintui mint-cell-allow-right arrow"></i>
                    </div>
                </router-link>
            </div>
        </li>
    </ul>

    <!-- 我的宝贝列表 -->
    <ul class="babylist" v-else>
        <li class="cell" v-for="(item,index) in data" :key="index">
            <router-link to="/babyInfo">
                <div class="cell-wrapper">
                    <div class="cell-left">
                        <div class="name">{{item.username}}</div>
                        <div class="birthday">{{item.birth}}</div>
                    </div>
                    <div class="cell-center">
                        <img :src="item.headImg"  width="68" height="68">
                    </div>
                    <div class="cell-right">
                        <i class="mintui mint-cell-allow-right arrow"></i>
                    </div>
                </div>
            </router-link>
        </li>

    </ul>
    </div>
</template>
<script>
export default {
  props: ['data', 'manage'],
   created() {
        console.info(this.data,1111)

   },
  methods: {
    edit(id) {
      this.$router.push('/addbaby')
    },
    info() {
      this.$router.push('/babyinfo')
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
.babylist {
  li {
    border-radius: 4px;
    background: linear-gradient(
      -135deg,
      rgba(255, 149, 209, 1),
      rgba(253, 43, 131, 1)
    );
    padding: 20px;
    margin-top: 20px;
    .cell-wrapper {
      margin-top: 0;
      position: relative;
      img {
        border: 1px solid #fe66a8;
        border-radius: 50%;
      }
      .cell-left {
        color: #fff;
        line-height: 36px;
        .name {
          font-size: 20px;
        }
        .birthday {
          font-size: 12px;
          background: url('../assets/images/birth.png') no-repeat 0 center;
          background-position: -28px -11px;
          padding-left: 15px;
            width: 100px;
        }
      }
      .cell-center {
        text-align: right;
        padding-right: 10px;
      }
      .cell-right {
        .mint-cell-allow-right {
          font-size: 14px;
          &::after {
            width: 14px;
            height: 14px;
            border-color: #fff;
            right: 5px;
          }
        }
      }
    }
    &:nth-child(even) {
      background: linear-gradient(
        -135deg,
        rgba(124, 216, 255, 1),
        rgba(0, 158, 224, 1)
      );
      .cell-wrapper {
        img {
          border: 1px solid #4bc8fd;
        }
      }
    }
  }
}

.cell-wrapper.flex {
  display: flex;
  .cell-left,
  .cell-right {
    flex: 1;
    line-height: 36px;
  }
  .cell-right span {
   // text-indent: -999em;
      color: #000000;
    display: block;
  }
}
</style>

