<template>
  <div style="margin: 5% 0 20% 5%; display: flex; background-color: #f7f7f7;">
    <div class="sidebox_2_4">
      <p class="pside_2_4">渗水速度</p>
      <div class="vbox_2_4">
        <div style="position: absolute; left: 20%; top: 5%;">
          <div style="position: relative;">
            <div class="vtext_2_4">{{total}}</div>
            <el-progress type="dashboard" :percentage="total" :color="colors" :show-text="false"></el-progress>
          </div>
        </div>
      </div>


      <el-button type="success" class="elbtn_2_4" style="float: right;" circle><p>&nbsp;</p></el-button>


    </div>
    <div class="sidebox_2_4">
      <p class="pside_2_4">渗水量</p>
      <div class="vbox_2_4">
        <div style="position: absolute; left: 20%; top: 5%;">
          <div style="position: relative;">
            <div class="vtext_2_4">{{rate}}</div>
            <el-progress type="dashboard" :percentage="rate" :color="colors" :show-text="false"></el-progress>
          </div>
        </div>
      </div>
      <el-button type="success" class="elbtn_2_4" circle><p>&nbsp;</p></el-button>
    </div>
    <div class="formbox_2_4 sidebox_2_4">
      <form action="" method="get" style="margin: 4px;">
        <p class="ptext_2_4">渗水类型 <input type="text" name="anttype" style="height: 28px;"/></p>
        <div style="display: flex;">
          <div style="width: 225px;">
            <p class="ptext_2_4">渗水速度<el-input-number v-model="rate" controls-position="right" @change="handleChange" :min="1" :max="100" style="width: 100px;"></el-input-number></p>
            <p class="ptext_2_4">渗水量&nbsp;&nbsp;&nbsp; <el-input-number v-model="total" controls-position="right" @change="handleChange" :min="1" :max="100" style="width: 100px;"></el-input-number></p></p>
          </div>
          <el-button class="elbtn_2_4" type="info" circle><p>&nbsp;</p></el-button>
        </div>

      </form>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        total: 0,
        rate: 10,
        colors: [
          {color: '#6f7ad3', percentage: 20},
          {color: '#1989fa', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#e6a23c', percentage: 80},
          {color: '#f56c6c', percentage: 100}
        ]
      };
    },
    methods: {

    }
  }
</script>

<style>
  .pside_2_4{
    font-size: 14px;
    margin-top: 20px;
    margin-left: 16px;
  }
  .ptext_2_4{
    font-size: 13px;
    margin: 8px;

  }
  .vbox_2_4{
    position: relative;
    width: 210px;
    height: 140px;
    border-style: solid;
    border-color: #e6e6e6;
    border-width: thin;
    margin: 10px;
  }
  .sidebox_2_4{
    border-style: solid;
    border-color: #e6e6e6;
    border-width: thin;
    margin: 8px;
  }
  .formbox_2_4{

  }
  .elbtn_2_4{
    float: right;
    margin: 10%;
  }
  .vtext_2_4{
    position: absolute;
    top: 43%;
    left: 42%;
  }
</style>
