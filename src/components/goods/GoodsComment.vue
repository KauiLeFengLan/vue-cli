<template>
    <div>
        <cmtbox :id="$route.params.id"></cmtbox>
        
    </div>
</template>
<script>
//导入评论组件
 import cmtbox from '../subcomponents/comment'

export default {
    components:{
        cmtbox
    }
}
</script>
<style lang="less" scport>

</style>
