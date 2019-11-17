<template>
  <!-- 通过 mui 中 numberbox 的 data API 来设置 最小值 -->
  <div id="data1" class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="num"
      @change="numChange"
      ref="input"
      readonly
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  mounted() {
    // 初始化 数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods: {
    numChange() {
        // 数量改变了
        this.$store.commit('updateCart',{num:parseInt(this.$refs.input.value),id:this.id})
    }
  },
  props:['num','id']
};
</script>

<style lang="scss" scoped>
</style>