<template>
<div class="login">
  <div class="sideImg"><img src="http://localhost/mi/login/side.png" alt=""></div>
  <div class="main">
    <div class="title">
      <div class="titleImg"><img src="~@/assets/logo-mi2.png" alt=""></div>
      <div class="text">大米账号</div>
    </div>
    <div class="log">
      <div class="logHead">
        <span :class="{act:index==0}" @click="index=0">登录</span>
        <span :class="{act:index==1}" @click="index=1">注册</span>
      </div>
      <div class="logForm">
        <form action="" @submit.prevent="" method="post">
          <lable>请输入您的账号</lable>
          <input type="text" name="account" ref="account" class="inputText">
          <lable>请输入您的密码</lable>
          <input type="password" name="password" ref="password" class="inputText">
          <input type="text" name="type" class="type" ref="type" :value="index">
          <input type="submit" @click="submit" class="inputSub" :value="index==0?'登录':'注册'">
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import request from "@/Networks/request.js";
export default {
  name: "login",
  data(){
    return{
      index:0
    }
  },
  methods:{
    submit(){
      let acc=this.$refs.account.value.trim()
      this.$refs.account.value=''
      let pass=this.$refs.password.value
      this.$refs.password.value=''
      let type=this.$refs.type.value
      if (type==1){
        if(acc.length>10){
          alert('账号长度不能超过10个字符')
          return
        }
        if(pass.length>8){
        alert('账号长度不能超过8个字符')
        return
      }
        if(acc.length==0||pass.length==0){
          alert('账号和密码不能为空')
          return
        }
      }
      request('login/account.php','post',{account:acc,password:pass,type:type}).then((res)=>{
        if(res=="用户名或密码错误"||res=="创建用户失败") {
          alert(res)
          return
        }
        else {
          let exdate=new Date()
          exdate.setDate(exdate.getDate()+1)
          document.cookie="account"+ "=" +escape(acc)+
              (";expires="+exdate.toGMTString())
          document.cookie="password"+ "=" +escape(pass)+
              (";expires="+exdate.toGMTString())
          this.$router.push('/')
        }

      })
    }
  }
}
</script>

<style scoped>
.login{

}
.sideImg{
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
}
.sideImg img{
  height: 100%;
}
.main{
  position: relative;
  top: 0;
  width: calc(100% - 413.5px);
  height: 700px;
  left: 413.5px;
}
.title{
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 26px;
  height: 40px;
  line-height: 40px;
}
.titleImg{
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  width: 40px;
}
.title img{
  width: 40px;
  height: 40px;
}
.title div{
  height: 40px;
  line-height: 40px;
}
.title .text{
  position: relative;
  left: 50px;
  font-weight: bold;
}
.log{
  position: absolute;
  width: 450px;
  height: 440px;
  left:calc(50% - 225px);
  top:calc(50% - 220px);

  box-shadow: 0 0 50px 0 #bbbbbb;
}
.logHead{

  height: 100px;
  font-size: 20px;
  text-align: left;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  display: table-cell;
  vertical-align: middle;
}
.logForm{
  padding: 0 30px;
}
.logHead span{
  cursor: pointer;
  margin: 0 20px;
}
.inputText,.inputSub{
  display: block;
  width: 100%;
  height: 50px;
  margin: 20px 0;
}
.inputSub{
  margin-top: 25px;
  font-size: 20px;
  color:white;
  border: none;
  background-color: #ff6700;
  cursor: pointer;
}
.inputSub:hover{
  opacity: 0.5;
}
lable{
  float: left;
  margin-bottom: 10px;
}
.act{
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}
.type{
  visibility: hidden;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
}
</style>