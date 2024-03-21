<template>
  <h1>{{ title }}</h1>
  <button @click="$emit('change')">增加字体大小按钮</button>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

defineProps(['title'])
defineEmits(['change'])
</script>
