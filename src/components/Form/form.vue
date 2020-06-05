<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:15:52
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 11:17:53
--> 
<template>
    <div>
        <slot></slot>
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
            validate(cb){
                var task = this.$children.filter(x=>x.prop).
                           map(y=>y.validate())
                Promise.all(task).then(()=>{
                    cb(true)
                }).catch(()=>{
                    cb(false)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>