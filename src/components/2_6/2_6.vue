<template>
	<div class="div_2_6">
		<div class="textbox_2_6">
    <el-table
      :data="tableData"
      height="600"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="针对不同的部位,具体考虑方面如下:">
        <template slot-scope="scope">
          <p @click=handleRow(scope.$index) >{{ scope.row.date }}</p>
        </template>
      </el-table-column>

    </el-table>
		</div>
    <div class="m_2_6">
      <div>
        <img id="showimg" src='../../assets/timg1.jpg'/>
      </div>

    </div>
	</div>

</template>

<script>
	export default{
	  data (){
	    return {
        tableData: [{
                  url: require('../../assets/timg1.jpg'),
                  date: '1.1 混凝土外墙裂缝引起的渗漏：外墙上出现贯通的裂缝，由地基不均匀沉降、温度变形引起的开裂。砼表面的蜂窝、麻面、孔洞如处理不当也易引起渗漏。'
                },
                {
                  url: require('../../assets/timg2.jpg'),
                  date: '1.2 砖混结构外墙裂缝引起的渗漏：由于钢筋混凝土和砖砌体的线膨胀系数不同，在相同温差下，钢筋混凝土构件的伸缩值要比砖砌体大。当外墙砌体抗剪强度不够时就会引起墙体开裂。所产生的裂缝主要出现在顶层内外纵、横墙两端，靠山墙的开间表现最明显。裂缝一般从内横墙开始，沿45°延伸至外纵墙，在窗间呈横向或斜向分布，在顶层圈梁下皮也可能出现水平裂缝。'
                },
                {
                  url: require('../../assets/timg3.jpg'),
                  date: '1.3 砌体外墙缝隙引起的渗漏：框架结构的填充外墙，未按规定设置拉结钢筋、墙柱之间留设直茬.',
                }]
	    }

	  },
	  methods: {
      handleRow(index) {
        var theimg = document.getElementById("showimg")
        theimg.src = this.tableData[index]['url']
      },

	  }
  }

</script>

<style>
  .div_2_6{
    display: flex;
  }
	.textbox_2_6{
	  background-color: #fafafa;
	  width: 358px;
	  height: 598px;
	  overflow:scroll;
	}
  .m_2_6{
    width: 498px;
    height: 598px;
  }
  #showimg{
    width: 498px;
    height: 598px;
  }
  .p_2_6{
    font-family:"Times New Roman",Times, serif;
    font-size: 15px;
    font-weight: 300;
    color: #000000;
    float: left;
    margin: 4px 8px 4px 8px;
    letter-spacing:1px;
  }
  .current_p_2_6{
    background-color: #aaffff;
  }

</style>
