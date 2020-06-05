<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-01 10:41:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 09:49:21
--> 
<template>
    <div>
        <child1 :child1msg='child1msg' @changeBro2='changeBro2'/>
        <child11 :child2Mmsg='child2msg' @changeBro1="changeBro1"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import child1 from './child1'
    import child11 from './child11'
    export default Vue.extend({
        components:{
            child1,
            child11
        },
        data() {
            return {
                show: '',
                child1msg:'',
                child2msg:''
            }
        },
        provide(){
            return {
                'words':'testtest'
            }
        },
        methods: {
            tellBro(res){
                this.show = res
            },
            changeBro1(){

            },
            changeBro2(res){
                this.child1msg = res;
            }
        },
    })
</script>

<style scoped>

</style>