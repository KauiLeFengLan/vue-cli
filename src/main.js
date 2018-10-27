import Vue from 'vue'



import app from './App.vue'

// //导入MUI的样式
import 'mint-ui/lib/style.css'
//导入MUI的样式
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'

// import '../src/index'

//导入miut-ui
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


//vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//每次刚进入网站,肯定会调用 main.js 在刚调用的时候,先从本地存储中,把购物车中的数据读出来,
// 放到store中
var car = JSON.parse(localStorage.getItem("car") || "[]");

var store = new Vuex.Store({
    state: { //this.$store.state.***
        car
    },
    mutations: { //this.$store.commit('方法的名称','按需传递唯一的参数')
        addToCar(state, goodsinfo) { //  点击加入购物车,吧商品信息,保存到store中的car上

            //假设 在购物车中,没有找到对应的商品
            var flag = false

            state.car.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count += parseInt(goodsinfo.count)
                        flag = true
                        return true
                    }
                })
                //如果最终,循环完毕,得到的 flag 还是 false 直接把
            if (!flag) {
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) { //修改购物车中商品的数量值
            state.car.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count = parseInt(goodsinfo.count)
                        return true
                    }
                })
                //当修改完成商品的数量,吧最新的购物车数据,保存到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id) { //根据ID,从 store 中 的购物车删除对应的那条商品数据
            state.car.some((item, i) => {
                    if (item.id == id) {
                        state.car.splice(i, 1)
                        console.log("ok")
                        return true;
                    }
                })
                //将删除完毕后的最小购物车数据, 同步到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                    if (item.id == info.id) {
                        item.selected = info.selected
                    }
                })
                // 把最新的 所有购物车商品的状态保存到 store 中去
            localStorage.setItem('car', JSON.stringify(state.car))
        },
    },

    getters: { //this.$store.getters.**** 相当于 计算属性,也相当于 filters
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count

            })
            return o

        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0,
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    },

})


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
    //全局设置post时候表单数据格式的组织形式
Vue.http.options.emulateJSON = true;

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, //挂在路由到实例上
    store
})