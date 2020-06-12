/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-12 16:15:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-12 17:47:46
 */ 
//1、创建Krouter类


//2、生成插件
let Vue
class Krouter {
    constructor(options){
        this.$options = options
    }
    init(){

    }
    //router-view
    routerView(){
        Vue.component('router-view',{
            render:(h)=>{
                this.$options.routes.map(x=>{
                    
                    h(x.component)
                })
            }
        })
    }
    routerLink(){
        var url = location.hash.slice(1)
        Vue.component('router-link',{
            render:(h)=>h('a',this.$solts.default,'href='+url)
                
            }
        )
    }
}
Krouter.install = function(_vue){
    Vue = _vue;
    Vue.mixin({
        data() {
            return {
                current: ''
            }
        },
        beforeCreate(){
            
            Vue.prototype.$router = this
        }
    })
}
export default Krouter