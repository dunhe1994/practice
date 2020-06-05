<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-01 10:42:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 09:54:27
--> 
<template>
    <div>
        {{child1msg}}
        <child2/>
    </div>
</template>

<script>
import child2 from './child2'
    export default {
        components:{
            child2
        },
        props:['child1msg'],
        created(){
            this.$bus.$on('send',(res)=>{
                console.log(res,9999)
            })
            console.log(this.child1msg)
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