<template>
 <div class="textbox_2_7">
   <p id="title_2_7">墙体质量测试</p>
   <div class="topbox_2_7">
     <div>
       <form action="" method="get">
         <p class="p_2_7">墙体类型
           <select>
             <option value=""></option>
             <option value="typea">砖墙</option>
             <option value="typeb">加气混凝土砌块墙</option>
             <option value="typec">石材墙</option>
           </select>
         </p>
         <p class="p_2_7">排水状况 <input type="text" name="wall" style="width: 240px;"/></p>
         <p class="p_2_7">防水材料 <input type="text" name="prof"/></p>
         <p class="p_2_7">是否渗水
           <select>
             <option value=""></option>
             <option value="yes">渗水</option>
             <option value="no">不渗水</option>
           </select>
         </p>

       </form>
     </div>

     <div id="bodybox" style="width: 350px;height: 172px;"></div>
     <div>
       <p><button type="button" class="rbtn_2_7" disabled="disabled">删除</button></p>
       <p><button type="button" class="rbtn_2_7">添加保存</button></p>
       <p><button type="button" class="rbtn_2_7" disabled="disabled">修改保存</button></p>
       <p><button type="button" class="rbtn_2_7">退出</button></p>
     </div>
   </div>
   <div id="tablebox_2_7">
      <p class="p_2_7" style="margin-left: 10px;">数据统计</p>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="datea"
          label="A"
          width="140">
        </el-table-column>
        <el-table-column
          prop="dateb"
          label="B"
          width="140">
        </el-table-column>
        <el-table-column
          prop="datec"
          label="C"
          width="140">
        </el-table-column>
        <el-table-column
          prop="dated"
          label="D"
          width="140">
        </el-table-column>
        <el-table-column
          prop="datee"
          label="E"
          width="140">
        </el-table-column>
        <el-table-column
          prop="datef"
          label="F"
          width="140">
        </el-table-column>
      </el-table>

      <div class="block">

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="5"
          layout="total, prev, pager, next, jumper"
          :total="0">
        </el-pagination>
      </div>

   </div>
 </div>
</template>
<script>

  export default{
    methods: {
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
        },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<style>
  .textbox_2_7{
    background-color: #f8f8f8;
    color: #606266;
    width: 858px;
    height: 598px;
    overflow:scroll;
  }
  .topbox_2_7{
    border-style: solid;
    border-width: 1px;
    border-color: #f0f0f0;
    display: flex;
  }
  .rbtn_2_7{
    width: 100px;
  }

  .p_2_7{
    font-size: 14px;
    font-weight: bold;
    padding-left: 5px;
    color: #606266;
  }
  #tablebox_2_7{

  }
  #title_2_7{
    font-family:"Times New Roman",Times, serif;
    font-size: large;
    font-weight: bold;
    color: #606266;
    padding: 15px;
    position:relative;
    left:40%;
  }
  #tb_2_7{
    width: 820px;
    margin: 10px;
  }
</style>
