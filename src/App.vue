<template>
  
		<div class="app-container">
      <!-- 顶部区域 -->

      <mt-header fixed title="黑马程序员·Vue项目"></mt-header>

      <!-- 中间区域 -->


	<transition>
			<router-view></router-view>
		</transition>



      <!-- 底部区域 -->
		<nav class="mui-bar mui-bar-tab boutt">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>

</template>

<script>

</script>

<style lang="less" scoped>
.mint-header {
    z-index: 99;
}
.app-container{
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}
.v-enter{
	opacity: 0;
	transform: translate3d(100%,0,0);
}
.v-leave-to{
	opacity: 0;
	transform: translate3d(-100%,0,0);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
// 改类名解决mui
.mui-bar-tab .mui-tab-item-llb .mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
