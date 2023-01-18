<template>
  <button @click="handleDown">按钮</button>
</template>
<script>
import { defineComponent, onMounted, ref, computed } from 'vue'
export default {
  setup () {
    const handleDown = () => {
      console.log('点击了')
    }

    return {
      handleDown
    }
  }
}
</script>