<template>
  <input type="text" v-model="sum" />
  <Study :count="count" @change="change" v-model="sum" />
  <h4>{{ dbCount }}</h4>
  <br />
  <br />
  <input type="text" ref="input" />
  <FancyButton> 你好 </FancyButton>
</template>
<script setup>
import Study from '@/components/study.vue'
import FancyButton from '@/components/FancyButton.vue'
import { computed, onMounted, ref, watch } from 'vue'

const count = ref(0)
const sum = ref(0)

const input = ref()

function change() {
  count.value++
}

onMounted(() => {
  input.value.focus()
})

watch(count, (newVal, oldVal) => {
  console.log('newVal,oldVal', newVal, oldVal)
})

const dbCount = computed(() => {
  return count.value * 2
})
</script>
