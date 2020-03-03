<template>
    <div class="mainbox">
        <div style="width: 10px; height: 25px;"></div>
        <div class="bgbox">
          <div class="m bor">
            <h3>建筑墙体基本信息</h3>
            <div class="s bor">
              <form action="" method="get">
                <p>墙体厚度: <input type="text" name="wall" /></p>
                <p>防水材料: <input type="text" name="prof" /></p>
                <p>管道类型: <input type="text" name="piptype" /></p>
              </form>
            </div>
          </div>

        </div>
        <div style="width: 880px; height: 5px;"></div>
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

	.mainbox{
		width: 780px;
    height: auto;
		background-color: #E8BF6A;
	}
  .bgbox{
    width: 760px;
    height: 420px;
    background-image: url("../../assets/timg1.jpg");
    background-repeat: no-repeat;
    background-size: 760px 415px;
    margin-left: 10px;
  }

  .m{
    width: 280px;
    height: 410px;
  }
  .s{
    width: 270px;
    height: 340px;
    margin: 5px;
  }
  .bor{
    border-style: solid;
    border-width: 1px;
  }
  p{
    font-weight: bold;
  }
  input{
    background-color: #aaffff;
  }
</style>
