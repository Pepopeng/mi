<template>
<a class="item_piece"  :href="data['a']" v-if="act">
  <img :src="data['img']" alt="" >
  <h3 v-if="data['text1']" class="text1">{{data['text1']}}</h3>
  <p v-if="data['text2']" class="text2">{{data['text2']}}</p>
  <p class="Price">
    <span v-if="data['price']">{{data['price']}}</span>
    <span v-if="data['old_price']" class="oldprice">{{data['old_price']}}</span>
  </p>

</a>
</template>

<script>
export default {
  name: "item_piece",
  props:{
    data:Object
  },
  computed:{
    act(){
      return this.data['size']==2
    }
  }
}
</script>

<style scoped>

.item_piece{
  display: block;
  flex-basis: 24%;
  height: 300px;
  text-decoration: none;
  background-color: white;
  transition: all 0.5s;
}
.item_piece:hover{
  box-shadow: 0 4px 8px 0 gray;
  transform: translate(0,-3px);
}
img{
  margin-top: 28px;
  width: 65%;
  margin-bottom: 10px;

}
.text1{
  margin: 0 10px 2px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
}
.text2{
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;
}
.Price{
  margin: 0 10px 14px;
  text-align: center;
  color: #ff6700;
  font-size: 14px;
}
.oldprice{
  text-decoration: line-through;
  color: #b0b0b0;
  margin-left: 0.5em;
}

</style>