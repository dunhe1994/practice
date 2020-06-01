<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-01 10:42:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-01 11:04:11
--> 
<template>
    <div>
        <child2/>
    </div>
</template>

<script>
import child2 from './child2'
    export default {
        components:{
            child2
        },
        created(){
            this.$bus.$on('send',(res)=>{
                console.log(res,9999)
            })
        }
        // inject:['words'],
        // data() {
        //     return {
        //         send: this.words
        //     }
        // },
    }
</script>

<style lang="scss" scoped>

</style>