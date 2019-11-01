import Vue from 'vue'
// 按需导入
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);
// 导入 App 根组件
import app from './App.vue'

import './lib/mui/css/mui.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})