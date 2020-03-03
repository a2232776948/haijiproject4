<template>
  <div id="app">
    <button type="button" class="btn" @click="showPopup">Click me</button>
    <popup v-show="isPopupVisible" @close="closePopup">
    </popup>
  </div>
</template>

<script>
import popup from '@/components/popup'
export default{
  name: 'app',
  components: {
    popup
  },
  data (){
    return {
      isPopupVisible: false,
    }
  },
  methods: {
    showPopup(){
      this.isPopupVisible = true
    },
    closePopup(){
      this.isPopupVisible = false
    }

  }
}
</script>
