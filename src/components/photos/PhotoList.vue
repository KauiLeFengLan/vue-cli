<template>
    <div>
        <!-- 顶部滑动条区域 -->
       <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId">
							{{item.title}}
						</a>
					</div>
				</div>
       </div>

	   <!-- 图标列表区域 -->
	   <ul class="photo-list">
			<router-link v-for="item in list" :key="item.id" :to="'/home/PhotoInfo/' + item.id" tag="li">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-body">{{item.zhaiyao}}</div>
				</div>
			</router-link>
			</ul>
    </div>
</template>
<script>
import mui from '../../assets/mui/js/mui.min'

export default {
    data() {
        return{
			cates:[],//所有分类的列表数组
			list:[] //图片列表的ID
        }
	},
	created() {
		this.getAllcategory();

		this.getPhotoListByCateId(0);
	},
	mounted() {
		
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
		
	},
		

    methods: {
		getAllcategory() {
			//获取所有的图片分类
			this.$http.get('api/getimgcategory').then(result => {
				if(result.body.status === 0) {
					result.body.message.unshift({ title: "全部", id: 0 });
					this.cates = result.body.message
				}
			});
		},
		getPhotoListByCateId(created){
			this.$http.get("api/getimages/" + created).then( result => {
				if(result.body.status === 0 ){
					this.list = result.body.message
				}
			})
		}
	}
}; 

</script>
<style lang="less" scoped>
* { touch-action: pan-y; }

.photo-list{
	list-style: none;
	padding: 10px;
	margin: 0;
	padding-bottom: 0;
	li {
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0  9px #999;
		position: relative;
		img{
			width: 100%;
			vertical-align: middle;
		}
		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
		}
		.info {
			color: white;
			text-align: left;
			position: absolute;
			bottom: 0;
			background-color:rgba(0,0,0,0.4);
			max-height: 84px;
			.info-title{
				font-size: 14px;
			}
			.info-body{
				font-size: 12px;
			}
		}
	}
	
}
</style>
