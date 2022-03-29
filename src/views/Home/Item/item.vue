<template>
<div class="item">
  <div class="head">
    <span class="title">{{title}}</span>
    <div v-if="vary" class="top_right">
      <span v-for="(item,key) in vary" :key="key" class="vary" @mouseenter="this.index=key" :class="{varyact:index==key}">{{item}}</span>
    </div>
    <a v-else class="top_right" :href="more">
      <span class="more">查看更多</span>
    </a>
  </div>
  <div class="pieceContainer1">
    <div class="headpiece">
      <a v-for="(item,key) in link" :key="key" :href="item" class="aaa" :class="{aaa1:link.length==1}">
        <img :src="img[key]" alt="">
      </a>
    </div>
    <div class="pieceContainer">
      <item_piece v-for="(item,key) in data[index]" :data="item" :key="key"></item_piece>
      <div v-if="this.title!='手机'" class="tail">
        <div v-if="this.isfill" class="tail0">
          <a :href="data[index][data[index].length-1]['a']">
            <div class="tail0_img"><img :src="data[index][data[index].length-1]['img']" style="{width: 80px;height: 80px;}" alt=""></div>
            <h3 class="tail0_h3">{{data[index][data[index].length-1]['text1']}}</h3>
            <p class="tail0_p">{{data[index][data[index].length-1]['price']}}</p>
          </a>

        </div>
        <div>
          <div class="more1">浏览更多<small>{{vary[index]}}</small></div>
          <div class="arrow_right"></div>
        </div>
      </div>
      <div   v-for="key in tailLength" class="fill_box" :key="key"></div>
    </div>
   </div>
</div>
</template>

<script>
import item_piece from "./item_piece";
export default {
  name: "item",
  data(){
    return{
      index:0
    }
  },
  props:{
    data:Array,
    title:String,
    vary:Array,
    more:String,
    link:Array,
    img:Array
  },
  components:{
    item_piece
  },
  computed:{
    isfill(){
      if(this.data[this.index]&&this.data[this.index].length==8){
        return true
      }
      return false
    },
    tailLength(){
      if(this.data[this.index]==undefined) {
        return 0
      }
      else {
        return Math.max(0,7-this.data[this.index].length)
      }

    }
  }
}
</script>

<style scoped>
@font-face{
  font-family: "bootstrap-icons";
  src: url("~@/assets/fonts/bootstrap-icons.woff2?524846017b983fc8ded9325d94ed40f3") format("woff2"),
  url("~@/assets/fonts/bootstrap-icons.woff?524846017b983fc8ded9325d94ed40f3") format("woff");
}
.item{
  width: 100%;
  margin: 20px 0;
}

.head{
  height: 40px;
  margin-bottom: 6px;
}
.top_right{
  display: block;
  float: right;
  height: 100%;
  text-decoration: none;
  color: black;
}
.vary{
  line-height: 40px;
  margin-left:25px;
  cursor: pointer;
}
.varyact{
  border-bottom: 2px solid #ff7f00;
  color: #ff7f00;
}
.more{
  line-height: 40px;
  height: 40px;
  position: relative;
  left: -32px;
  transition: all 0.3s;
}
.title{
  float: left;
  font-size: 22px;
  font-weight: 200;
  line-height: 40px;
}
.more:after{
  content: "\f133";
  font-family: bootstrap-icons;
  font-size: 20px;
  color: gray;
  position: absolute;
  top: -11px;
  left: 75px;
  transition: all 0.3s;
}
.more:hover:after{
  color: #ff7f00;
}
.more:hover{
  color: #ff7f00;
}
.pieceContainer{
  display: flex;
  flex-wrap: wrap;
  width: 79.7%;
  justify-content: space-between;
  align-content: space-between;
  height: 614px;
}
.headpiece{
  height: 614px;
  flex-basis: 19%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.headpiece a{
  display:block;

  transition: all 0.5s;
  position: relative;
}
.aaa{
  height: 300px;
}
.aaa1{
  height: 100%;
}
.headpiece  img{
 height: 100%;
}
.headpiece>a:hover{
  box-shadow: 0 4px 8px 0 gray;
  transform: translate(0,-3px);
}
.pieceContainer1{
  display: flex;
 justify-content: space-between;
}

.tail{
  display: flex;
  flex-basis: 24%;
  height: 300px;
  text-decoration: none;

  justify-content: space-between;
  flex-direction: column;
}
.tail>div{
  width: 100%;
  height: 143px;
  transition: all 0.5s;
  position: relative;
  background-color: white;
  cursor: pointer;
}
.tail>div:hover{
  box-shadow: 0 4px 8px 0 gray;
  transform: translate(0,-3px);
}
.arrow_right{
  position: absolute;
  right: 35px;
  top: 48px;
  width: 48px;
  height: 48px;
  color: #ff6700;
  font-size: 48px;
  line-height: 48px;
}
.arrow_right:after{
  content: "\f134";
  font-family: bootstrap-icons;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
}
.more1{
  display: block;
  margin: 48px 110px 0 35px;
  font-size: 18px;
  color: #333;
  text-align: left;
}
.more1 small{
  display: block;
  font-size: 12px;
  color: #757575;
  text-align: left;
}
.tail0_img{
  position: absolute;
  right: 20px;
  top: 32px;
  width: 80px;
  height: 80px;
}
.tail0_h3{
  margin: -10px 110px 5px 30px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  text-align: left;
}
.tail0_p{
  margin: 0 110px 0 30px;
  font-size: 14px;
  color: #ff6700;
  text-align: left;
}
a{
  text-decoration: none;
}
.tail0{
  padding-top: 50px;
}
.fill_box{
  display: block;
  flex-basis: 24%;
  height: 300px;
}
</style>