<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:08:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-29 17:26:29
--> 
<template>
  <div class="hello">
    <Form :rule='rules'>
      <FormItem v-model="userName">
        <FormInput/>
      </FormItem>
      <FormItem v-model="pwd">
        <FormInput/>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Form from '../components/Form/form'
import FormInput from '../components/Form/formInput'
import FormItem from '../components/Form/formItem'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      userName: '',
      pwd:''
    }
  },
  components:{
    Form
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
