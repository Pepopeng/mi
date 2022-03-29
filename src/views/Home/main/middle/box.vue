<template>
<div class="box" :class="{'box1':this.length==1,'box2':this.length==2,'box3':this.length==3,'box4':this.length==4}">
<box_item v-for="(item,index) in data" :key="index" :data="item"></box_item>
</div>
</template>

<script>
import box_item from "./box_item";
export default {
  name: "box",
  props:{
    data:Object,
    length:Number
  },
  components:{
    box_item
  },
  // watch:{
  //
  // }
}
</script>

<style scoped>
.box{
  position: absolute;
  top: 0;
  left: calc(16% + 142px);
  height: 100%;
  z-index: 3;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 2px 2px 5px #999999;
}
.box1{
  width: calc((84% - 284px)/4);
}
.box2{
  width: calc((84% - 284px)/2);
}
.box3{
  width: calc((84% - 284px)*3/4);
}
.box4{
  width: calc(84% - 284px);
}
</style>