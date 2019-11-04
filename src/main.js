// 入口文件

import Vue from 'vue'

// 启动路由（两步）
// 1.1导包
import VueRouter from 'vue-router'
// 1.2.安装路由
Vue.use(VueRouter)

// 【按需导入】导入 Mnit-UI 中的 Header 组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);

// 导入 轮播图 所需组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 App 根组件
import app from './App.vue'

// 导入样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 1.3.导入自己的路由模块
import router from './router.js';

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 1.4.挂载路由对象到 vm 实例上
})