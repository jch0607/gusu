<template>
  <div>
    <div class="div_first">
    <h3>发现</h3>
    <router-link to="javascript:;">全部城市</router-link>
    <img src="../assets/gs_icon6.png" alt="">
    </div>
    <div class="swipe">
      <mt-swipe 
      :showIndicators="true"
      :auto="2000"
      :spend="2000"
      :continuous="true"
      >
        <mt-swipe-item v-for="(item,index) of category" :key="index">{{item.imgs}}</mt-swipe-item>
      </mt-swipe>
      <!-- <mt-swipe-item>
        <img src="../assets/lbimg/gs_lb1.jpg" alt="">
      </mt-swipe-item>
       <mt-swipe-item>
        <img src="../assets/lbimg/gs_lb2.jpg" alt="">
      </mt-swipe-item>
       <mt-swipe-item>
        <img src="../assets/lbimg/gs_lb3.jpg" alt="">
      </mt-swipe-item>
       <mt-swipe-item>
        <img src="../assets/lbimg/gs_lb4.jpg" alt="">
      </mt-swipe-item>
      </mt-swipe> -->
    </div>
  </div>
</template>
<style spoced>
.div_first{
  display: flex;
}
.div_first>a{
  color: rgba(50, 55, 70, 0.8);
  margin-top: 7px;
  font-size: 14px;
  padding-left: 4px;
}
.div_first>h3{
  font-size: 24px;
}
.div_first>img{
  width: 2%;
  height: 4%;
  margin-top: 15px;
  margin-left: 2px;
}
.swipe{
  width: 400px;
  height: 150px;
}
.swipe img{
  width: 100%;
  height: 100%;
}
</style>

<script>

export default {
  data(){
    return{
      category:[],
    }
  },
  methods:{

  },
  mounted(){
    this.axios.get('/category').then(result=>{
      let data = result.data.results;
      console.log(data);
      data.forEach(item=>{
        if(item.imgs!=null){
          item.imgs=require('../assets/lbimg/'+item.imgs);
          console.log(item)
          console.log(item.imgs)
        }
        this.category.push(item);
      })
    })
  }
}
</script>
