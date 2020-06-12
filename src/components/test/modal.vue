<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-05 11:59:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 16:38:00
--> 
<template>
    <div v-if="isShow">
       {{title}}
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:''
            },
            message:{
                type:String,
                default:''
            },
            duration:{
                type:Number,
                default:1000
            }
        },
        data() {
            return {
                isShow: false
            }
        },
        mounted(){
            console.log(this.title,88899)
        },
        methods: {
            show() {
                this.isShow=true
                setTimeout(this.hide,this.duration)
            },
            hide(){
                this.remove()
                this.isShow=false
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
