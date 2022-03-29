<template>
<a class="navdraw_item" :href="data.a">
  <div class="img">
    <img :src="data.img" alt="">
  </div>
  <span class="text">{{data.text}}</span>
  <span class="price">{{data.price}}</span>
</a>
</template>

<script>
export default {
  name: "navdraw_item",
  props:{
    data:{}
  }
}
</script>

<style scoped>
.navdraw_item{
  padding-top: 20px;
  display: inline-block;
  position: relative;
  float: left;
  margin: 20px 0;
  width: 16%;
  z-index: 1;
  text-decoration: none;
}
.img{
  width: 100%;
  border-right: 2px solid #dddddd;
}
.navdraw_item:last-child .img{
  border: none;
}
.navdraw_item img{
  margin: 0 auto;
  display: block;
  width: calc(200 * 0.75px);
  height: calc(138 * 0.75px);
}
.navdraw_item span{
  display: block;
}
.price{
  color: #ff7f00;
  text-decoration: none;
  margin-top: 8px;
}
.text{

  color: #333333;
  width: 85%;
  margin: 20px auto 0;
  text-decoration: none;
}
</style>