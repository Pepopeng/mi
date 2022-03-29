<template>
<div class="nav-draw">
  <navdraw_item v-for="(item,index) in data" :key="index" :data="item"></navdraw_item>
</div>
</template>

<script>
import navdraw_item from "./navdraw_item";
export default {
  name: "nav_draw",
  props:{
    data:{},
  },
  data(){
    return{
    }
  },
  components:{
    navdraw_item
  },
  mounted() {
  },
}
</script>

<style scoped>
.nav-draw{
  position: relative;
  width: 100%;
  font-size: 12px;
  border-top: 2px solid #eeeeee;
  height: 230px;
  padding: 0 160px;
}

</style>