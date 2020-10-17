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
        v-model="username" state="warning"></mt-field>
       <mt-field type="text"
       label="密码"
       placeholder="请输入密码"
       :attr="{maxlength:20,autocomplete:'off'}"
       v-model="password" state="success"></mt-field>
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
      v-model="conpassword" state="error"
      ></mt-field>
       <mt-button type="primary" size="large" @click="giao">免费注册</mt-button>
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
//     data(){
//         return {
//         username:'',
//         password:'',
// conpassword:''
//         }
//     },
//     methods:{
//         giao(){
//      let usernameRegExp=/^[0-9a-zA-Z_\.]{6,20}$/;
//      if(usernameRegExp.test(this.username)){
//          console.log('用户名对了');
//      }else{
//         //  console.log('用户名非法');
//         //  this.$toast("请输入信息");
//         this.$toast({
//             message:"请填写信息",
//             position:"top",
//             duration:"3000"
//         })
//      }
//         }
//     },
    data(){
        return{
            username:'',
            password:'',
            conpassword:''
        }
    },
    methods:{
        giao(){
            let usernameRegExp=/^[0-9a-zA-Z_\.]$/;
            if(usernameRegExp.test(this.password)){
                console.log('对了');
            }else{
                this.$toast({
                    message:"请填写信息",
                    position:"bottom",
                    duration:"2000"
                })
            }
        }
    }
}
</script>