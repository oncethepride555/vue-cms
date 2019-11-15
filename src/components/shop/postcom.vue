<template>
<!-- 商品详情页中点击发表评论进入的页面 -->
    <div class="postcom-container">
        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue';
export default {
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="scss" scoped>
   .postcom-container{
       padding: 10px;
   } 
</style>