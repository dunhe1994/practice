/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-05 11:24:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 16:45:56
 */ 
//创建组件
import Vue from 'vue'
function create (comp,props){
    const vm = new Vue({
        render(h){
           return h(comp,{props})
        }
    }).$mount()
    const element = vm.$el
    document.body.appendChild(element)
    var component = vm.$children[0]
    component.remove = function(){
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return component
}
export default create
