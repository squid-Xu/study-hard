<template>
  <h1>lifecyc</h1>
  <button @click="count++">计算count{{ count }}</button>
  <button @click="num++">计算num{{ num }}</button>
  <button @click="handleClick">测试点击事件</button>
  <br />
  <br />
  <br />
  <button @click="watchHandle">watch回调</button>
  <div v-if="wt.count === 1" ref="wt">这是隐藏内容</div>

  <input type="text" ref="input" />
</template>
<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch,
  watchEffect,
  watchPostEffect
} from 'vue'

const count = ref(0)
const num = ref(0)

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log(`onMounted`)
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

watch(count, (newVal, oldVal) => {
  console.log('newVal,oldVal', newVal, oldVal)
})

watch(num, (val) => {
  console.log('val', val)
})

watch(
  () => count.value + num.value,
  (sum) => {
    console.log('sum', sum)
  }
)

watch([count, num], (aa) => {
  console.log('aa', aa)
})

const obj = reactive({ count: 0 })

// watch(obj.count, () => {
//   console.log('0000000')
// })

watch(
  () => obj.count,
  () => {
    console.log('=====')
  }
)

function handleClick() {
  console.log('--------------')
  obj.count++
  youInfo.sw = { a: 1, b: 2 }
}

watch(obj, (newValue, oldValue) => {
  console.log('newValue, oldValue', newValue, oldValue)
})

const youInfo = reactive({
  name: 'XX',
  age: 20,
  sw: {
    a: 10,
    b: 20
  }
})

watch(
  () => youInfo.sw,
  (newValue, oldValue) => {
    console.log('newValue, oldValue', newValue, oldValue)
  }
)

const wt = reactive({ count: 0 })
function watchHandle() {
  console.log('12121212')
  wt.count++
}
// watch(
//   () => wt.count,
//   (newValue, oldValue) => {
//     console.log('newValue, oldValue', newValue, oldValue)
//   }
//   //   { flush: 'post' }
// )

watchPostEffect(() => {
  console.log('/* 在 Vue 更新后执行 */')
})

const input = ref()
onMounted(() => {
  input.value.focus()
})
</script>
