<template>
  <!-- 通过 mui 中 numberbox 的 data API 来设置 最小值 -->
  <div id="data1" class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="numChange"
      ref="input"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  mounted() {
    // 初始化 数字选择框组件
    // mui(".mui-number").numbox(); 这个错误花了我一天的时间
    mui(".mui-numbox").numbox();
  },
  methods: {
    numChange() {
      // 传递的是要加多少个商品到购物车
      // 调用从父组件传递过来的方法，把this.$refs.input.value传递给父组件
      this.$emit("numChange", parseInt(this.$refs.input.value));
    }
  },
  props: ["max"],
  watch: {
    //属性监听
    max: function(newVal, oldVal) {
      // 通过jsAPI来设置数字框的最大值
      mui(".mui-numbox").numbox().setOption('max',newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>