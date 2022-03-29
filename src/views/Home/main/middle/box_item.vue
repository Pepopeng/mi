<template>
<div class="box_item">
  <a :href="data.a">
    <img :src="data.img" alt="">
    <span class="text">{{data.text}}</span>
  </a>
</div>
</template>

<script>
export default {
  name: "box_item",
  props:{
    data:Object,
  },
}
</script>

<style scoped>
.box_item{

  width: 25%;
  height: 16.66%;
  flex-shrink: 0;
}
a{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
  font-size: 15px;
}
img{
display: inline-block;
  margin: 0 10px;
}
.text:hover{
  color: #ff7f00;
}
</style>