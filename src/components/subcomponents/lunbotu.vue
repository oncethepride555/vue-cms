<template>
  <!-- 轮播图子组件 -->
  <div>
    <mt-swipe :auto="4000">
      <!-- lunbotuList 数组不在这个组件中定义，谁用这个组件，就向这个组件传一个 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.image">
        <img :src="item.image" :class="{'full':isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
    }
  }
}
.full {
  width: 100%;
}
</style>