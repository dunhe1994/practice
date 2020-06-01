<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:15:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-01 17:21:40
--> 
<template>
    <div>
        <slot></slot>
        <div>{{errorMsg}}</div>
    </div>
</template>

<script>
   
    export default {
        components:{
        },
        props:['prop'],
        inject:['form'],
        mounted(){
            this.$on('validate',(res)=>{this.validate(res)})
            // this.$on('validate',()=>{this.validate()})
        },
        data() {
            return {
                errorMsg: ''
            }
        },
        methods: {
            validate(res){ 
               var rule = this.form.rules[this.prop]
               var mode = res
                // mode = this.form.model[this.prop]
               this.errorMsg = ''
               if(rule.reg.test(mode)){
                  this.errorMsg = rule.msg
                  return false;
               }
               return true
            }
        },
    }
</script>

<style scoped>

</style>