<template>
  <div class="homeswiper">
    <swiper ref="swiper">
      <swiperitem v-for="(item,index) in list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload">
        </a>
      </swiperitem>

    </swiper>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import swiperitem from "@/components/swiperitem";
export default {
  name: "homeswiper",
  props:{
    list:{
      type:Array,
    }
  },
  data(){
    return{
      imgisload:false
    }
  },
  components:{
    swiper,swiperitem
  },
  methods:{
    imgload(){
      if(!this.imgisload){
        // this.$emit('imgload')
        this.imgisload=true
      }

    },

  }
}
</script>

<style scoped>
.homeswiper{
  position:relative;
  z-index: 1;
  width: 100%;

  height: 100%;
}
img{
  width: 100%;
}
</style>