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

export default new Router({
    routes: [
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: Newsinfo },
        { path: '*', redirect: '/home' }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类,默认的类叫做,link-active-aclass
})