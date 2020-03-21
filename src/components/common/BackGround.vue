<template>
  <div id="home">
    <div id="back-ground1">
      <div id="back-ground2">
        <Head1></Head1>
        <div id="back-ground3">
          <el-row>
            <i class="el-icon-arrow-right"></i>
            <button class="menubtn"><i class="el-icon-s-cooperation"></i>工程(<u>F</u>)</button>
            <button class="menubtn"><i class="el-icon-edit-outline"></i>编辑(<u>E</u>)</button>
            <button class="menubtn"><i class="el-icon-user-solid"></i>数据维护(<u>X</u>)</button>
            <button class="menubtn"><i class="el-icon-bottom-right"></i>造价接口(<u>S</u>)</button>
            <button class="menubtn"><i class="el-icon-s-open"></i>造价工具(<u>G</u>)</button>
            <button class="menubtn"><i class="el-icon-menu"></i>窗口(<u>W</u>)</button>
            <button class="menubtn"><i class="el-icon-question"></i>帮助(<u>H</u>)</button>

          </el-row>
        </div>
        <div id="back-ground4">
          <el-row>
            <i class="el-icon-arrow-right"></i>
            <el-button type="text" class="menubtn2"><i class="el-icon-tickets" style="size:b5;"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-folder-opened"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-mobile"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-news"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-refresh-left" disabled></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-scissors"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-document-copy"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-money" disabled></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-view"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-sort"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-finished"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-s-operation"></i></el-button>
            <el-button type="text" class="menubtn2"><i class="el-icon-caret-right"></i>汇总计算</el-button>

          </el-row>
        </div>

        <div id="back-ground5">
          <form action="" method="get" style="display: flex; width: 1060px;">
            <p id="pd">工程类别:
              <select>
                <option value=""></option>
                <option value="pjtypea">工程A</option>
                <option value="pjtypeb">工程B</option>
                <option value="pjtypec">工程C</option>
              </select>
            </p>


              <p style="margin-left: 28%;">地区类别:
                <select>
                  <option value=""></option>
                  <option value="pltypea">地区A</option>
                  <option value="pltypeb">地区B</option>
                  <option value="pltypec">地区C</option>
                </select>

              </p>
              <p>合价小数位: <input type="text" name="prof" style="width: 50px;" value="0.00"/></p>
          </form>
        </div>
        <Head2 active="active"></Head2>
      </div>
    </div>
  </div>
</template>

<script>
  import Head1 from '@/components/common/Head1'
  import Head2 from '@/components/common/Head2'

  export default {
    props: ['active'],
    components: {
      Head1,
      Head2,
    }
  }
</script>

<style>
  #home{
    margin-top: 0;
  }
  #back-ground1{
    height: 730px;
    width: 1100px;
    background: burlywood ;
    margin: 0 auto;
  }
  #back-ground2{
    height: 720px;
    width: 1060px;
    background: white;
    margin: 0 auto;
  }
  .menubtn{
    padding: 0px 5px 0px 5px;
    margin: 2px;
  }
  .menubtn2{
    padding: 0px 3px 0px 3px;
    margin: 2px;
    color: #000000;
  }
  
  #back-ground3{
    height: 28px;
    width: 1060px;
    background: #B2CDF7;
  }
  #back-ground4{
    height: 28px;
    width: 1060px;
    background: #B2CDF7;
  }
  #bg4-l{
    height: 30px;
    width: 400px;
    background: skyblue;
  }
  #back-ground5{
    height: 30px;
    width: 1060px;
    background: white;
    display: flex;
  }
  #back-ground5 p{
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
    color: #606266;
  }
  #pd{
    margin-left: 20%;
  }
  #pleft{
    margin-left: 25%;
  }

</style>
