<template>
  <div id="home">
    <div id="back-ground1">
      <div id="back-ground2">
        <Head1></Head1>
        <div id="back-ground3">
          <img src="@/assets/head2.png" width="800" height="30">
        </div>
        <div id="back-ground4">
          <div id="bg4-l">
            <img src="@/assets/head3.png" width="500" height="30">
          </div>
        </div>
        <div id="back-ground5"></div>
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
    color: burlywood;
    background: burlywood ;
    margin: 0 auto;
  }
  #back-ground2{
    height: 720px;
    width: 1060px;
    background: white;
    margin: 0 auto;
  }
  #back-ground3{
    height: 30px;
    width: 1060px;
    background: #B2CDF7;
  }
  #back-ground4{
    height: 30px;
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
    width: 400px;
    background: white;
  }

</style>
