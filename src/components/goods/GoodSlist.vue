<template>
    <div class="goods-list" >
        <div class="goods-item" v-for="(item,index) in goodslist" 
        :key="index" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
         <mt-button type="primary" size="large" @click="postGoodSlist">加载更多</mt-button>
    </div>
</template>
 <script>
 export default {
     data(){
         return{
             pageindex:1,
             goodslist:[]
         }
     },
     created(){
         this.getGoodSlist()
     },
     methods:{
         getGoodSlist(){
             this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(result => {
                  if(result.body.status === 0 ) {
                    // console.log(result.body.message)
                    // this.comments = result.body.message;
                    this.goodslist = this.goodslist.concat(result.body.message)
                    // console.log( this.goodslist)
                }else {
                    Toast('获取评论失败!');
                }
             })
         },
         postGoodSlist(){
            this.pageindex++;
            this.getGoodSlist()
        },
        goDetail(id) {
    // 1. 最简单的
    // this.$router.push("/home/goodsinfo/" + id);
    // 2. 传递对象
    // this.$router.push({ path: "/home/goodsinfo/" + id });
    // 3. 传递命名的路由(需要在定义的路由规则对象中添加name属性)
    this.$router.push({ name: "goodlinfo", params: { id } });
} 
     },
      
 }
 </script>


<style lang="less" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
 