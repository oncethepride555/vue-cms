<template>
  <div class="app-container">
    <!-- Header Mnit-UI 中的 Header 组件-->
    <mt-header fixed title="Vue项目">
      <span slot="left">
        <mt-button icon="back" @click="goBack" v-show="flag">返回</mt-button>
      </span>
    </mt-header>
    <!-- Body -->
    <!-- 这一部分是一直在变换的，根据路由匹配规则来展示相应的组件 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- Footer  使用的是 MUI 代码片段-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-wss" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-wss" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-wss" to="/shoppingcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getCount }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-wss" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    // 监听路径的改变
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.mui-bar {
  background-color: white;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
// 从右侧进入，从左侧离开
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute; //可以解决从左侧进入的元素上浮的问题
}
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
.mui-bar-tab .mui-tab-item-wss.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-wss {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-wss .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-wss .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mint-header {
  z-index: 99;
}
</style>