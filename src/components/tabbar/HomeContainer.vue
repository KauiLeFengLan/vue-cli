<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item) in lunbotuList" :key="item.img">
                <img :src="item.img" >
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格区域 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <img src="../../assets/images/menu1(1).png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu6.png" alt="">
		                    <div class="mui-media-body">练习我们</div></a></li>
		        </ul> 
		</div>

        <!-- <h3>HomeContainer</h3> -->
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
// import { Swipe, SwipeItem } from 'mint-ui';
export default{
    data() {
        return{
            lunbotuList:[]//保存轮播图的数组
        };
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getlunbo').then(result => {
                // console.log(result.body)
                if(result.body.status === 0) {
                    // console.log(result.body.message)
                  this.lunbotuList = result.body.message;
                   
                // Toast("加载模块成功...")
                }else {
                    Toast("加载模块失败...")
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>

.mint-swipe {
   height: 200px;
    img{
        width: 100%;
        height: 100%;
    }
}
.mui-content {
    .mui-content>.mui-table-view:first-child{
        margin: 0;
    }
    ul{
        background-color: #fff;
        .mui-table-view-cell{
            border: none;
            margin: 0 !;
            img{
                width: 60px;
                height: 60px;
            }
            .mui-media-body{
                font-size: 13px;
                }
        }
       
    }
    margin-bottom: 500px
}
</style>


