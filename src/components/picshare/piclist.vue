<template>
<!-- 从首页点击图片分享后，展示图片列表，点击图片列表中的某张图片，显示该页面 -->
  <div class="piclist-container">
    <h1 class="title">{{ piclistinfo.title}}</h1>
    <p class="subtitle">
      <span>发表时间：{{ piclistinfo.add_time | dateFormat}}</span>
      <span>点击{{ piclistinfo.click}}次</span>
    </p>
    <hr />
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview :slides="list"></vue-preview>
    </div>
    <!-- 文字描述区域 -->
    <p class="content" v-html="piclistinfo.content"></p>
    <!-- 评论区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
// 导入 评论子组件
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      piclistinfo: {},
      id: this.$route.params.id,
      list: []
    };
  },
  methods: {
    getPicListInfo() {
      // 获取文字详情
      this.$http.get("../../json/piclist_info_detail.json").then(res => {
        if (res.body.status === 0) {
          this.piclistinfo = res.body.message[0];
          // console.log(this.id)
        }
      });
    },
    getThumbnail() {
      // 获取缩略图
      this.$http.get("../../json/thumbnail.json").then(res => {
        if (res.body.status === 0) {
          res.body.message.forEach(item => {
            item.msrc = item.src;
            // 缩略图点开之后的宽高
            item.h = 300;
            item.w = 300;
          });
          this.list = res.body.message;
          console.log(res.body.message);
        }
      });
    },
    handleClose() {
      console.log("close event");
    }
  },
  created() {
    this.getPicListInfo();
    this.getThumbnail();
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.piclist-container {
  padding: 0 6px;
  .title {
    text-align: center;
    color: darkcyan;
    font-size: 18px;
    margin: 16px 0;
  }
  .subtitle {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    text-align: justify;
    color: black;
    line-height: 36px;
  }
}

// vue组件中，在style设置为scoped的时候，里面在写样式对子组件是不生效的，如果想让某些样式对所以子组件都生效，可以使用 /deep/ 深度选择器。
.thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}
</style>