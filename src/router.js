/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-12 16:31:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-12 16:51:36
 */ 
import Vue from 'vue'
import Krouter from './components/kRoute/kRouter'
import a from './pages/a.vue'
const routes = [
    {
        path:'/',
        component:() => import(a)
    }
]
Vue.use(Krouter)
const router = new Krouter({
    routes:routes
})
export default router