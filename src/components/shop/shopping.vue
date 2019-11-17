<template>
<!-- 点击首页的 商品购买 进入的 商品列表页面 -->
  <div class="goods-list">
      <!-- 页面跳转两种方式：1.router-link 2.编程式导航 -->
    <div class="goods-item" v-for="item in goods" :key="item.id" @click="goToDetail(item.id)">
      <img :src="item.img_url" />
      <h4 class="title">{{item.title}}</h4>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="addMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [],
      page: 3
    };
  },
  methods: {
    getGoods() { // 获取商品列表
      this.$http.get("../../json/goods.json").then(res => {
        if (res.body.status === 0) {
          this.goods = res.body.message.slice(0,this.page);
        }
      });
    },
    addMore(){ // 加载更多商品
        this.page += 3;
        this.getGoods();
    },
    goToDetail(id){ // 跳转到商品详情页
        this.$router.push({name:'shopdetail',params:{id}});
    }
  },
  created() {
    this.getGoods();
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 6px;
  justify-content: space-between;
  .goods-item {
    border: 1px solid #ccc;
    width: 49%;
    margin-bottom: 6px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      margin-top: 10px;
      margin-bottom: 0;
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          font-weight: bold;
          color: red;
          font-size: 18px;
        }
        .old {
          /* 删除线 */
          text-decoration: line-through;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>