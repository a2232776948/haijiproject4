
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-if="loginType === 'username1'">
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
<template v-else>
  <div class="vtest1" >
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <h1>{{awesome}}</h1>
    <form>
      <input type="button" v-on:click="add",click.once="doThis">
      <p>{{bccount}}</p>
    </form>

  </div>
</template>

<script>
import Vue from 'vue'
var number=1
  export default{
    el: "#vtest1",
    data() {
      return {
        awesome: "truthy",
        bccount: 1
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


