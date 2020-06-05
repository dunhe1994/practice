/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:08:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 11:39:36
 */ 
import Vue from 'vue'
import App from './App.vue'
import create from './utils/create'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$create = create
new Vue({
  render: h => h(App),
}).$mount('#app')
