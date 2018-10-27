import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'

Vue.use(Router)

import NewsList from '../components/news/NewsList'
import Newsinfo from '../components/news/Newsinfo'
import PhotoList from '../components/photos/PhotoList'
import PhotoInfo from '../components/photos/PhotoInfo'
import GoodSlist from '../components/goods/GoodSlist'
import GoodLinfo from '../components/goods/GoodLinfo'
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import GoodsComment from '../components/goods/GoodsComment.vue'

export default new Router({
    routes: [
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: Newsinfo },
        { path: '/home/Photolist', component: PhotoList },
        { path: '/home/PhotoInfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodSlist },
        { path: '/home/goodLinfo/:id', component: GoodLinfo, name: 'goodlinfo' },
        { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },
        { path: '*', redirect: '/home' }
    ],

    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类,默认的类叫做,link-active-aclass
})