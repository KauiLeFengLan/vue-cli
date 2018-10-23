import Vue from 'vue'



import app from './App.vue'

// //导入MUI的样式
import 'mint-ui/lib/style.css'
//导入MUI的样式
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'

// import '../src/index'

//导入miut-ui
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
//导入自己的router.js路由模块
import router from './router/index.js';
import VueResource from 'vue-resource';
Vue.use(VueResource);
//导入格式化时间的插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//设置请求的根路径
Vue.http.options.root = 'http://027xin.com:8899/'

var vm = new Vue({
        el: '#app',
        render: c => c(app),
        router, //挂在路由到实例上

    })
    // export default route