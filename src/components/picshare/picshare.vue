<template>
<!-- 从首页点击图片分享后，显示该页面，图片列表 -->
  <div>
    <!-- 滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']"
            v-for="item in category"
            :key="item.id"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link tag='li' v-for="item in list" :key="item.id" :to="'/home/piclist/' + item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">
            {{ item.title }}
          </h1>
          <div class="info-body">
            {{ item.zhaiyao}}
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 1.导入 mui 的 js 文件
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      category: [], // 导航分类数组
      list: [] // 图片列表的数组
    };
  },
  methods: {
    getPicCategory() {
      // 获取滑动导航分类数据
      this.$http.get("../../json/picCategory.json").then(res => {
        if (res.body.status === 0) {
          // console.log(res.body.message);
          this.category = res.body.message;
        }
      });
    },
    getPicList() {
      // 获取图片列表
      this.$http.get("../../json/picList.json").then(res => {
        if (res.body.status === 0) {
          this.list = res.body.message;
        }
      });
    }
  },
  created() {
    // data 和 methods 初始化好后
    this.getPicCategory();
    this.getPicList();
  },
  mounted() {
    // 当组件中的DOM结构被渲染好并放到页面中后
    // 2.初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  padding: 10px;
  margin: 0px;
  list-style: none;
  padding-bottom: 0;
  li{
    background-color: #ccc;
    text-align: center;
    box-shadow: 0 0 10px #ccc;
    margin-bottom: 10px;
    position: relative;
  }
  img{
    width:100%;
    vertical-align: middle;
  }
  // 图片懒加载样式
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
}

.info{
  position: absolute;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  text-align: left;
  color:white;
  max-height: 70px;
  .info-title{
    font-size: 14px;
  }
  .info-body{
    font-size: 13px;
  }
}
</style>