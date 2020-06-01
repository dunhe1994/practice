<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:15:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-01 17:04:46
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
            validate(){ 
               var rule = this.form.rules[this.prop]
               var mode = this.$children[0].value
                // mode = this.form.model[this.prop]
               this.errorMsg = ''
               console.log(mode,this.$children[0])
               if(rule.reg.test(this.$children[0].value)){
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