<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-01 10:55:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 11:45:24
--> 
<template>
<div>
    <div @click="$bus.$emit('send','brother')">
        okokokok
    </div>
    <div @click="changeKey">
        parent send
    </div>
</div>
    
</template>
<style lang="scss" scoped>
    .border{
        border: 1px solid #ccc;
    }
</style>
<script>
import child1 from './child1'
    export default {
        methods: {
            changeKey() {
                this.$parent.changeBro1('app')
                this.$create(child1,{})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>