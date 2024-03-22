<template>
  <h3>{{ count }}</h3>
  <button @click="handleClick">按钮</button>
  <br />
  <input type="text" v-model="sum" />
</template>
<script setup>
defineProps(['count'])
const emit = defineEmits(['change'])
function handleClick() {
  emit('change')
}

const sum = defineModel()
</script>
