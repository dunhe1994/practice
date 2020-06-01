<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:08:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-01 11:12:41
--> 
<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/test/test.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
