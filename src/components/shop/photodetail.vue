<template>
<!-- 从商品详情进入的图文详情页 -->
    <div class="detail-container">
        <h3>{{detail.title}}</h3>
        <hr>
        <div v-html="detail.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            detail:{}
        }
    },
    created(){
        this.getDetail()
    },
    methods: {
        getDetail(){
            this.$http.get('../../json/photo_detail.json').then( res => {
                if(res.body.status === 0){
                    this.detail = res.body.message[0]
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .detail-container{
        padding: 10px;
        h3{
            text-align: center;
            font-size: 18px;
            color: lightseagreen;
        }
        div{
            text-align: justify;
        }
    }
</style>