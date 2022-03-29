<template>
  <div class="home">
    <topBar/>
    <main1></main1>
    <div class="fix">
      <fix_item img="http://localhost/mi/Home/fix/1.png"
               img_sad="http://localhost/mi/Home/fix/1_sad.png"
               text="手机APP"
               href=""
               @mouseenter="this.qr=true" @mouseleave="qrLeave">
     </fix_item>
      <fix_item img="http://localhost/mi/Home/fix/2.png"
                img_sad="http://localhost/mi/Home/fix/2_sad.png"
                text="个人中心"
                href="https://www.mi.com/user/portal">
      </fix_item>
      <fix_item img="http://localhost/mi/Home/fix/3.png"
                img_sad="http://localhost/mi/Home/fix/3_sad.png"
                text="售后服务"
                href="https://www.mi.com/service/aftersale/front">
      </fix_item>
      <fix_item img="http://localhost/mi/Home/fix/4.png"
                img_sad="http://localhost/mi/Home/fix/4_sad.png"
                text="人工客服"
                href="https://www.mi.com/user/portal">
      </fix_item>
      <fix_item img="http://localhost/mi/Home/fix/5.png"
                img_sad="http://localhost/mi/Home/fix/5_sad.png"
                text="购物车"
                href="https://www.mi.com/buy/cart"
                class="last_item">
      </fix_item>
      <fix_item img="http://localhost/mi/Home/fix/totop_hover.png"
                img_sad="http://localhost/mi/Home/fix/totop_sad.png"
                text="回顶部"
                href=""
                v-if="this.top>=500"
                class="totop"
                @click="totop">
      </fix_item>


    </div>
    <div class="qr" v-if="qr" @mouseenter="qrHover=true" @mouseleave="qrLeave1" :class="{qrDown:top>500}">
      <img src="http://localhost/mi/Home/fix/qr.png" style="width: 90px" alt="">
      <div>扫码领取新人百元礼包</div>
    </div>
    <item_container></item_container>
    <bottom></bottom>
  </div>
</template>

<script>
// @ is an alias to /src
import topBar from '@/views/Home/topBar/topBar.vue'
import main1 from '@/views/Home/main/main.vue'
import fix_item from "./fix_item";
import item_container from "./item_container";
import bottom from "./bottom";
export default {
  name: 'Home',
  data(){
    return{
      top:0,
      qr:false,
      qrHover:false
    }
  },
  components: {
    topBar, main1, fix_item,item_container,bottom
  },
  mounted() {
    let that=this
    window.addEventListener("scroll", function () {
      that.top=document.documentElement.scrollTop
    })
  },
  methods:{
    totop(){
      document.documentElement.scrollTop=0
    },
    qrLeave1(){
      this.qrHover=false
      this.qr=false
    },
    qrLeave(){

      window.setTimeout(()=>{
        if(this.qrHover!=true) this.qr=false
      },200)
    }
  }
}

</script>
<style scoped>
.last_item{
  border-bottom: 1px solid #f1f1f1;
}
.fix{
  position: fixed;
  right: 0;
  bottom: 68px;
  width: 80px;
  z-index: 200;
  background-color: white;
}
.totop{
  margin-top: 20px;
  opacity: 1;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
}
.qr{
  width: 120px;
  padding: 20px 15px 0;
  background-color: white;
  border: 1px solid #f1f1f1;
  position: fixed;
  height: 180px;
  right:95px;
  top:197px;
  z-index: 200;
  font-size: 15px;
}
.qrDown{
  top: 85px;
}
.qr div{
  width: 80px;
  margin: 10px auto;
}


</style>