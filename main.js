import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.prototype.$store = store

Vue.config.productionTip = false

// 引入全局组件
import divider from "@/components/common/divider.vue"
Vue.component('divider',divider)

// 引入全局加载动画
import loading from "@/components/common/loading.vue"
Vue.component('loading',loading)

import loadingPlus from "@/common/mixin/loading-plus.vue"
Vue.component('loading-plus',loadingPlus)

// 引入request库
import $H from '@/common/lib/request.js';
Vue.prototype.$H = $H

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
