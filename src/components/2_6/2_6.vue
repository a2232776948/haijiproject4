<template>
	<div class="div_2_6">
		<div class="textbox_2_6">
		  <p v-for="(item,index) in raw_text.split('\n')" v-on:click="changeimage(index)" class="p_2_6">
        &nbsp;&nbsp;&nbsp;&nbsp;{{item}}
      </p>

		</div>
    <div class="m_2_6 bor_2_6">
      <div>
      <img class="dd_2_6 img_2_6" src='../../assets/timg1.jpg'/>
      <img class="dd_2_6 img_2_6_hidden" src='../../assets/timg2.jpg'>
      <img class="dd_2_6 img_2_6_hidden" src='../../assets/timg3.jpg'>
      <img class="dd_2_6 img_2_6_hidden" src='../../assets/timg4.jpg'>

      </div>

    </div>
	</div>

</template>

<script>
	export default{
	  data (){
	    return {
        raw_text:`
          1.1 混凝土外墙裂缝引起的渗漏：外墙上出现贯通的裂缝，由地基不均匀沉降、温度变形引起的开裂。砼表面的蜂窝、麻面、孔洞如处理不当也易引起渗漏。
          1.2 砖混结构外墙裂缝引起的渗漏：由于钢筋混凝土和砖砌体的线膨胀系数不同，在相同温差下，钢筋混凝土构件的伸缩值要比砖砌体大。当外墙砌体抗剪强度不够时就会引起墙体开裂。所产生的裂缝主要出现在顶层内外纵、横墙两端，靠山墙的开间表现最明显。裂缝一般从内横墙开始，沿45°延伸至外纵墙，在窗间呈横向或斜向分布，在顶层圈梁下皮也可能出现水平裂缝。
          1.3 砌体外墙缝隙引起的渗漏：框架结构的填充外墙，未按规定设置拉结钢筋、墙柱之间留设直茬.
          `,
	    }

	  },
	  methods: {
	    changeimage(index){
        var theimgs = document.getElementsByClassName("dd_2_6")
        console.log(theimgs.length)
        var plist = document.getElementsByTagName('p')
        for(var i=0;i<plist.length;i++){
          plist[i].className = "p_2_6";
        }

        for(var i=0;i<theimgs.length;i++){
          theimgs[i].className = "dd_2_6 img_2_6_hidden"
          console.log(theimgs[i])
        }

        plist[index].className = "p_2_6 current_p_2_6"
        theimgs[index-1].className = "dd_2_6 img_2_6"
	    }
	  }
  }

</script>

<style>
  .div_2_6{
    display: flex;
  }
	.textbox_2_6{
	  background-color: #ffffff;
	  width: 358px;
	  height: 598px;
	  overflow:scroll;
	}
  .m_2_6{
    width: 498px;
    height: 598px;
  }
  .img_2_6{
    width: 498px;
    height: 598px;
  }
  .img_2_6_hidden{
    width: 498px;
    height: 598px;
    display: none;
  }
  .bor_2_6{
    border-style: solid;
    border-width: 1px;
  }
  .p_2_6{
    font-family:"Times New Roman",Times, serif;
    font-size: 15px;
    font-weight: 300;
    color: #000000;
    float: left;
    margin: 4px 8px 4px 8px;
  }
  .current_p_2_6{
    background-color: #aaffff;
  }

</style>
