import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShoppingcartContainer from './components/tabbar/ShoppingcartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

// 3.创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' }, // 重定向
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shoppingcart', component: ShoppingcartContainer },
        { path: '/search', component: SearchContainer }
    ],
    linkActiveClass: 'mui-active'
})

// 向外暴露 router 对象
export default router