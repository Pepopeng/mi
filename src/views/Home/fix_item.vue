<template>
<a :href="href" class="fix_item" @mouseenter="this.act=true" @mouseleave="this.act=false">
    <img :src="img" alt="" v-if="act" class="item_img">
    <img :src="img_sad" alt="" v-else class="item_img">
    <div>{{text}}</div>
</a>
</template>

<script>
export default {
  name: "fix_item",
  props:{
    img_sad:String,
    img:String,
    text:String,
    href:String
  },
  data(){
    return{
      act:false
    }
  }
}
</script>

<style scoped>
.fix_item{
  padding-top: 15px;
  display: block;
  height: 75px;
  font-size: 14px;
  margin:0;
  color: gray;
  text-decoration: none;
  cursor: default;
  border: 1px solid #f1f1f1;
  border-bottom: none;
}
.fix_item:hover{
  color: #ff7f00;
}
.item_img{
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto 5px;
}
</style>