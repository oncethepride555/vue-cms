<template>
  <!-- tabbar 购物车组件 -->
  <div class="shopCart-container">
    <div class="goodsList" v-for="(item,i) in cartInfo" :key="item.id">
      <!-- 简洁模式开关打开状态 mui -->
      <!-- <div class="mui-switch mui-switch-mini mui-active">
        <div class="mui-switch-handle"></div>
      </div>-->
      <!-- Mint UI 组件 -->
      <mt-switch v-model="item.isSelected" @change="selectedChange(item.id,item.isSelected)"></mt-switch>
      <img :src="item.img_url" alt />
      <div class="goodsList-right">
        <h1>{{ item.title }}</h1>
        <p class="right-bottom">
          <span>￥{{item.sell_price}}</span>
          <!-- MUI 中的数字选择框组件  -->
          <numberbox :num="item.count" :id="item.id"></numberbox>
          <a href="#" @click.prevent="removeCart(item.id,i)">删除</a>
        </p>
      </div>
    </div>
    <div class="count">
      <div class="count-left">
        <p>总计（不含运费）</p>
        <p>
          已勾选商品
          <span>{{this.$store.getters.getSelectNum}}</span>件，总价
          <span>￥{{ this.$store.getters.getAllPrice }}</span>
        </p>
      </div>
      <!-- Mint UI 组件 -->
      <mt-button type="danger">去结算</mt-button>
    </div>
  </div>
</template>

<script>
import numberbox from "../subcomponents/shopcar_numbox.vue";

export default {
  data() {
    return {
      cartInfo: [] // 加入购物车的商品信息
    };
  },
  // 注册子组件
  components: {
    numberbox: numberbox
  },
  created() {
    this.getcartInfo();
  },
  methods: {
    getcartInfo() {
      this.$http.get("../../json/goods.json").then(res => {
        var allGoods = res.body.message;
        // console.log(allGoods)
        // 让 store 中 cart 数组的每一项，与所有的商品比较，如果 id 相同，就把这个商品的详细信息 给了 obj 对象，另外 把 加入购物车的数量 也给了 obj 对象
        this.$store.state.cart.forEach(item1 => {
          allGoods.forEach(item2 => {
            if (item1.id == item2.id) {
              var obj = item2;
              obj.count = item1.count;
              obj.isSelected = item1.isSelected;
              this.cartInfo.push(obj);
            }
          });
        });
        // console.log(this.cartInfo)
      });
    },
    removeCart(id, index) {
      // 删除的时候，根据 index 删除 商品列表中对应的商品；根据 id 删除 store 中的
      // 根据 index 删除 商品列表中对应的商品
      this.cartInfo.splice(index, 1);
      // 根据 id 删除 store 中的商品
      this.$store.commit("removeCart", id);
    },
    selectedChange(id, isSelected) {
      console.log(id);
      console.log(isSelected);
      this.$store.commit("selectedChange", { id: id, isSelected: isSelected });
    }
  }
};
</script>

<style lang="scss" scoped>
.shopCart-container {
  padding: 10px;
}
.goodsList {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #999;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .mui-switch {
    margin-right: 10px;
  }
  img {
    margin: 0 10px;
    width: 60px;
    height: 60px;
  }
  .goodsList-right {
    h1 {
      font-size: 13px;
    }
    .right-bottom {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        color: red;
        font-size: 13px;
      }
      .mui-numbox {
        height: 24px;
      }
      a {
        font-size: 13px;
      }
    }
  }
}
.count {
  margin-top: 20px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #ccc;
  border-right: 0.2px solid #ccc;
  .count-left {
    p {
      font-size: 13px;
    }
    span {
      font-size: 13px;
      font-weight: bold;
      color: red;
    }
  }
}
</style>