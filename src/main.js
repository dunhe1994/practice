/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:08:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-02 09:41:01
 */ 
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
}).$mount('#app')
