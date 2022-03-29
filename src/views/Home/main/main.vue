<template>
<div class="main">
  <navbar @navIndex="navChange"></navbar>
  <transition name="hide2">
  <div class="drawContainer" v-if="res.nav_draw && drawIndex!=''" @mouseenter="this.drawHover=true" @mouseleave="drawLeave">
      <nav_draw  :data="res.nav_draw[drawIndex]"></nav_draw>
  </div>
  </transition>
  <middle :data="res.middle"></middle>
  <div class="bottom">
    <div  class="left">
      <a  class="left_item" href="https://api.jr.mi.com/activity/scene/scenePCsearch.html?from=search">
        <div class="aa">
          <img src="http://localhost/mi/Home/main/imgs/bottom/l1.png" alt="">
          <div>保障服务</div>
        </div>
      </a>
      <a class="left_item" href="https://qiye.mi.com/">
        <div class="aa">
          <img src="http://localhost/mi/Home/main/imgs/bottom/l2.png" alt="">
          <div>企业团购</div>
        </div>
      </a>
      <a class="left_item" href="https://www.mi.com/order/fcode">
        <div class="aa">
          <img src="http://localhost/mi/Home/main/imgs/bottom/l3.png" alt="">
          <div>F码通道</div>
        </div>
      </a>
      <a class="left_item" href="https://10046.mi.com/">
        <div class="aa">
          <img src="http://localhost/mi/Home/main/imgs/bottom/l4.png" alt="">
          <div>米粉卡</div>
        </div>
      </a>
      <a class="left_item" href="https://www.mi.com/a/h/16769.html">
        <div class="aa">
          <img src="http://localhost/mi/Home/main/imgs/bottom/l5.png" alt="">
          <div>以旧换新</div>
        </div>
      </a>
      <a class="left_item" href="https://recharge.10046.mi.com/">
        <div class="aa">
          <img src="http://localhost/mi/Home/main/imgs/bottom/l6.png" alt="">
          <div>话费充值</div>
        </div>
      </a>
    </div>
    <a class="right" href="https://www.mi.com/mi11ultra">
      <img src="http://localhost/mi/Home/main/imgs/bottom/r1.jpg" alt="">
    </a>
    <a class="right" href="https://www.mi.com/mixfold">
      <img src="http://localhost/mi/Home/main/imgs/bottom/r2.png" alt="">
    </a>
    <a class="right" href="https://www.mi.com/buy?product_id=2213400011">
      <img src="http://localhost/mi/Home/main/imgs/bottom/r3.jpeg" alt="">
    </a>
  </div>


</div>
</template>

<script>
import navbar from "./navbar/navBar.vue"
import request from "@/Networks/request.js"
import nav_draw from "./nav_draw/nav_draw";
import middle from "./middle/middle";

export default {
  name: "main",
  data(){
    return{
      navEnter:false,
      drawHover:false,
      drawIndex:'',
      res: Object
    }
  },
  components:{
    navbar,nav_draw,middle
  },
  created() {
    request('Home/main/index.php').then(res=>{
      this.res=res
    })
  },
  methods:{
    drawLeave(){
      this.drawHover=false;
      window.setTimeout(()=>{
        if(!this.navEnter) {this.drawIndex='';}
      },100)
    },
    navChange:function (val){
      if(val) {
        this.navEnter=true;
        this.drawIndex=val;
      }
      else {
        this.navEnter=false;
        window.setTimeout(()=>{
          if(this.drawHover) {return;}
          else {this.drawIndex=val;}
        },100)

      }
    }
  }
}
</script>

<style scoped>
.main{
  box-sizing: border-box;
  width: 100%;
  position: relative;
  display: block;
  background-color: white;
  height: 800px;
  z-index: 1;
}
.drawContainer{
  position: absolute;
  top: 100px;
  width: 100%;
  height: 230px;
  overflow: hidden;
  background-color: white;
  z-index: 2;
}

.hide2-leave-to,.hide2-enter-from{
  height: 0;
}
.hide2-enter-active,.hide2-leave-active{
  transition: height 0.5s ease;
}

.bottom{
  margin-top: 15px;
  position: relative;

  height: 168px;
  padding: 0 138px;
  display: flex;
  justify-content: space-between;
}

.left{
  padding-top:20px;
  margin: 0 5px ;
  width: 19.4%;
  height: 100%;
  display: inline-block;
  background-color: #444444;
  flex-shrink: 0;


}
.right{
  flex-shrink: 0;

  display: inline-block;
  height: 100%;

  margin: 0 5px;

}
.right img{
  height: 100%;
}

.left_item{
  position: relative;
  display: inline-block;
  width: 33%;
  height: 50%;
}


.left_item img{
  position: relative;
  width: 30%;
  opacity: 0.8;
}

.left_item div{
  color: white;
  font-size: 12px;
  opacity: 0.8;
}

a{
  text-decoration: none;
}

.aa:hover{
  opacity: 1;
}


</style>