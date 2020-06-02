<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:15:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-02 15:24:55
--> 
<template>
    <div>
        <slot></slot>
        <div>{{errorMsg}}</div>
    </div>
</template>

<script>
   import schema from 'async-validator'
    export default {
        components:{
        },
        props:['prop','model'],
        inject:['form'],
        mounted(){
            this.$on('validate',()=>{this.validate()})
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
                var value = this.form.model[this.prop]
                this.errorMsg = ''
                var des = {
                    [this.prop]:rule
                }
                var validator  = new schema(des)
                return validator.validate({[this.prop]:value},(err)=>{
                    if(err){
                        this.errorMsg = err[0].message
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>