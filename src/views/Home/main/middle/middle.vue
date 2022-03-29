<template>
 <div class="middle">
   <leftBar v-if="true" @sendIndex="sendIndex" @mouseenter="this.leftHover=true" @mouseleave="leftBarLeave"></leftBar>
   <homeswiper v-if="data" :list="data['swiper']"></homeswiper>
   <box v-if="data && this.actIndex!=10" :data="data.leftBar[this.actIndex]" :length="Math.ceil(data.leftBar[this.actIndex].length/6)" @mouseenter="this.boxHover=true" @mouseleave="boxLeave"></box>
 </div>
</template>

<script>
import leftBar from "./leftBar";
import homeswiper from "./homeswiper";
import box from './box';

export default {
  name: "middle",
  components:{
    leftBar,homeswiper,box
  },
  props:{
    data:{}
  },
  data(){
    return{
      actIndex:10,//0~9  10代表不显示
      leftHover:false,
      boxHover:false
    }
  },
  methods:{
    leftBarLeave(){
      this.leftHover=false
      window.setTimeout(()=>{
        if(!this.boxHover) {
          this.actIndex=10
        }
      },100)
    },
    boxLeave(){
      this.boxHover=false
      window.setTimeout(()=>{
        if(!this.leftHover) {
          this.actIndex=10
        }
      },100)
    },
    sendIndex(index){
      this.actIndex=index
    }
  }
}
</script>

<style scoped>
.middle{
  position: relative;
  width: 100%;
  height: 460px;
  z-index: 1;
  padding: 0 142px;
}



</style>