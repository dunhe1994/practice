<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-01 10:41:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-01 11:05:20
--> 
<template>
    <div>
        <child1 />
        <child11 />
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
        provide(){
            return {
                'words':'testtest'
            }
        }
    })
</script>

<style scoped>

</style>