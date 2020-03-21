<template>
  <div id="bgbox_2_9">
    <img style="width: 860px; height: 300px;" src="../../assets/timg6_2_9.jpg"/>
    <div class="tablebox_2_9">
      <table border="1" id="tb_2_9">
        <tr>
          <th width="80">名称</th>
        </tr>
        <tr>
          <th>&nbsp;</th>
        </tr>
        <tr>
          <th>&nbsp;</th>
        </tr>

    </table>
    </div>
    <div id="textinput_2_9">
      <div>
        <p class="p_2_7">计算公式:&nbsp; <input type="text" name="wall" style="width: 320px;"/></p>
        <p class="p_2_7">计算过程:&nbsp; <input type="text" name="prof" style="width: 320px;"/></p>
      </div>
      <div style="padding-left: 25px;">
        <p class="p_2_7">
          数量:&nbsp;  <input type="text" name="wall" style="width: 240px;"/>
          <button type="button" id="rbtn_2_9">计算</button>
        </p>
        <p class="p_2_7">结果:&nbsp;  <input type="text" name="prof" style="width: 300px;"/></p>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        message: null
      }
    }

  }
</script>

<style>
  #bgbox_2_9{
    color: #000000;
    background-color: #e5e5e5;
  }
  .title_2_8{
    width: 860px;
    height: 45px;
    background-color: #62c5d9;
  }
  .tablebox_2_9{
    width: 860px;
    height: 195px;
    overflow:scroll;
    border-style: solid;
    border-width: 1px;
    border-color: #c2c2c2;
  }
  #textinput_2_9{
    display: flex;
  }
</style>
