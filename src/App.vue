<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:08:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-02 11:55:25
--> 
<template>
  <div id="app">
    <Form />
    <Sync/>
    <Test/>
  </div>
</template>

<script>
import Form from './components/Form/index'
import Test from './components/test/test.vue'
import Sync from './components/sync/child'
export default {
  name: 'App',
  components: {
    Form,
    Test,
    Sync
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
