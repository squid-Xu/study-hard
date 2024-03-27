<template>
  <p>第一种接收值：{{ first }}</p>
  <p>第二种接收值:{{ second }}</p>
  <button @click="$emit('handleSecond', 20)">第二种</button>
  <p>第三种接收值:{{ third }}</p>
  <p>第四种接收值:{{ $attrs.four }}</p>
  <p>第五种接收值:{{ $attrs.fifth }}</p>
  <p>第六种接收值:{{ sixth }}</p>
  <button @click="handleTitle">{{ title }}</button>
  <p>第七种接收值:{{ seventh }}----{{ seventh1 }}</p>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue'

defineProps({
  first: {
    type: Number,
    defaut: 0
  },
  second: {
    type: Number,
    defaut: 0
  },
  third: {
    type: Number,
    defaut: 0
  }
})

const emit = defineEmits(['handleSecond', 'handleThird'])

function handleThird() {
  console.log('1111')
  emit('handleThird')
}

defineExpose({ handleThird })

const sixth = defineModel()

const title = defineModel('title')

function handleTitle() {
  title.value = '你好呀'
}

const seventh = inject('seventh')
const seventh1 = inject('seventh1')
</script>
