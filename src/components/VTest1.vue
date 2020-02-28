<template>
  <div class="vtest1">
    <el-input placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
import Vue from 'vue'
var number=1
  export default{

    data() {
      return {
        awesome: "truthy",
        bccount: 1,
        radio: '1'
      }
    },
    methods:{
      add(){
        this.bccount++
        number++
      }
    }
  }



</script>


