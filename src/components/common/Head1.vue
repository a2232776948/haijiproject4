<template>
  <div id="v1">
    <div id="v1-left">
      <h2>建筑监理用建筑墙体渗水测试分析系统</h2>
    </div>
    <div id="v1-right">
      <i id="i1" class="el-icon-minus"></i>
      <i id="i2" class="el-icon-full-screen"></i>
      <i id="i3" class="el-icon-close" @click="onClose"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vtest2",
    methods:{
      onClose(){
        this.$router.push('/start');
        this.$message('您已退出');
      }
    }
  }
</script>

<style scoped>
  #v1{
    height: 30px;
    width: 1060px;
    color: black;
    background: burlywood ;
    margin: 0 auto;
  }
  #v1-left{
    height: 20px;
    width: 300px;
    margin-top: 10px;
    margin-left: 20px;
  }
  #v1-left h2{
    padding-top: 5px;
    margin-top: 10px;
    width: 300px;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
  }
  #v1-right{
    cursor: pointer;
    height: 20px;
    width: 100px;
    margin-top: -16px;
    margin-left: 1010px;
  }
</style>
