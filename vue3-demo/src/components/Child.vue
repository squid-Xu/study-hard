<template>
  <div>parent bound v-model is: {{ model }}</div>
  <div @click="aa">测试</div>
</template>
<script setup lang="ts">
const model = defineModel()

function aa() {
  model.value++
}
</script>
