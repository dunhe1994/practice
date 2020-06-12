<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:08:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-12 16:55:59
--> 
<template>
  <div id="app">
    <Form />
    <Sync/>
    <Test/>
    <Recursion/>
    <router-view />
    <router-link to='a'/>
  </div>
</template>

<script>
import Form from './components/Form/index'
import Test from './components/test/test.vue'
import Sync from './components/sync/child'
import Recursion from './components/recursion/index';
export default {
  name: 'App',
  components: {
    Form,
    Test,
    Sync,
    Recursion
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
