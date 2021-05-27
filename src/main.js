import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import bmViewFrom from 'bm-view-form'
Vue.use(bmViewFrom)

window.loadingClues = '加载中' // 全局loading提示语

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
