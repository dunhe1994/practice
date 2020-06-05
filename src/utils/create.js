/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-05 11:24:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 11:57:29
 */ 
//创建组件
import Vue from 'vue'
function create (comp,porps){
    const vm = new Vue({
        render(h){
           return h(comp,{porps})
        }
    }).$mount()
    const element = vm.$el
    document.body.appendChild(element)
    var component = vm.$children[0]
    component.remove = function(){
        document.body.remove(vm.$el)
        vm.$destroy()
    }
    console.log(vm,888)
    return component
}
export default create
