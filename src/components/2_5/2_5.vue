<template>
  <div>
    <div class="textbox_2_5">
      <p id="title_2_5">渗水原因分析</p><br/><br/>
      <p class="p_2_5" v-for="item in raw_text.split('\n')">{{item}}</p>
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      props: ['title']
      return {
        raw_text: `
        外墙渗漏的原因分析及防治措施
        在建筑工程中普遍存在着外墙面渗漏水的问题。这也是建筑工程中存在的一种质量通病，轻者室内墙面渗水，重者造成室内墙面抹灰层脱落影响到使用功能。外墙渗漏形成的原因比较复杂，它涉及到设计、材料、施工、使用等多个环节。
        1 建筑物外墙渗漏的形式
        1.1 混凝土外墙裂缝引起的渗漏：外墙上出现贯通的裂缝，由地基不均匀沉降、温度变形引起的开裂。砼表面的蜂窝、麻面、孔洞如处理不当也易引起渗漏。
        1.2 砖混结构外墙裂缝引起的渗漏：由于钢筋混凝土和砖砌体的线膨胀系数不同，在相同温差下，钢筋混凝土构件的伸缩值要比砖砌体大。当外墙砌体抗剪强度不够时就会引起墙体开裂。所产生的裂缝主要出现在顶层内外纵、横墙两端，靠山墙的开间表现最明显。裂缝一般从内横墙开始，沿45°延伸至外纵墙，在窗间呈横向或斜向分布，在顶层圈梁下皮也可能出现水平裂缝。
        1.3 砌体外墙缝隙引起的渗漏：框架结构的填充外墙，未按规定设置拉结钢筋、墙柱之间留设直茬。此外，由于未按规定和操作规程施工框架梁底最后一层砌块的砌筑，造成砌块竖缝及水平灰缝不饱满，同时梁底还存在由于砌体沉降引起的缝隙。另外，墙体砌筑施工中，脚手架眼填塞不实、穿墙管线等部位塞灰不严密，都易留下渗水通道。
        1.4 混水墙外粉刷分格缝破损引起的渗漏：外粉刷分格缝由于不交圈、不平直或砂浆等残渣在缝内未清除，使雨水积聚在分格缝内，或者分格条嵌入过深，使分格缝底部抹灰层厚度不够、雨水浸入墙内。还有缝内未嵌填密封材料或嵌填的密封材料老化，失去防水密封的作用而引起渗漏。
        1.5 门窗洞口周边封堵不严引起的渗漏：目前大多数建筑物门窗均采用铝合金及塑钢材料，这些材料与墙体材料的材质相差较大，当室内外温差变化大时，它们的界面之间易产生缝隙导致渗漏。
        1.6 细部构造处理不当引起的渗漏：外墙上有许多凸出外墙面的构件和设备，如挑檐、雨棚、阳台、窗套、落水管等。这些构件有的没做滴水线，或滴水线做得不标准，造成水沿外墙流淌；有的排水坡度不够，甚至反泛水；有的落水口堵塞，造成积水，当与外墙面交接处防水高度不够时，造成外墙渗漏；有的落水管密封不严，又靠墙安装，若有脱节或松动，导致雨水沿外墙流淌而出现渗漏。
        1.7 外墙装饰面施工质量不良引起的渗漏：在进行外墙装饰前，没有按施工要求堵塞墙体上的空洞和缝隙。饰面砖勾缝用砂浆标号太低，或勾缝不认真，形成很多毛细孔。饰面砖粘贴不实，出现空鼓，形成储水囊。涂装墙面所用涂料质量不合格，涂膜厚度不够，适应基层变形能力差、年久老化脱落、失去防水效果。
        2 建筑物外墙渗漏的主要原因
        2.1 材料方面的原因 ①防水材料质量下降，合格率普遍低下，尤其是小型厂生产的产品，在生产过程中没有经过严格的工艺处理，质量关、技术关都没把好，甚至生产防水材料的原材料的质量也有问题。②砌块、机制粘土砖、水泥的质量达不到要求，强度不够，施工所用的砂石含泥量大、超出规范要求。
        2.2 施工方面的原因
        2.2.1 不按设计要求和施工规范进行施工，砼配和比掌握的不准确，水灰比过大，影响到砼墙体的强度。浇筑时振捣不密实、养护不及时、拆模过早，也会造成砼墙体出现蜂窝、麻面、孔洞以及裂缝等现象。
        2.2.2 墙体砌筑质量不良，在砖砌体的诸种质量通病中，影响外墙渗漏的原因有：砌筑砂浆配合比不符合设计及规范要求；砖层水平灰缝砂浆饱满度不足80％，竖向灰缝无砂浆（空缝或瞎缝），为雨水渗漏预留了内部通道；框架结构中填充墙砌至接近梁底或板底时，未经停歇，即砌斜砖顶至梁、板底，以后随着砌体因灰缝受压缩变形，造成墙体下沉，斜砌砖体与梁、板间形成间隙，外墙抹灰或刮毛时，在此间隙处形成裂缝；框架柱与填充墙间的拉接筋不满足砖的模数，砌筑时折弯钢筋压入砖层内，形成局部位置砌体与柱间产生较大的间隙，抹灰时该处易产生裂缝。
        2.2.3 外墙洞口处理不当 上料口封堵砌筑时，与原有洞口接搓不严；工程竣工后，住户在墙体上凿取空调管洞、太阳能热水器管孔、排气扇孔洞等，造成墙体及外粉裂缝。由于条件的限制，住户及装修者，无法对此进行认真的处理；剪力墙施工时的螺栓套管在内外粉前，未认真进行封堵或未封堵。
        2.2.4 外墙抹灰或粘贴面砖的质量不合要求 外墙抹灰空鼓、裂缝；使用了翘曲、开裂或缺角的面砖；面砖脱落，未认真勾缝。
        2.2.5 铝合金或塑钢窗框与墙体连结不牢固，密封不严 墙体洞口尺寸或位置不符合设计要求，窗框与墙体间的间隙未能认真处理，间隙太小，无法填充材料；间隙过大，填充不实；窗洞抹灰由内、外粉两家施工单位施工，施工的时间不同，使用的材料不同，形成缝隙；施工顺序不当。外粉刮毛后，即安装窗框，造成窗框与墙体间的砂浆不易填实抹平。加之固定窗框的调整垫块残留于窗框下，或拆除后二次填充抹灰质量无法保障；窗框与墙体固定不牢，致使窗子在风荷载作用下产生位移，而使密封材料产生裂缝；窗安装后，没有在窗框外侧与墙体的连接部位进行密封或密封失效；窗框材料与墙体材料热膨胀系数不同，窗框与墙体连接处易产生细小裂缝。
        3 建筑外墙渗漏的防治措施
        3.1 严格控制外墙施工质量 为保证外墙施工质量，施工中要严格控制砼配合比和水灰比，浇筑施工时要按顺序、方向进行振捣，不得发生漏振现象，砼浇筑完毕后及时进行覆盖养护，待24小时砼有一定的强度后方可拆除模板；砌筑用砖和砂浆的质量及强度等级必须符合设计要求，一般宜用混合砂浆砌筑（基础以上）。砌砖前应提前一天把砖浇水湿润，使砖的含水率达到20％左右，墙体砌筑时灰缝的厚度、饱满度及墙体的垂直度和平整度均应符合规范要求。框架填充墙砖砌体与梁接合部位必须按设计与构造要求配置拉结筋，框架梁底与砖墙顶面接触处应待墙体自然沉降稳定后（不能少于一周），再用斜砖挤浆封堵密实。
        砼梁柱与砌体交接处，抹灰前要按规定铺设抗裂网，然后再按要求进行抹灰，以防止抹灰层在接合处产生裂缝。
        另外，对于外墙上的门窗洞口、脚手架眼、预留洞口、挑檐、雨棚、阳台、窗套、落水管等细部要特别注意，应严格遵照设计及施工规范进行施工，这些部位都是防渗漏的薄弱点。
        3.2 外墙铝合金、塑钢窗框四周的防渗处理 铝合金、塑钢窗框四周要采用松散材料（如矿棉条、玻璃丝棉条等）或化学泡沫剂，进行分层密实封填，外墙抹灰时窗洞外侧靠框边处必须预留深5ｍｍ，宽5—8ｍｍ的槽口，以保证密封胶的粘结性和密封性。填嵌密封材料的槽口基层必须干燥并清理干净，密封胶应均匀地填满槽口，表面不得有缝隙、气孔等。
        3.3 外墙防渗处理 外墙细部防渗处理包括管道穿墙部位的洞口修补、外墙立管固定处的防水密封处理等。瓷砖贴面应注意面砖粘结剂的选用和勾缝处理，避免外墙砖脱落以及灰缝进水引起的渗透。用涂膜防水涂料。采用外墙涂膜防水材料在整个墙面形成一层完整的无缝防水层，材料的质量直接影响对外墙的保护效果。只有形成一定厚度的弹性涂膜才能保证涂膜防水性能以及对基层微小缝的适应性。
        `
      }
    }

  }
</script>

<style>
  .textbox_2_5{
    color: #000000;
    background-color: #ffffff;
    width: 858px;
    height: 598px;
    overflow:scroll;
  }
  #title_2_5{
    font-family:"Times New Roman",Times, serif;
    font-size: large;
    margin: 5px;
    float: left;
  }
  .p_2_5{
    font-family:"Times New Roman",Times, serif;
    font-size: 15px;
    font-weight: 300;
    color: #606266;
    float: left;
    margin: 1px 8px 1px 8px;
  }

</style>
