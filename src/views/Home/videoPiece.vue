<template>
<div class="videoPiece" @mouseenter="this.act=true" @mouseleave="this.act=false">
  <img :src="img" alt="">
  <h3>{{text1}}</h3>
  <p v-if="text2">{{text2}}</p>
  <span class="play" :class="{act:this.act}">
  </span>
</div>
</template>

<script>
export default {
  name: "videoPiece",
  props:{
    img:String,
    text1:String,
    text2:String
  },
  data(){
    return{
      act:false
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
.videoPiece{
  position: relative;
  background-color: white;
  transition: all 0.5s;
  cursor: pointer;
  padding-bottom: 30px;
}
.play{
  position: absolute;
  left: 20px;
  top: 145px;
  width: 19px;
  height: 19px;
  color: #fff;
  background-color: rgba(0,0,0,.6);;
  transition: all .2s;
  font-size: 25px;
  line-height: 20px;
  overflow: hidden;
  border: 2px solid white;
}
.play:before{
  position: absolute;
  left: -2px;
  top: -1px;
  content: "\f233";
  font-family: bootstrap-icons;
}
.act{
  background-color: #ff6700;
  border:2px solid #ff6700;
}
.videoPiece:hover{
  box-shadow: 0 4px 8px 0 gray;
  transform: translate(0,-3px);
}
img{
  display: block;
  position: relative;
  width: 296px;
  height: 180px;
  margin: 0 0 28px;
}
h3{
  margin: 0 14px 6px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
p{
  height: 18px;
  margin: 0 14px;
  font-size: 12px;
  color: #b0b0b0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>