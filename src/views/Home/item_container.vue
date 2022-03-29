<template>
<div class="item_container">
  <a href="https://www.mi.com/redmik40s"><img src="http://localhost/mi/Home/long1.jpg" alt=""></a>
  <item :data="[res['item_phone']]"
        title="手机"
        more="https://www.mi.com/p/1915.html"
        :link="['https://www.mi.com/redmik50']"
        :img="['http://localhost/mi/Home/phone/1.jpg']">
  </item>
  <item :data="[res['item_wear'],res['item_wear1']]"
        title="智能穿戴"
        :vary="['热门','穿戴']"
        :link="['https://www.mi.com/xiaomiwatchcolor2']"
        :img="['http://localhost/mi/Home/wear/0/1.jpg']">
  </item>
  <item :data="[res['item_laptop']]"
        title="笔记本 | 平板"
        :vary="['热门']"
        :link="['https://www.mi.com/redmibook/game-amd']"
        :img="['http://localhost/mi/Home/laptop/0.jpg']">
  </item>
  <item :data="[res['item_household0'],res['item_household']]"
        title="家电"
        :vary="['热门','电视影音']"
        :link="['https://www.mi.com/buy?product_id=10000316','https://www.mi.com/buy?product_id=15718']"
        :img="['http://localhost/mi/Home/household/0.jpg','http://localhost/mi/Home/household/1.jpg']">
  </item>
  <item :data="[res['item_life0'],res['item_life1'],res['item_life2'],res['item_life3']]"
        title="生活电器"
        :vary="['扫地机','空净','清洁','风扇']"
        :link="['https://www.mi.com/buy?product_id=15071','https://www.mi.com/buy?product_id=14505']"
        :img="['http://localhost/mi/Home/life/0.jpg','http://localhost/mi/Home/life/1.jpg']">
  </item>
  <item :data="[res['item_cook0'],res['item_cook1'],res['item_cook2'],res['item_cook3']]"
        title="厨房电器"
        :vary="['净水器','烟灶','电饭煲','微蒸烤']"
        :link="['https://www.mi.com/buy?product_id=14534','https://www.mi.com/buy?product_id=14917']"
        :img="['http://localhost/mi/Home/cook/0.jpg','http://localhost/mi/Home/cook/1.jpg']">
  </item>
  <item :data="[res['item_smart0'],res['item_smart1'],res['item_smart2'],res['item_smart3']]"
        title="智能家居"
        :vary="['小爱音箱','门锁','路由器','智能设备']"
        :link="['https://www.mi.com/mispeaker/sound','https://www.mi.com/lockdoor']"
        :img="['http://localhost/mi/Home/smart/0.jpg','http://localhost/mi/Home/smart/1.jpg']">
  </item>
  <item :data="[res['item_sports0'],res['item_sports1'],res['item_sports2'],res['item_sports3']]"
        title="运动出行"
        :vary="['平衡车/滑板车','运动健身','箱包配饰','出行工具']"
        :link="['https://www.mi.com/scooter/','https://www.mi.com/buy?product_id=15025']"
        :img="['http://localhost/mi/Home/sports/0.jpg','http://localhost/mi/Home/sports/1.jpg']">
  </item>
  <a href="https://www.mi.com/buy?product_id=9836"><img src="http://localhost/mi/Home/long2.jpg" alt=""></a>
  <item :data="[res['item_daily0'],res['item_daily1'],res['item_daily2'],res['item_daily3']]"
        title="日用百货"
        :vary="['个护健康','电源/线材','儿童用品','家居床品']"
        :link="['https://www.mi.com/buy?product_id=11174','https://www.mi.com/buy?product_id=11191']"
        :img="['http://localhost/mi/Home/daily/0.jpg','http://localhost/mi/Home/daily/1.jpg']">
  </item>
  <video1 @change="changeindex"></video1>

    <div class="toup" >
      <transition name="videoUp1">
      <div class="toupMask" v-if="toupIndex<=3"></div>
      </transition>
      <transition name="videoUp2">
      <div class="main" v-if="toupIndex<=3">
        <div class="toupHead">
          <span class="toupTitle">{{toup_arr[toupIndex]['title']}}</span>
          <div class="close" @click="toupIndex=4">×</div>
        </div>
        <video class="trueVideo"  id="Vvideo" controls="controls"></video>
      </div>
      </transition>
    </div>


</div>
</template>

<script>
import request from "@/Networks/request.js"
import item from "./Item/item";
import video1 from "./video1";
export default {
  name: "item_container",
  data(){
    return{
      res:Object,
      toup_arr:[
        {
              'title':'2021年春季新品发布会第一场',
              'res':'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4'
        },
        {
          'title':'Redmi 10X系列发布会',
          'res':'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4'
        },
        {
          'title':'小米10 青春版 发布会',
          'res':'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4'
        },
        {
          'title':'小米10 8K手机拍大片',
          'res':'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4'
        }
      ],
      toupIndex:4
    }
  },
  components:{
    item,video1
  },
  created() {
    request('Home/index.php').then(res=>{
      this.res=res
    })
  },
  methods:{
    changeindex(index){
      this.toupIndex=index
      window.setTimeout(()=>{
        let v=document.getElementById("Vvideo")
        v.src=this.toup_arr[this.toupIndex]['res']
      },100)

    }
  }
}
</script>

<style scoped>
.item_container{
  width: 100%;
  padding: 50px 142px;
  background-color: #f5f5f5;
}
.item_container>a{
  width: 100%;
}
.item_container>a img{
  width: 100%;
}
.toupMask{
  left: 0;
  top:0;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: .5;
  background-color: #000;
}
.main{
  position: fixed;
  width: 880px;
  height: 555px;
  left: calc(50% - 440px);
  top:calc(50% - 277.5px);
}
.toupHead{
  position: relative;
  height: 60px;
  padding: 14px 20px;
  line-height: 32px;
  background-color: #f5f5f5;
  text-align: left;
}
.close{
  float: right;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  font-size: 30px;
  cursor: pointer;
  text-align: center;
}
.close:hover{
  background-color: #ff6700;
  color: white;
}
.trueVideo{
  display: block;
  width: 880px;
  height: 495px;
}
.toupTitle{
  font-size: 18px;
  font-weight: 400;
  color: #424242;
  vertical-align: middle;
}
.videoUp1-leave-to,.videoUp1-enter-from{
  opacity: 0;
}
.videoUp1-enter-active,.videoUp1-leave-active{
  transition:opacity 0.5s ease;
}
.videoUp2-leave-to,.videoUp2-enter-from{
  top:calc(50% - 277.5px - 20px);
  opacity: 0;
}
.videoUp2-enter-active,.videoUp2-leave-active{
  transition:all 0.5s ease;
}
</style>