<template>
  <div>
      <div class="bgbox_2_3">
        <div class="m_2_3 bor_2_3">
          <h3 style="padding-left: 10px;">建筑墙体基本信息</h3>
          <div class="s_2_3 bor_2_3">
            <form action="" method="get">
              <p class="p_2_3">墙体厚度: <input type="text" name="wall" class="input_2_3" /></p>
              <p class="p_2_3">防水材料: <input type="text" name="prof" class="input_2_3" /></p>
              <p class="p_2_3">管道类型: <input type="text" name="piptype" class="input_2_3" /></p>
            </form>
          </div>
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

  .bgbox_2_3{
    width: 840px;
    height: 580px;
    background-image: url("../../assets/timg1.jpg");
    background-repeat: no-repeat;
    background-size: 840px 580px;
    margin: 10px;
  }

  .m_2_3{
    width: 320px;
    height: 580px;
  }
  .s_2_3{
    width: 310px;
    height: 510px;
    margin: 5px;
  }
  .bor_2_3{
    border-style: solid;
    border-width: 1px;
  }
  .p_2_3{
    font-weight: bold;
    padding-left: 5px;
    color: #000000;
  }
  .input_2_3{
    background-color: #aaffff;
  }
</style>
