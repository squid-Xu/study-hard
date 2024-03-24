<template>
  <h1>composables</h1>
  <h2>Mouse position is at: {{ x }}, {{ y }}</h2>
</template>
<script setup lang="ts">
// import { onMounted, onUnmounted, ref } from 'vue'

// const x = ref(0)
// const y = ref(0)

// function update(event) {
//   x.value = event.pageX
//   y.value = event.pageY
// }
// onMounted(() => window.addEventListener('mousemove', update))
// onUnmounted(() => window.removeEventListener('mousemove', update))

//组合式函数
import { useMouse } from './mouse'

const { x, y } = useMouse()
</script>
