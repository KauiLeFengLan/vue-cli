<template>
    <div class="newsinfo-container">   
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
            <span>点击:0</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div  class="content" v-html="newsinfo.content"></div>

        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
//导入评论子组件
import comment from '../subcomponents/comment'

import { Toast } from "mint-ui";
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/' + this.id).then ( result => {
                
                if (result.body.status === 0) {
                    this.newsinfo = result.body.message[0]
                }else{
                    Toast('获取新闻失败!');
                }
            })
        }
    },
    components:{
        //用来注册子组件的节点
        'comment-box':comment
    }
}
</script>


<style lang="less" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 14px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display:flex;
        justify-content: space-between;
    }
    .content{
        /deep/img{
            width: 100%;
        }
    }
}
</style>
