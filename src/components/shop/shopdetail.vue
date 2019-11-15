<template>
  <div class="shop-detail">
    <!-- 小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 轮播图 -->
    <div class="pic bor">
      <!-- 应用轮播图子组件 -->
      <lunbotu-box :lunbotuList="this.lunbotuList" :isfull="false"></lunbotu-box>
    </div>
    <!-- 中间部分 -->
    <div class="buy bor">
      <h3>{{goodsInfo.title}}</h3>
      <p>
        <span>
          市场价：
          <s>￥{{goodsInfo.market_price}}</s>
        </span>
        <span class="sell_title">
          销售价：
          <span class="sell">￥{{goodsInfo.sell_price}}</span>
        </span>
      </p>
      <div class="num">
        购买数量:
        <!-- 数字选择框组件 -->
        <!-- numberbox 中的 goodsInfo 是异步获取的，当把 numberbox 渲染到页面的时候，goodsInfo 还没有拿到 -->
        <numberbox @numChange="numChange" :max="goodsInfo.stock_quantity"></numberbox>
      </div>
      <div>
        <mt-button type="primary">立即购买</mt-button>
        <mt-button type="danger" @click="addShopCart">加入购物车</mt-button>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="param bor">
      <h3>商品参数</h3>
      <p>商品货号：{{goodsInfo.goods_no}}</p>
      <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
      <p>上架时间：{{goodsInfo.add_time | dateFormat}}</p>
      <mt-button class="tuwen" plain type="primary" size="large" @click="toDetail(id)">图文介绍</mt-button>
      <mt-button class="comment" plain type="danger" size="large" @click="postComment(id)">商品评论</mt-button>
    </div>
  </div>
</template>

<script>
// 导入 轮播图 子组件
import lunbotu from "../subcomponents/lunbotu.vue";
import numberbox from "../subcomponents/goodsinfo_numbox.vue";

export default {
  data() {
    return {
      lunbotuList: [], //详情页轮播图数组
      goodsInfo: {},
      id: this.$route.params.id,
      ballFlag: false,
      numVal:1
    };
  },
  created() {
    this.getLunbo();
    this.getInfo();
    // console.log('created 的最后');
  },
  methods: {
    getLunbo() {
      // 获取商品详情页的轮播图
      this.$http.get("../../json/thumbnail.json").then(res => {
        if (res.body.status === 0) {
          res.body.message.forEach(item => {
            item.image = item.src;
          });
          this.lunbotuList = res.body.message;
        }
      });
    },
    getInfo() { // 获取商品信息
      // console.log('getInfo方法的开头')
      this.$http.get("../../json/goods_info.json").then(res => {
        // console.log('getInfo方法中的.then方法中')
        if (res.body.status === 0) {
          this.goodsInfo = res.body.message[0];
        }
      });
      // console.log('getInfo方法的结尾')
    },
    postComment(id) {
      // 去发表评论页面
      this.$router.push({ name: "postcom", params: { id } });
    },
    toDetail(id) {
      // 去图文详情页
      this.$router.push({ name: "photodetail", params: { id } });
    },
    addShopCart() {
      // 点击加入购物车，小球从无到有
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      // 动态获取小球初始位置到购物车徽标x,y的距离
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const x = badgePosition.left - ballPosition.left;
      const y = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 0.8s cubic-bezier(.17,-0.38,.7,.71)";
      done();
    },
    afterEnter(el) {
      // 小球移动到购物车徽标的位置后消失
      this.ballFlag = !this.ballFlag;
    }
    ,
    numChange(value){ // 子组件调用了这个方法，实参为 this.$refs.input.value，即文本框中的值
      this.numVal = value;
      console.log(this.numVal);
    }
  },
  // 注册子组件
  components: {
    "lunbotu-box": lunbotu,
    "numberbox": numberbox
  }
};
</script>

<style lang="scss" scoped>
.shop-detail {
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    left: 151px;
    top: 368px;
  }
  background-color: #eee;
  padding: 10px;
  .bor {
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #999;
    background-color: #fff;
  }
  .pic {
    margin-bottom: 10px;
  }
  .buy {
    margin-bottom: 10px;
    padding: 10px;
    h3 {
      font-size: 20px;
    }
    p {
      color: #000;
      font-size: 16px;
      margin-top: 30px;
      .sell_title {
        margin-left: 10px;
        .sell {
          color: red;
          font-weight: bold;
        }
      }
    }
    .num {
      margin-bottom: 10px;
    }
  }
  .param {
    padding: 10px;
    h3 {
      font-size: 20px;
      margin-bottom: 30px;
    }
    .tuwen {
      margin-top: 30px;
    }
    .comment {
      margin-top: 20px;
    }
  }
}
</style>