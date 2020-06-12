<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-05 16:50:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-11 10:02:37
--> 
<template>
    <div>
        <ul>
            <li v-for="(child,index) in recusiveData" :key="index">
                <p @click.stop="taggle">{{child.name}}</p>
                <tree-menu :recusiveData='child.children' v-show='isShow'/>
            </li>
        </ul>
    </div>
</template>
<script>
    // import Node from './modal'
    export default {
        name:'treeMenu',
        data() {
            return {
                isShow: false
            }
        },
        props:['recusiveData'],
        methods: {
            taggle() {
                this.isShow = !this.isShow
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>