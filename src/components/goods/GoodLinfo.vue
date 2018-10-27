<template>
    <div class="goodsinfo-container">

        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        


        <!-- 商品轮播图区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotuList="Lunbotu" :isfunll="false"></swiper>
					</div>
				</div>
			</div>
           
          

         <!-- 商品购买区域 -->

            <div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价:<del>¥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">¥{{goodsinfo.sell_price}}</span> 
                        </p>
                         <p>购买数量:<numbox @getcount="getSelectedCount" 
                         :max="goodsinfo.stock_quantity"
                         ></numbox> </p>
                         <p>
                            <mt-button type="primary" size="small" >立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                         </p>
					</div>
				</div>
			</div>

          <!-- 商品参数区域 -->
             <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsinfo.goods_no}}</p>
                        <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
                        <p>上架时间:{{goodsinfo.add_time}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger"  size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>
<script>
//导入轮播图组件
import swiper from "../subcomponents/swiper";

//导入 数字选择框 组件
import numbox from "../subcomponents/goodsinfo_numbox"

export default {
    data(){
        return {
            id:this.$route.params.id, 
            Lunbotu:[], //轮播图的数据
            goodsinfo:{}, //获取商品的数据
            ballFlag:false, //控制小球隐藏
            selectedCount:1 //保证用户选择的商品,默认用户买一个
        }
    },
    created(){
        this.getLunbotu();
        this. getGoodsInfo();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/' + this.id).then( result => {
                if(result.body.status === 0) {
                    result.body.message.forEach(item => {
                        item.img = item.src;
                    });
                    this.Lunbotu = result.body.message;
                }
            })
        },
        getGoodsInfo(){//获取商品的信息
            this.$http.get('api/goods/getinfo/' + this.id).then( result => {
                if(result.body.status === 0) {
                    this.goodsinfo = result.body.message[0];
                }
            })
        },
        goDesc(id){ //点击使用编程式导航跳转到 图文介绍页面
            this.$router.push({name:'goodsdesc', params: { id }} );
        },
         goComment(id){ //点击使用编程式导航跳转到 评论页面
            this.$router.push({name:'goodscomment', params: { id }} );
        },
        addToShopCar(){ //添加到购物车
            this.ballFlag = !this.ballFlag;
            //(id:商品的id,count:要购买的数量,price:商品的单价,selected:false)
            var goodsinfo = {
                id: this.id, 
                count: this.selectedCount, 
                price:this.goodsinfo.sell_price,
                selected:true
                };
                this.$store.commit("addToCar",goodsinfo );
        },
        beforeEnter(el) {
            el.style.transform = "translate(0, 0)"
        },
        enter(el,done) {
            el.offsetWidth;

            //获取小球在页面中的位置
            const ballposition = this.$refs.ball.getBoundingClientRect();
            const badgeposition =document.getElementById('badge').getBoundingClientRect();
            const xDist = badgeposition.left - ballposition.left
            const yDist = badgeposition.top - ballposition.top

            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";

            done();
        },
        afterEnter(el) {
            this.ballFlag = !this.ballFlag  
        },
        getSelectedCount(count){ //当子组件吧 选择的数量传递给父组件的时候,吧选中的值保存到 data 上
            this.selectedCount = count;
            // console.log(this.selectedCount)
        }
    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="less" scoped>
.goodsinfo-container {
    background-color: #eee;
    overflow: hidden;
    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 40px;
        background-color: red;
        position: absolute;
        top: 390px;
        left: 139px;
        z-index: 99;
    }
    
}
</style>
