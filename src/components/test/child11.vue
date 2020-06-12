<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-01 10:55:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 17:19:00
--> 
<template>
<div>
    <div @click="$bus.$emit('send','brother')">
        okokokok
    </div>
    <div @click="changeKey" class="border">
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
import modal from './modal'
    export default {
        methods: {
            changeKey() {
                this.$parent.changeBro1('app')
                var com = this.$create(modal,{
                    title:'测试测试',
                    message:'ahahaah',
                    duration:2000
                })
                com.show()
            }
        },
    }
</script>

<style lang="scss" scoped>
.border{
    border: 1px solid #ddd;
}
</style>