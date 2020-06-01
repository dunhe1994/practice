<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:08:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-01 16:50:51
--> 
<template>
  <div class="hello">
    <Form :rules='rules' @submit='submit' :model='model'>
      <FormItem :prop='"username"' name='username'>
        <label>姓名</label>
        <FormInput type='text' v-model="username"/>
      </FormItem>
      <FormItem :prop='"pwd"' name='pwd'>
        <label>密码</label>
        <FormInput type='password' v-model="pwd"/>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Form from '../components/Form/form'
import FormItem from '../components/Form/formItem'
import FormInput from '../components/Form/formInput'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      username: '',
      pwd:'',
      model:{
        username:'',
        pwd:''
      },
      rules:{
        username:{
          key:'username',
          msg:'姓名不能为空',
          reg:/^S*$/
        },
        pwd:{
          key:'pwd',
          msg:'密码不能为空',
          reg:/^S*$/
        }
      }
    }
  },
  methods: {
    submit(res) {
      if(!res){
         alert('请填写完整')
      }
    }
  },
  components:{
    Form,
    FormItem,
    FormInput
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
