<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-02 11:34:39
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 17:00:32
--> 
<template>
    <div>
        <child v-bind.sync="doc" v-model="pwd"/>
        <div>{{doc.title}}</div>
        <div>{{doc.name}}</div>
        <div>{{pwd}}</div>
    </div>
</template>

<script>
    import child from './child1'
    export default {
        components: {
            child,
        },
        data() {
            return {
                doc: {
                    title:'21',
                    name:false
                },
                pwd:''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>