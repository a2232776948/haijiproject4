<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-radio v-model="radio" label="1">备选项</el-radio>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        radio:''
      }
    }
  }
</script>
