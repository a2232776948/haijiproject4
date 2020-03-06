<template>
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router default-active="active">
        <el-submenu index="1">
          <template slot="title">建筑墙体基本信息</template>
          <el-menu-item index="/two_three">基本信息</el-menu-item>

        </el-submenu>
        <el-submenu index="2">
          <template slot="title">渗水测试</template>
          <el-menu-item index="/two_four">测试</el-menu-item>

        </el-submenu>
        <el-submenu index="3">
          <template slot="title">渗水原因分析</template>
          <el-menu-item index="/two_five">分析</el-menu-item>

        </el-submenu>
        <el-submenu index="4">
          <template slot="title">渗水防治</template>
          <el-menu-item index="/two_six">渗水防治</el-menu-item>

        </el-submenu>
        <el-submenu index="5">
          <template slot="title">墙体质量测试</template>
          <el-menu-item index="/two_seven">墙体质量测试</el-menu-item>

        </el-submenu>
        <el-submenu index="6">
          <template slot="title">墙体排水信息</template>
          <el-menu-item index="/two_eight">墙体排水信息</el-menu-item>

        </el-submenu>
        <el-submenu index="7">
          <template slot="title">墙体排水图示</template>
          <el-menu-item index="/two_night">墙体排水图示</el-menu-item>
          
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">防水材料检测</template>

        </el-submenu>
        <el-submenu index="9">
          <template slot="title">漏液检测</template>

        </el-submenu>
        <el-submenu index="10">
          <template slot="title">报表选项</template>

        </el-submenu>
        <el-submenu index="11">
          <template slot="title">操作设置</template>

        </el-submenu>
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
