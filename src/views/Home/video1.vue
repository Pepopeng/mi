<template>
  <div class="video1">
    <div class="head">
      <span class="title">视频</span>
      <a class="top_right" href="https://www.mi.com/video/video1.vue">
        <span class="more">查看全部</span>
      </a>
    </div>
    <div class="videos">
      <videoPiece img="http://localhost/mi/Home/videoImg/1.jpg" text1="2021年春季新品发布会第一场" @click="this.$emit('change',0)"></videoPiece>
      <videoPiece img="http://localhost/mi/Home/videoImg/2.jpg" text1="Redmi 10X系列发布会" text2="Redmi 10X系列发布会" @click="this.$emit('change',1)"></videoPiece>
      <videoPiece img="http://localhost/mi/Home/videoImg/3.jpg" text1="小米10 青春版 发布会" @click="this.$emit('change',2)"></videoPiece>
      <videoPiece img="http://localhost/mi/Home/videoImg/4.jpg" text1="小米10 8K手机拍大片" @click="this.$emit('change',3)"></videoPiece>
    </div>
  </div>
</template>

<script>
import videoPiece from "./videoPiece";
export default {
  name: "video1",
  components:{
    videoPiece
  }
}
</script>

<style scoped>
.video1{
  width: 100%;
  margin: 20px 0;
}

.head{
  height: 40px;
  margin-bottom: 6px;
}
.top_right{
  display: block;
  float: right;
  height: 100%;
  text-decoration: none;
  color: black;
}

.more{
  line-height: 40px;
  height: 40px;
  position: relative;
  left: -32px;
  transition: all 0.3s;
}
.title{
  float: left;
  font-size: 22px;
  font-weight: 200;
  line-height: 40px;
}
.more:after{
  content: "\f133";
  font-family: bootstrap-icons;
  font-size: 20px;
  color: gray;
  position: absolute;
  top: -11px;
  left: 75px;
  transition: all 0.3s;
}
.more:hover:after{
  color: #ff6700;
}
.more:hover{
  color: #ff6700;
}
.videos{
  display: flex;
  justify-content: space-between;
}
</style>