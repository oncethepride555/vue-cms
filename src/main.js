// 入口文件

import Vue from 'vue'

// 启动路由（两步）
// 1.1导包
import VueRouter from 'vue-router'
// 1.2.安装路由
Vue.use(VueRouter)

// // 【按需导入】 mint-ui 中的组件
// import { Header,Swipe, SwipeItem,button,Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(button.name, button);
// Vue.use(Lazyload);

// 完整引入 mint-ui 组件
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 导入 App 根组件
import App from './App.vue'

// 导入样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 1.3.导入自己的路由模块
import router from './router.js';

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// 全局配置emulateJSON，设置提交的内容类型为 普通表单数据格式
Vue.http.options.emulateJSON = true;

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入 vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// main.js 是一开始就加载的
// 从 localStorage 中取得 cart 字符串，并转为数组，如果 localStorage 中没有，则让cart 为一个空数组
var cart = JSON.parse(localStorage.getItem('cart') || '[]');

const store = new Vuex.Store({
    state: {
        cart: cart // 购物车数组，放每一次加入购物车的商品信息对象
    },
    mutations: {
        addToCart(state, goodsInfo) {
            // 默认 购物车中没有即将要加入的商品
            var flag = false;
            // 购物车中已经有相同的商品
            state.cart.some(item => {
                if (item.id == goodsInfo.id) {
                    item.count += parseInt(goodsInfo.count)
                    flag = true
                    return true
                }
            })
            // 购物车中没有即将要加入的商品
            if (!flag) {
                state.cart.push(goodsInfo)
            }
            // console.log(state.cart)
            // 将 cart 数组以字符串的形式存放到 localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        updateCart(state, goodsInfo) {
            state.cart.some(item => {
                if (item.id == goodsInfo.id) {
                    item.count = goodsInfo.num
                    return;
                }
            });
            // 将 cart 数组以字符串的形式存放到 localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeCart(state, id) {
            state.cart.some((item, i) => {
                if (item.id == id) {
                    state.cart.splice(i, 1)
                }
            })
            // 将 cart 数组以字符串的形式存放到 localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        selectedChange(state, obj) {
            state.cart.some(item => {
                if (item.id == obj.id) {
                    item.isSelected = obj.isSelected;
                }
            })
            // 将 cart 数组以字符串的形式存放到 localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    getters: {
        // 计算加入购物车的商品总数量
        getCount(state) {
            var c = 0;
            state.cart.forEach(item => {
                c += item.count;
            })
            return c;
        },
        // 购物车中选中的商品数量
        getSelectNum(state) {
            var n = 0;
            state.cart.forEach(item => {
                if (item.isSelected == true) {
                    n++;
                }
            })
            return n;
        },
        // 计算选中商品的总价
        getAllPrice(state) {
            var allPrice = 0;
            state.cart.forEach(item => {
                if (item.isSelected) {
                    allPrice += item.count * item.price;
                }
            })
            return allPrice;
        }
    }
})

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router, // 1.4.挂载路由对象到 vm 实例上
    store
})