<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-01 10:42:53
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-01 10:53:09
--> 
<template>
    <div>
        {{send}}
    </div>
</template>

<script>
    export default {
        inject:['words'],
        data() {
            return {
                send: this.words
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>