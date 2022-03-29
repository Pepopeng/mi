<template>
<div class="topBar">
  <div class="left">
    <a href="" @mouseover="actindex=4" @mouseout="actindex=0" :class="{act:actindex==4}">小米商城</a>
    <a href="https://home.miui.com/" @mouseover="actindex=5" @mouseout="actindex=0" :class="{act:actindex==5}">MIUI</a>
    <a href="" @mouseover="actindex=6" @mouseout="actindex=0" :class="{act:actindex==6}">loT</a>
    <a href="" @mouseover="actindex=7" @mouseout="actindex=0" :class="{act:actindex==7}">云服务</a>
    <a href="" @mouseover="actindex=8" @mouseout="actindex=0" :class="{act:actindex==8}">天星数科</a>
    <a href="" @mouseover="actindex=9" @mouseout="actindex=0" :class="{act:actindex==9}">有品</a>
    <a href="" @mouseover="actindex=10" @mouseout="actindex=0" :class="{act:actindex==10}">小爱开放平台</a>
    <a href="" @mouseover="actindex=11" @mouseout="actindex=0" :class="{act:actindex==11}">企业团购</a>
    <a href="" @mouseover="actindex=12" @mouseout="actindex=0" :class="{act:actindex==12}">资质证照</a>
    <a href="" @mouseover="actindex=13" @mouseout="actindex=0" :class="{act:actindex==13}">协议规则</a>
    <a href="" @mouseover="actindex=14" @mouseout="actindex=0" :class="{act:actindex==14}">下载app</a>
    <a href="" @mouseover="actindex=15" @mouseout="actindex=0" :class="{act:actindex==15}">Select Location</a>
  </div>
    <a href="" class="cart" :class="{cartAct:dropshow==1}" @mouseenter="dropshow=1" @mouseleave="dropshow=0">
      <span>购物车（0）</span>
    </a>
  <div class="account" v-if="!this.acc">
    <a href="" @mouseover="actindex=1" @mouseout="actindex=0" :class="{act:actindex==1}" @click="this.$router.push('/login')">登录</a>
    <a href="" @mouseover="actindex=2" @mouseout="actindex=0" :class="{act:actindex==2}" @click="this.$router.push('/login')">注册</a>
    <a href="" @mouseover="actindex=3" @mouseout="actindex=0" :class="{act:actindex==3}">消息通知</a>
  </div>
  <div v-else class="account1">欢迎您！{{this.acc}}  先生/女士&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span class="exit" @click="exit">退出</span>
  </div>
  <transition name="pepo">
    <div class="dropDown" v-if="dropshow==1">
      <span>购物车中还没有商品，赶紧选购吧!</span>
    </div>
  </transition>

</div>
</template>

<script>
export default {
  name: "topBar",
  data(){
    return{
      actindex:0,
      dropshow:0,
      acc:''
    }
  },
  created() {
      let name = "account=";
      let ca = document.cookie.split(';');
      for(let i=0; i<ca.length; i++)
      {
        let c = ca[i].trim();
        if (c.indexOf(name)==0) {
          this.acc=c.substring(name.length,c.length);
          return
        }
      }
      this.acc="";

  },
  methods:{
    exit(){
      let keys = document.cookie.match(/[^ =;]+(?==)/g);
      if (keys) {
        for (let i = keys.length; i--;)
          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
      }
      location.reload()
    }
  }
}
</script>

<style scoped>
.topBar{
  position: relative;
  height: 40px;
  background-color: #333333;
  padding: 0px 142px;
  color: #999999;
  font-size: 12px;
  z-index: 2;
}

.left{
  height: 40px;
  float: left;
}
 a{
  margin: 14px 0;
  display: inline-block;
  color: #999999;
  font-size: 12px;
  padding: 0 8px;
  line-height: 12px;
  border-right: 2px solid #555555;
  text-decoration: none;
  float: left;
}
a:last-child{
  border:0;
}

.account{
  position: relative;
  float: right;
  background-color: #333333;
  padding-right: 10px;
  padding-left: 100px;
  z-index: 10;
}
.account1{
  position: relative;
  float: right;
  background-color: #333333;
  padding-right: 30px;
  padding-left: 20px;
  z-index: 10;
  line-height: 40px;
  text-align: left;
}

.cart{
  margin: 0;
  display: block;
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px;
  padding-right: 13px;
  padding-left: 39px;
  background-color: #444444;
  z-index: 10;
  border: none;
}
.cart span{
  height: 100%;
  width:15px;
}

.cart span::before{
  content: '';
  position: absolute;
  background-image: url("~@/assets/cart-n.svg");
  background-size: 18px 18px;
  width: 18px;
  height: 18px;
  left: 16px;
  top:calc((40px - 18px)/2);
}
.cartAct{
  color: #ff7f00;
  background-color: white;
}
.cartAct span::before{
  background-image: url("~@/assets/cart.svg");
}

.act{
  color: white;
}

.dropDown span{
  line-height: 80px;
  color: black;
}

.dropDown{
  position: absolute;
  top: 40px;
  right: 142px;
  width: 300px;
  height: 80px;
  box-shadow: 0 0 5px #888888;
  z-index: 1;
  background-color: white;
}

.pepo-leave-to{
  top:-40px;
}
.pepo-enter-from{
  top:-40px;
}
.pepo-enter-active,.pepo-leave-active{
  transition: top 0.5s ease;
}
.exit{
  cursor: pointer;
  position: relative;
  top: 1px;
}
.exit:hover{
  color: #ff6700;
}



</style>