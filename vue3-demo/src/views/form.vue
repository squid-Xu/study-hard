<template>
  <h1 :class="{ active: isActive }">12121</h1>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ item }}</li>
  </ul>
  <ul>
    <li v-for="(value, key, index) in myObject" :key="index">{{ key }}:{{ value }}:{{ index }}</li>
  </ul>
  <span v-for="n in 5" :key="n">{{ n }}</span>
  <template v-for="(item, index) in list" :key="index">
    <li>{{ index }}</li>
    <li>{{ item }}</li>
  </template>

  <br />
  <br />
  <br />
  <div v-for="(item, index) in eventNumber" :key="index">{{ item }}</div>

  <input type="text" :value="text" @input="(event) => (text = event.target.value)" />
  <input type="text" v-model="text" />
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

let isActive = ref(true)

let text = ref()

const list = ref([1, 2, 3])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const eventNumber = computed(() => {
  // return [...list.value].reverse()
  // return [...list.value].sort()
  return [...list.value].splice(1, 2)
})
</script>
<style>
.active {
  color: red;
}
</style>
