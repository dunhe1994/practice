<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-02 11:38:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-02 14:39:45
--> 
<template>
    <div>
        <input :value="title" @input="changeIN"/>
        <input type='checkbox' :checked='name' @change="changeCH"/>
        <input :value="pwd" @input="changeP">
        <button @click="changeP">点击</button>
    </div>
</template>

<script>
    export default {
         props:['title','name','pwd'],
         mounted(){
             console.log(this.title)
         },
         methods: {
             changeIN(e) {
                 console.log(777)
                 this.$emit('update:title',e.target.value)
             },
             changeCH(e){
                 console.log(e.target.checked,999999)
                 this.$emit('update:name',e.target.checked)
             },
             changeP(e){
                 console.log(e.target.value)
                 this.$emit('input',e.target.value)
             }
         },
    }
</script>

<style lang="scss" scoped>

</style>