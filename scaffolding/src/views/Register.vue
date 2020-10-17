<template>
    <div>
   <mt-header title="giao">
  <router-link to="/" slot="left">
   <mt-button icon="back"></mt-button>
       </router-link>
       <router-link to="/login" slot="right" class="shortcut">登录</router-link>
   </mt-header>
   <div>
       <mt-field type="text"
       label="用户名"
       placeholder="请输入用户名"
       :attr="{maxlength:15}"
        v-model="username" 
         :state="usernameState"
        @blur.native.capture="checkUsername"></mt-field>
       <mt-field type="text"
       label="密码"
       placeholder="请输入密码"
       :attr="{maxlength:20,autocomplete:'off'}"
       v-model="password" 
       :state="passwordState"
       @blur.native.capture="checkPassword"></mt-field>
       <!-- <mt-field type="text"
          label="密码"
          placeholder="请在输入密码"
          :attr="{maxlength:20,autocomplete:'off'}"
      v-model="conpassword"  state="error"></mt-field> -->
      <mt-field
      type="text"
      label="密码"
      placeholder="请再输入密码"
      :attr="{maxlength:10,autocomplete:'off'}"
      v-model="conpassword" 
      :state="conpasswordState"
      @blur.native.capture="checkConpassword"></mt-field>
       <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>
   </div>
    </div>
</template>
<style>
.shortcut{
    text-decoration:none;
}
</style>
<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            conpassword:'',
            usernameState:'',
            passwordState:'',
            conpasswordState:''
        }
    },
    methods:{
        checkUsername(){
            let usernameRegExp=/^[0-9a-zA-Z_]{6,20}$/;
            if(usernameRegExp.test(this.username)){
                this.usernameState='success';
                return true;
            }else{
               this.usernameState='error'
               this.$toast({
                message:"用户名为必填项",
                position:"top",
                duration:"2000"
            });  
            return false;
                }
            },
         //校验密码
    checkPassword(){
      //密码的正则表达式
      let passwordRegExp = /^[0-9A-Za-z]{8,20}$/;
      if(passwordRegExp.test(this.password)){
          this.passwordState='success';
        return true;
      } else {
          this.passwordState='error';
        this.$toast({
          message:"密码必须为字母、数字的组合体",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
     //校验确认密码
    checkConpassword(){
      if(this.password != this.conpassword){
        this.$toast({
          message:"两次密码不一致",
          position:"top",
          duration:"2000"
        });
        return false;
      } else {
        return true;
      }
    },
    handle(){
        if(this.checkUsername() && this.checkPassword() && this.checkConpassword){
            console.log('提供到web服务器');
        }
    }
    }
}
</script>