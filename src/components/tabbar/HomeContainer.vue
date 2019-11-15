<template>
  <!-- tabbar 首页组件 -->
  <div>
    <!-- 轮播图区域 -->
    <lunbotu-box :lunbotuList="this.lunbotuList" :isfull="true"></lunbotu-box>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" />
          <div class="mui-media-body">新闻咨询</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/picshare">
          <img src="../../images/menu2.png" />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shopping">
          <img src="../../images/menu3.png" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// 导入 轮播图 子组件
import lunbotu from "../subcomponents/lunbotu.vue";

export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("../../json/lunbotu.json").then(res => {
        if (res.body.code === 200) {
          // 请求成功
          this.lunbotuList = res.body.data;
          // console.log(res.body.data);
          // Toast("加载轮播图ok");
        } else {
          // 请求失败
          Toast("加载轮播图失败");
        }
      });
    }
  },
  // 在 vm 实例上注册轮播图子组件
  components: {
    "lunbotu-box": lunbotu
  }
};
</script>

<style lang="scss" scoped>
// 六宫格
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-color: white;
  width: 33%;
}
</style>