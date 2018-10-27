<template>
    <div class="mui-numbox" data-numbox-min='1'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="initount"
                     @change="countChanged" ref="numbox" readonly />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
import mui from  "../../assets/mui/js/mui.min.js"

export default {
    mounted(){
        //初始化数字选择框
        mui(".mui-numbox").numbox();
        console.log(this.max)
    },
    methods:{
        countChanged(){
            // console.log(this.$refs.numbox.value)
            this.$emit('getcount',parseInt(this.$refs.numbox.value));
        }
    },
    props:["max"],
    watch: {
        max: function(newVal, oldVal) {
            mui(".mui-numbox")
            .numbox()
            .setOption("max",newVal)
        }
    }
}
</script>

<style lang="less" scoped>

</style>
