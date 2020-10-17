<template>
<div>
    <p class="image"><img src="../../gsimage/xhao.png"></p>
    <p class="register">注册预定返积分</p>
    <h1 class="h1">登录古宿</h1>
    <mt-field type="text"
    label="用户名"
     placeholder="手机号/邮箱/用户名"
     :attr="{maxlength:15}"
     v-model="username"
     :state="usernameState"
     @blur.native.capture="checkUsername"
    ></mt-field>
    <hr class="password">
    <mt-field type="text"
     label="密码"
     placeholder="请输入密码"
     :attr="{maxlength:15}"
     v-model="password"
     :state="passwordState"
     @blur.native.capture="checkPassword"
    ></mt-field>
    <hr class="password">
    <mt-button type="default" class="button" @click="handle">登录</mt-button>
    <p class="code">手机验证码登录</p>
    <p class="coded">忘记密码?</p>
    <p class="icon">第三方登录</p>
    <div class="base">
        <img src="../../gsimage/weixin.png">
        <img src="../../gsimage/qq-copy.png">
        <img src="../../gsimage/weibo1.png">
    </div>
    </div>
</template>
<style>
.image{
margin-left:20px;
margin-top:20px;
}
.register{
    margin-left:250px;
    margin-top:-15px;
}
.h1{
    font-size:30px;
    margin-top:50px;
    margin-left:20px;
    margin-bottom:30px;
}
.password{
 width:350px;
}
.button{
    background-color: rgba(0, 0, 0, 0.2) !important;
    margin-top:50px;
    margin-left:38px;
    width:300px;
}
.code{
    margin-left:40px;
    margin-top:20px;
}
.coded{
    margin-left:265px;
    margin-top:-15px;
}
.icon{
    font-size:10px;
    margin-top:150px;
    margin-left:160px;
}
.base{
    width:180px;
    margin-left:100px;
    display: flex;
    justify-content:space-between;
    margin-top:13px;
}
</style>
<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            usernameState:'',
            passwordState:''
        }
    },
    methods:{
        checkUsername(){
            let usernameRegExp=/^[0-9a-zA-Z_]{6,20}$/;
            if(usernameRegExp.test(this.username)){
                this.usernameState='success';
                return true;
            }else{
                this.usernameState="error"
                this.$toast({
                    message:"请填写用户名",
                    position:"top",
                    duration:"2000"
                });
                return false;
            }
        },
        checkPassword(){
            let passwordRegExp=/^[0-9a-zA-Z_]{6,20}$/;
            if(passwordRegExp.test(this.password)){
                this.passwordState='success';
                return true
            }else{
                this.passwordState='error';
                this.$toast({
                    message:"密码必须为字母、数字的组合体",
                    position:"top",
                    duration:"2000"
                });
                return false
            }
        },
        handle(){
            if(this.checkUsername() && this.checkPassword()){
                alert('登录成功')
            }
        }
    }
}
</script>