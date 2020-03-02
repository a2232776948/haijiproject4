<template>
  <div id="b1">
    <div id="h1"></div>
    <img src="@/assets/login1.png" height="130" width="450">
    <div id="h2">
      <div id="s1" >
        <label id="lab1">用户名</label>
        <input id="inp1" v-model="username"/>
        <button id="but1" @click="onLogin">登录</button>
      </div>
      <div id="s2">
        <label id="lab2">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
        <input id="inp2" v-model="password"/>
        <button id="but2" @click="sign_out" ref="/start">退出</button>
      </div>
    </div>

  </div>
</template>

<script>
  import config from '@/publicAPI/config'
  //import axios from 'axios'
  export default {
    data(){
      return{
        message: null,
        error: null,
        username: null,
        password: null,
        URL: config.ROOTURL
      }
    },
    created() {

    },
    methods:{
      onLogin(){
        console.log(this.URL);
        const url = this.URL+"user/login";
        console.log(url);
        //http://localhost:8083/user/login
        axios.get(url , { params:{
          username: this.username,
          password: this.password
        }}).then((res) => {
          console.log(res.data);
          if(res.data.state){
            this.$message({
              message:'登录成功',
              type: 'success'
            });
            this.$router.push({ path: '/home' });
          }else{
            this.$message.error(res.data.value);
          }

        }).catch(

        )
      },
      sign_out(){
        console.log("ok3");
        this.$router.push({name: '/start'});
        this.$message('您已退出');
      }
    }
  }

</script>

<style>
  #b1{
    height: 300px;
    width: 450px;
    background: #9495D9 ;
    margin: 200px auto;
    border-radius: 17px;
  }
  #h1{
    height: 30px;
    background: #9495D9;
    border-radius: 17px 17px 0 0;
  }
  #h2{
    height: 118px;
    background: white;
    border-radius: 0 0 17px 17px;
    margin: -3px 2px;
    padding-top: 20px;
    color: gray;
  }
  #s1{
    height: 40px;
    width: 400px;
    margin: 0px auto;
    background: white;
    padding-top: 0px;
  }
  #s2{
    height: 40px;
    width: 400px;
    margin: 20px auto;
    background: white;
    padding-top: 0px;
  }
  #lab1{
    margin: 0 35px ;
  }
  #inp2{
    margin-left: 8px;
  }
  #but1{
    margin-left: 30px;
    margin-top: 10px;
    height: 20px;
    width: 70px;
    border-radius: 6px ;
    color: gray;
  }
  #lab2{
    margin: 0 30px ;
  }
  #but2{
    margin-left: 30px;
    margin-top: 10px;
    height: 20px;
    width: 70px;
    border-radius: 6px ;
    color: gray;
  }
</style>
