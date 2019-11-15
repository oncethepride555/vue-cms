import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShoppingcartContainer from './components/tabbar/ShoppingcartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import picshare from './components/picshare/picshare.vue'
import piclist from './components/picshare/piclist.vue'
import shopping from './components/shop/shopping.vue'
import shopDetail from './components/shop/shopdetail.vue'
import photodetail from './components/shop/photodetail.vue'
import postcom from './components/shop/postcom.vue'

// 3.创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' }, // 重定向
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shoppingcart', component: ShoppingcartContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newslist', component: newsList },
        { path: '/home/newsinfo/:id', component: newsInfo },
        { path: '/home/picshare', component: picshare },
        { path: '/home/piclist/:id', component: piclist },
        { path: '/home/shopping', component: shopping },
        { path: '/home/shopdetail/:id', component: shopDetail ,name:'shopdetail'},
        { path: '/home/postcom/:id', component: postcom ,name:'postcom'},
        { path: '/home/photodetail/:id', component: photodetail ,name:'photodetail'}

    ],
    linkActiveClass: 'mui-active'
})

// 向外暴露 router 对象
export default router