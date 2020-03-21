<template>
  <div>
    <div style="float: left">
      <div style="margin: 10px;">
        <div style="display: flex;">
          <img src="../../assets/timg12.jpg" style="height: 55px; margin-left: 10px; margin-top: 10px;"/>
          <div style="height: 65px;">
            <div id="ttt" style="margin: 15px;">
              <el-row>&nbsp;</el-row>
              <el-row>根据需要进行设置可以实现各种功能....</el-row>
            </div>
          </div>
        </div>

        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="隐藏选项页" name="a">隐藏选项页</el-tab-pane>
          <el-tab-pane label="隐藏其他项目" name="b">隐藏其他项目</el-tab-pane>
          <el-tab-pane label="报表选项" name="c">
            <div id="cbox" style="">
              <el-checkbox-group v-model="checkedlistc" @change="handleCheckedCitiesChange" size="medium">
                  <el-row>
                    <el-checkbox label="1" :key="'a'">表格边框加粗</el-checkbox>
                  </el-row>
                  <el-row>
                    <el-checkbox label="2" :key="'b'">自动追加空行</el-checkbox>
                  </el-row>
                  <el-row>
                    <el-checkbox label="3" :key="'c'">价差按实体与措施分类</el-checkbox>
                  </el-row>
                  <el-row>
                    <el-checkbox label="4" :key="'d'">价差按工料机分类</el-checkbox>
                  </el-row>
                  <el-row>
                    <el-checkbox label="5" :key="'e'">价差为0不输出</el-checkbox>
                  </el-row>
                  <el-row>
                    <el-checkbox label="6" :key="'f'">其他费用表只显示有金额项目</el-checkbox>
                  </el-row>
                  <el-row>
                    <el-checkbox label="7" :key="'g'">导出excel报表只导出明细表</el-checkbox>
                  </el-row>
                  <el-row>
                    <el-checkbox label="8" :key="'h'">计价表不显示序号</el-checkbox>
                  </el-row>
              </el-checkbox-group>
            </div>
          </el-tab-pane>
          <el-tab-pane label="文件保护" name="d">文件保护</el-tab-pane>
          <el-tab-pane label="分析表" name="e">分析表</el-tab-pane>
          <el-tab-pane label="预算书设置" name="f">预算书设置</el-tab-pane>
          <el-tab-pane label="操作设置" name="g">
            <div id="gbox" style="">
              <el-checkbox-group v-model="checkedlistg" @change="handleCheckedCitiesChange" size="medium">
                  <el-row>
                    <el-col :span="8"><el-checkbox label="1" :key="'a'">不显示子目或主材料制作窗口</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="2" :key="'a'">不显示其他换算窗口</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="3" :key="'a'">配合比换算显示所有材料</el-checkbox></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8"><el-checkbox label="4" :key="'a'">输入定额不带出主材</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="5" :key="'a'">主材消耗量计入工程量</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="6" :key="'a'">没有清单时可以增加子目</el-checkbox></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8"><el-checkbox label="7" :key="'a'">工程量输入按定额单位</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="8" :key="'a'">替换子目时锁定名称</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="9" :key="'a'">选择清单时自动增加工作内容</el-checkbox></el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="8" :offset="8"><el-checkbox label="10" :key="'a'">工程量不随清单变化</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="11" :key="'a'">新增清单不自动编顺号</el-checkbox></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8"><el-checkbox label="12" :key="'a'">工程单价->选择单价</el-checkbox></el-col>
                    <el-col :span="8"><el-checkbox label="13" :key="'a'">工作内容以施工方法代替</el-checkbox></el-col>
                  </el-row>
              </el-checkbox-group>
              <div id="ginputbox">
                <el-row :gutter="20">
                  <el-col :span="8" :offset="2"><el-input v-model="ginputs.input1" placeholder="工程行背景"></el-input></el-col>
                  <el-col :span="8"><el-input v-model="ginputs.input2" placeholder="子项行背景"></el-input></el-col>
                  <el-col :span="4"><el-button @click="defaultsetting()" size="mini">默认设置</el-button></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8" :offset="2"><el-input v-model="ginputs.input3" placeholder="单项行背景"></el-input></el-col>
                  <el-col :span="8"><el-input v-model="ginputs.input4" placeholder="子项行背景"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8" :offset="2"><el-input v-model="ginputs.input5" placeholder="分部行背景"></el-input></el-col>
                  <el-col :span="8"><el-input v-model="ginputs.input6" placeholder=""></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8" :offset="2"><el-input v-model="ginputs.input7" placeholder="分项行背景"></el-input></el-col>
                  <el-col :span="8"><el-input v-model="ginputs.input8" placeholder="设备背景"></el-input></el-col>
                </el-row>
              </div>



            </div>

          </el-tab-pane>
        </el-tabs>
        <hr/>
        <el-row>&nbsp;</el-row>
        <el-row>
          <el-col :span="16">&nbsp;</el-col>
          <el-col :span="4"><el-button @click="ensuref()" size="mini" class="el-icon-check">确定</el-button></el-col>
          <el-col :span="4"><el-button @click="reset()" size="mini" class="el-icon-close">取消</el-button></el-col>
        </el-row>

      </div>

    </div>
  </div>
</template>

<script>


    export default {
      name: "2_12.vue",
      data() {
        return {
          activeName: 'c',
          checkedlistc: [],
          checkedlistg: [],
          ginputs:{
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',
          },
        }
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleCheckedCitiesChange(value) {
          console.log(this.checkedlist)
        },
        ensuref() {
          console.log('ok.')
        },
        reset() {
          console.log('reset.')
        },
        defaultsetting() {
          console.log('defaultsetting.')
        }


      },

    }


</script>

<style scoped>
  #cbox >>> .el-checkbox{
    margin: 5px 0 5px 10%;
    font-size: 18px;
  }
  #gbox >>> .el-checkbox{
    margin: 5px;
    font-size: 18px;
  }
  #ginputbox >>> .el-row{
    margin-top: 6px;
    margin-bottom: 6px;

  }


</style>
