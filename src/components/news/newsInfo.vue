<template>
<!-- 首页点击新闻咨询，展示咨询列表，点击其中某一条咨询，进入该详情页面 -->
    <div class="newinfo-container">
        <!-- 大标题 -->
        <h4 class="title">{{ newsInfo.title }}</h4>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{ newsInfo.add_time | dateFormat }}</span>
            <span>点击{{ newsInfo.click }}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsInfo.content"></div>
        <!--  v-html  把数据以html的格式呈现，可以解析html标签 -->

        <!-- 评论区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
// 导入 评论子组件
import comment from '../subcomponents/comment.vue'

export default {
    data() {
        return {
            newsInfo:{},
            id:this.$route.params.id // 将url地址中传递过来的id值，挂载到data上，方便以后调用
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            this.$http.get('json/picture_info_detail.json').then(res => {
                if(res.body.status === 0){
                    this.newsInfo = res.body.message[0];
                    // console.log(res.body.message[0])
                }else{
                    Toast('加载失败');
                }
            });
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="scss" scoped>
    .newinfo-container{
        padding: 0 10px;
        .title{
            text-align: center;
            color: red;
            font-size: 20px;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            color: lightseagreen;
            font-size: 16px;
        }
        .content{
            color: gray;
        }
    }
</style>