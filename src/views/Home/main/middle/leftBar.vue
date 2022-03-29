<template>
<div class="leftBar">
  <div class="item" @mouseenter="this.$emit('sendIndex',0)"><span class="text">手机</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',1)"><span class="text">电视</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',2)"><span class="text">笔记本 平板</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',3)"><span class="text">家电</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',4)"><span class="text">出行 穿戴</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',5)"><span class="text">智能 路由器</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',6)"><span class="text">电源 配件</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',7)"><span class="text">健康 儿童</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',8)"><span class="text">耳机 音箱</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>
  <div class="item" @mouseenter="this.$emit('sendIndex',9)"><span class="text">生活 箱包</span><img src="~@/assets/arrow-left.svg" alt="" class="arrow"></div>

</div>
</template>

<script>
export default {
  name: "leftBar"
}
</script>

<style scoped>
.leftBar{
  font-size: 15px;
  color: white;
  padding: 20px 0;
  position: absolute;
  left: 142px;
  display: inline-block;
  width: 16%;
  height: 100%;
  opacity: 0.8;
  z-index: 2;
  background-color: gray;
}
.leftBar div{
  width: 100%;
  height: 10%;
}
.item{
  padding: 10px 25px;
}
.item:hover{
  background-color: #ff7f00;
  cursor: pointer;
}
.arrow{
  width: 16px;
  height: 16px;
  float: right;
}
.text{
  float: left;
}
</style>