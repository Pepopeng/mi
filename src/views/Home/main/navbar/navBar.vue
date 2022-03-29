<template>
<div class="navBar">
  <a href="" class="logo"></a>
  <div class="search" @mouseenter="searchEnter" @mouseleave="searchLeave">
    <form action="https://www.mi.com/search" name="myform" method="get" @submit.prevent="submit" ref="form">
      <input type="text" name="keyword" class="inputText"  @focusin="borderColor=2" @focusout="focusOut"
             :class="{color1:borderColor==1,color2:borderColor==2}"
             :placeholder="list[listIndex][1]"
              autocomplete="off">
      <input type="submit" class="submit" value="&#xf52a;" :class="{color1:borderColor==1,color2:borderColor==2}">
    </form>
    <div class="list" v-if="borderColor==2">
      <ul>
        <li v-for="(item,key) in list" :key="key"><a :href="item[0]">{{item[1]}}</a></li>
      </ul>
    </div>
  </div>
  <div class="nav" @mouseleave="this.$emit('navIndex','')">
    <a href="" @mouseenter="this.$emit('navIndex','xiaomi')">Xiaomi手机</a>
    <a href="" @mouseenter="this.$emit('navIndex','redmi')">Redmi 红米</a>
    <a href="" @mouseenter="this.$emit('navIndex','Tv')">电视</a>
    <a href="" @mouseenter="this.$emit('navIndex','notebook')">笔记本</a>
    <a href="" @mouseenter="this.$emit('navIndex','pad')">平板</a>
    <a href="" @mouseenter="this.$emit('navIndex','household')">家电</a>
    <a href="" @mouseenter="this.$emit('navIndex','router')">路由器</a>
    <a href="" @mouseenter="this.$emit('navIndex','')">服务</a>
    <a href="" @mouseenter="this.$emit('navIndex','')">社区</a>

<!--    <a href="" @mouseover="actindex=1" @mouseout="actindex=0" :class="{act:actindex==1}">Xiaomi手机</a>-->
<!--    <a href="" @mouseover="actindex=2" @mouseout="actindex=0" :class="{act:actindex==2}">Redmi红米</a>-->
<!--    <a href="" @mouseover="actindex=3" @mouseout="actindex=0" :class="{act:actindex==3}">电视</a>-->
<!--    <a href="" @mouseover="actindex=4" @mouseout="actindex=0" :class="{act:actindex==4}">笔记本</a>-->
<!--    <a href="" @mouseover="actindex=5" @mouseout="actindex=0" :class="{act:actindex==5}">平板</a>-->
<!--    <a href="" @mouseover="actindex=6" @mouseout="actindex=0" :class="{act:actindex==6}">家电</a>-->
<!--    <a href="" @mouseover="actindex=7" @mouseout="actindex=0" :class="{act:actindex==7}">路由器</a>-->
<!--    <a href="" @mouseover="actindex=8" @mouseout="actindex=0" :class="{act:actindex==8}">服务</a>-->
<!--    <a href="" @mouseover="actindex=9" @mouseout="actindex=0" :class="{act:actindex==9}">社区</a>-->
  </div>
</div>
</template>

<script>
export default {
  name: "navBar",
  data(){
    return{
      actindex:0,
      borderColor:0,
      list:[
          ['https://www.mi.com/search?keyword=%E5%85%A8%E9%83%A8%E5%95%86%E5%93%81','全部商品'],
        ['https://www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B9%B3%E6%9D%BF5','小米平板5'],
        ['https://www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA','小米手机'],
        ['https://www.mi.com/search?keyword=%E9%99%A4%E6%B9%BF%E6%9C%BA','除湿机'] ,
        ['https://www.mi.com/search?keyword=%E7%A9%BA%E8%B0%83','空调'],
        ['https://www.mi.com/search?keyword=%E7%BA%A2%E7%B1%B3','红米'],
        ['https://www.mi.com/search?keyword=%E6%B4%97%E8%A1%A3%E6%9C%BA','洗衣机'],
        ['https://www.mi.com/search?keyword=%E7%94%B5%E8%A7%86','电视']
      ],
      listIndex:1
    }
  },
  methods:{
    searchLeave(){
      if(this.borderColor==2) return
      else this.borderColor=0
    },
    searchEnter(){
      if(this.borderColor==2) return
      else this.borderColor=1
    },
    focusOut(){
      window.setTimeout(()=>{
        this.borderColor=0
      },200)
    },
    submit(){
      let formData = document.myform
      console.log(formData.keyword.value)
       formData.keyword.value=formData.keyword.value?formData.keyword.value:this.list[this.listIndex][1]
       formData.submit()
    }
  },
  mounted() {
    let that =this
    this.timeId=window.setInterval(()=>{
      if(that.listIndex==7) that.listIndex=1
      else that.listIndex++
    },3000)
  }

}
</script>

<style scoped>
@font-face{
  font-family: "bootstrap-icons";
  src: url("~@/assets/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3") format("woff2"),
  url("~@/assets/fonts/bootstrap-icons.woff?524846017b983fc8ded9325d94ed40f3") format("woff");
}
.navBar{
  height: 100px;
  padding: 0;
  margin: 0 142px;
  position: relative;
  font-size: 16px;
  background-color: white;
}
.logo{
  position: relative;
  float: left;
  width: 56px;
  height: 56px;
  z-index: 50;
  top: 22px;
}
.logo::before{
  content: '';
  background-image: url("~@/assets/logo-mi2.png");
  background-size: 56px 56px;
  width: 56px;
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
}
.nav{
  float: right;
  display: inline-block;
  position: relative;
  height: 100px;
  width: 600px;
  margin: auto 100px;
}
.nav a{
  display: inline-block;
  text-decoration: none;
  height: 100%;
  padding: 0 10px;
  line-height: 100px;
  color: #111111;
}
.nav a:hover{
  color:#ff7f00;
}

.search{
  position: relative;
  float: right;
  width: 296px;
  height: 48px;
  top: 26px;
}
.search form{
  height: 100%;
}
.inputText{
  z-index: 1;
  width: 223px;
  height: 48px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 48px;
  position: absolute;
  top: 0;
  right: 51px;
  border: 1px solid #e0e0e0;
  transition: all .2s;
  outline: none;
}

.submit{
  position: absolute;
  right: 0;
  z-index: 2;
  width: 52px;
  height: 50px;
  font-size: 16px;
  line-height: 24px;
  background: #fff;
  color: #616161;
  font-family: bootstrap-icons;
  font-weight: 1000;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  transition: all .2s ease;
}
.submit:hover{
  background-color: #ff6700;
  color: white;
  border: none;
}
.color1{
  border: 1px solid #999999;
}
.color2{
  border: 1px solid #ff6700;
}
.list{
  height: 250px;
  width: 245px;
  position: absolute;
  left: 0;
  top: 48px;
  background-color: white;
  z-index: 300;
  border: 1px solid #ff6700;
}

.list a{
  text-decoration: none;
  color: #444444;
  font-size: 12px;
  width: 100%;
  height: 100%;
  display: block;
  padding-left: 20px;
  line-height: 31px;
}
.list li{
  position: relative;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  display: block;
  text-align: left;
  height: calc(100% / 8);
}
.list li:hover{
  background-color: #eeeeee;
}
.list ul{
  list-style: none;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>