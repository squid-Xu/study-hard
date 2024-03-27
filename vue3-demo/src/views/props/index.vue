<template>
  <h1>vue2组件通信（8种）</h1>
  <child
    :first="first"
    :second="second"
    @handleSecond="handleSecond"
    ref="childDom"
    :third="third"
    @handleThird="handleThird"
    :four="four"
    :fifth="fifth"
    v-model="sixth"
    v-model:title="title"
  ></child>
</template>
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import child from './components/child.vue'

const first = ref(1)
const second = ref(2)
const third = ref(3)
const four = ref(4)
const fifth = ref(5)
const sixth = ref(6)
const seventh = ref(7)
const seventh1 = ref(77)

const title = ref('你好')

provide('seventh', seventh)
provide('seventh1', seventh1)

function handleSecond(val: number) {
  second.value = val
}

function handleThird() {
  third.value = 30
}

const childDom: any = ref(null)

onMounted(() => {
  setTimeout(() => {
    console.log('0000')
    childDom?.value?.handleThird()
  }, 1000)
})
</script>
