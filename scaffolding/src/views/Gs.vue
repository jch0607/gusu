<template>
    <div class="header">
    <mt-header title="设置" class="head">
  <router-link to="" slot="left">
   <mt-button icon="back"></mt-button>
 </router-link>
   </mt-header>
   <div class="auuount">
   <mt-button type="default" size="large" class="all">账号与安全<span>></span>
     </mt-button>
   </div>
   <div >
     <mt-button type="default" size="large" class="all">关于民宿<span>></span>
     </mt-button>
     <mt-button type="default" size="large"  class="all">推荐给朋友<span>></span>
     </mt-button>
     <mt-button type="default" size="large"  class="all">意见反馈<span>></span>
     </mt-button>
       <mt-button type="default" size="large"  class="all">APP版本</mt-button>
       </div>
       <div class="app">
       <mt-button type="default" size="large" class="all">房屋编号直达<span>></span></mt-button>
       <mt-button type="default" size="large" class="all">给民宿好评<span>></span></mt-button>
       <mt-button type="default" size="large" class="all">放心消费声明<span>></span></mt-button>
       </div>
        <div class="clear">
       <mt-button type="default" size="large" class="all">清除缓存<span>></span></mt-button>
        </div>
         <div class="bottom">
       <mt-button type="default" size="large" class="botto">退出登录</mt-button>
        </div>
       </div>
</template>
<style>
.header{
      background:#fafafa !important;

}
.auuount{
    padding-top: 10px !important;
    padding-bottom: 8px !important;
}
.head{
    background-color: white !important;
    font-size: 20px !important;
    color:black !important;
}
.all{
    text-align: left !important;
       background-color: white !important;
}
.all span{
    float:right !important;
}
.clear,.app{
    padding-top:10px;
}
.bottom{
      padding-top:25px;
    text-align: center;
}
.botto{
    background-color: white !important;
}
</style>
<script>
export default {
    data(){
        return{
         
        }
    },
    methods:{
        giao(){
           
        }
    },
    computed:{


    },
    mounted(){

    }
}
</script>