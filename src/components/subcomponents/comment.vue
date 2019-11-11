<template>
    <div class="cmt-container">  
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="( item ,i ) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name }}&nbsp;&nbsp;发表时间：{{item.add_time  | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="addMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            comments:[],
            index:3 // 默认加载3条评论
        }
    },
    created(){
        this.getComment()
    },
    methods: {
        getComment(){ // 获取评论
            this.$http.get('../../json/comment.json').then(res => {
                if(res.body.status === 0){
                    this.comments = res.body.message.splice(0,this.index)
                }else{
                    Toast('加载失败')
                }
            })
        },
        addMore(){ // 加载更多
            this.index +=3;
            this.getComment();
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 84px;
            margin: 0;
        }
        .cmt-list{
            margin:5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>