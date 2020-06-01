<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:15:52
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-01 17:23:44
--> 
<template>
    <div>
        <slot></slot>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
    export default {
        props:['rules','model'],
        mounted(){
            console.log(this.rules,888)
        },
        provide(){
            return {form : this}
        },
        methods: {
            submit(){
                var task = this.$children.find(x=>!x.validate(x.$children[0].value))
                if(task){
                    this.$emit('submit',false)
                }else{
                    this.$emit('submit',true)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>