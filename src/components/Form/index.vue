<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-29 17:08:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-05 11:17:22
--> 
<template>
  <div class="hello">
    <Form :rules='rules' :model='ruleForm' ref="ruleForm">
      <FormItem :prop='"username"' name='username'>
        <label>姓名</label>
        <FormInput type='text' v-model="ruleForm.username"/>
      </FormItem>
      <FormItem :prop='"pwd"' name='pwd'>
        <label>密码</label>
        <FormInput type='password' v-model="ruleForm.pwd"/>
      </FormItem>
      <FormItem>
        <button @click='login'>提交</button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Form from './form'
import FormItem from './formItem'
import FormInput from './formInput'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
        ruleForm:{
          username:'',
          pwd:''
        }
      ,
      rules:{
        username:[{
          type:"string",
          required:true
        }],
        pwd:[{
          type:"string",
          required:true
        }]
      }
    }
  },
  methods: {
    validate(){

    },
    login() {
      console.log(this.$refs)
      this.$refs.ruleForm.validate(x=>{
          if(x){
              alert('提交')
          }else{
              alert('请填写完整')
          }
      })
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
