<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:15:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-02 10:12:07
--> 
<template>
    <div>
        <input :value="value" v-bind="this.$attrs" @input="changeInput">
    </div>
</template>

<script lang="ts">
    export default {
        props:{
            value:{
                type:String,
                default:''
            }
        },
        data() {
            return {
                // value: ''
            }
        },
        methods: {
            changeInput(res) {
                this.$emit('input',res.target.value)
                this.$parent.$emit('validate')
            }
        },
    }
</script>

<style scoped>
    input{
        border: 1px  solid #ccc;
    }
</style>