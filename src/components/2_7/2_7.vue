<template>
 <div class="textbox_2_7">
   <p id="title_2_7">墙体质量测试</p><br/><br/>
   <div class="topbox_2_7">
     <div>
       <form action="" method="get">
         <p class="p_2_7">墙体类型
           <select>
             <option value=""></option>
             <option value="css">css</option>
             <option value="JavaScript">-------JavaScript------</option>
             <option value="php">php</option>
           </select>
         </p>
         <p class="p_2_7">排水状况 <input type="text" name="wall" style="width: 240px;"/></p>
         <p class="p_2_7">防水材料 <input type="text" name="prof"/></p>
         <p class="p_2_7">是否渗水
           <select>
             <option value=""></option>
             <option value="css">css</option>
             <option value="JavaScript">JavaScript</option>
             <option value="php">php</option>
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
   <div>
      <p class="p_2_7" style="margin-left: 10px;">数据统计</p>
      <table border="1" id="tb_2_7">
        <tr>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
        </tr>
      </table>
   </div>
 </div>
</template>
<script>

  export default{
    data(){
      return{
      }
    },
    components:{
    }
  }
</script>

<style>
  .textbox_2_7{
    background-color: #a8a8a8;
    color: #000000;
    width: 858px;
    height: 598px;
    overflow:scroll;
  }
  .topbox_2_7{
    border-style: solid;
    border-width: 1px;
    border-color: #cacaca;
    display: flex;
  }
  .rbtn_2_7{
    width: 100px;
  }

  .p_2_7{
    font-weight: bold;
    padding-left: 5px;
    color: #000000;
  }
  #title_2_7{
    font-family:"Times New Roman",Times, serif;
    font-size: large;
    font-weight: bold;
    color: #000000;
    margin: 5px;
    position:relative;
    left:40%;
  }
  #tb_2_7{
    width: 820px;
    margin: 10px;
  }
</style>
