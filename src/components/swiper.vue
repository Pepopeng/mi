<template>
  <div class="swiper" ref="swiper" @mouseenter="stoptimer" @mouseleave="starttimer">
    <slot></slot>
    <div class="indicator" >
      <div v-for="(item,index) in itemnum" :key="index"  class="indicatoritem" :class="{active:isactive(index)}" @click="indicatorClick(index)"></div>
    </div>
    <div class="leftArrow" @click="this.swimove1"></div>
    <div class="rightArrow" @click="this.swimove"></div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props:{
    timedur:{
      type:Number,
      default:5000 //ms
    },
  },
  data(){
    return{
      itemnum:0,
      sliders: {},
      currentdex:0,
      ismoving:false,

    }
  },
  mounted() {
    window.setTimeout(()=>{
      this.handledom()
      if(this.itemnum>1){this.starttimer()}
    },500)
    },

  methods:{
    isactive(index) {
        return index===this.currentdex
    },
    handledom(){
      let swiper=this.$refs.swiper
      let swichildren=swiper.getElementsByClassName("slider")
      this.itemnum=swichildren.length
      this.sliders=swichildren
      this.sliders[0].style.opacity=1

    },
    // settrans(position){
    //   // this.swistyle.transform=`translate(${position}px,0)`;
    // },
    swimoveto(newindex){
      this.ismoving=true

      this.sliders[this.currentdex].style.opacity=0
      this.sliders[newindex].style.opacity=1
      window.setTimeout(()=>{},500)
      this.ismoving=false
    },
    swimove(){
    if(this.currentdex+1==this.itemnum) {
      this.swimoveto(0);
      this.currentdex=0
      return;
    }
    this.swimoveto(this.currentdex+1);
    this.currentdex++;

    },
    swimove1(){
      if(this.currentdex==0) {
        this.swimoveto(this.itemnum-1);
        this.currentdex=this.itemnum-1
        return;
      }
      this.swimoveto(this.currentdex-1);
      this.currentdex--;

    },

    starttimer() {

      this.timerid=window.setInterval(()=>{
        this.swimove()
      },this.timedur)
    },
    stoptimer(){
      window.clearInterval(this.timerid)
    },

    indicatorClick(index){
      this.swimoveto(index)
      this.currentdex=index
    }


  },


}
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.swi{
  display: flex;
}

.indicator{
  position: absolute;
  right: 0;
  bottom: 25px;
  display: flex;
  justify-content: center;
  width: 10%;

}
.indicatoritem{
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: gray;
  flex-shrink: 0;
  padding: 2px 2px;
  margin: 0 5px;
  box-shadow: 0 0 2px 2px gray;
}
.indicatoritem:hover{
  background-color: white;
  cursor:pointer;
}
.active{
  background-color: white;
}
.leftArrow{
  position: absolute;
  width: 41px;
  height: 69px;
  top: 41%;
  left: 19.65%;
  z-index: 100;
  background:url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -84px 50%;
}
.leftArrow:hover{
  background:url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat 0 50%;
  cursor: pointer;
}
.rightArrow{
  position: absolute;
  width: 41px;
  height: 69px;
  top: 41%;
  right: 0;
  z-index: 100;
  background:url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -123px 50%;
}
.rightArrow:hover{
  background:url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -41px 50%;
  cursor: pointer;
}
</style>