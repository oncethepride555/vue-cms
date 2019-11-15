<template>
<!-- 首页点击新闻咨询后，进入的页面 -->
  <div class="newsList-container">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h4>{{ item.title }}</h4>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time | dateFormat }}</span>
              <span>点击：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("json/picture_info.json").then(res => {
        if (res.body.status === 0) {
          this.newsList = res.body.message;
        } else {
          Toast("加载列表失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.newsList-container {
  .mui-ellipsis {
    color: darkcyan;
    display: flex;
    justify-content: space-between;
  }
}
</style>