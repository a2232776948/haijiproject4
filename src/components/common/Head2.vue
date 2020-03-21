<template>
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router default-active="active">

        <el-menu-item index="/two_three">基本信息</el-menu-item>
        <el-menu-item index="/two_four">测试</el-menu-item>
        <el-menu-item index="/two_five">分析</el-menu-item>
        <el-menu-item index="/two_six">渗水防治</el-menu-item>
        <el-menu-item index="/two_seven">墙体质量测试</el-menu-item>
        <el-menu-item index="/two_eight">墙体排水信息</el-menu-item>
        <el-menu-item index="/two_night">墙体排水图示</el-menu-item>

        <el-menu-item index="/two_ten">防水材料检测</el-menu-item>
        <el-menu-item index="/two_eleven">漏液检测</el-menu-item>
        <el-menu-item index="/two_twelve">报表选项</el-menu-item>
        <el-menu-item index="/two_thirteen">操作设置</el-menu-item>
      
      </el-menu>
    </el-aside>

    <el-container>
      <router-view></router-view>

    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
