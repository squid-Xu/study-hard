<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @[eventName]="handleClick">{{ text }}{{ $aa }}</button>

    <a :href="href">百度</a>

    <h2>{{ count }}</h2>
    <button @click="add">count++</button>

    <h2>{{ state.count }}</h2>

    <h3></h3>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'

let href = ref('https://baidu.com')

let eventName = ref('click')

//基于依赖追踪的响应式，当一个组件首次渲染时，Vue会追踪在渲染过程中使用的每一个ref，然后，当ref被修改时，它会触发追踪它的组件的一次重新渲染。
let count = ref(0)
count.value++

async function add() {
  count.value++
  await nextTick()
  console.log('Dom 更新了')
}

const state = reactive({ count: 0 })

// Dom更新时机，修改状态时，Dom会自动更新，Dom更新不是同步的，Vue会在next tick 更新周期中缓冲所有的修改状态，不管你进行了多少次修改，每个组件都只会更新一次。

console.log(count.value)

let text = ref('测试按钮')
function handleClick() {
  console.log(window.b())
}

const author = reactive({
  name: 'John Doe',
  books: ['aa', 'bb', 'cc']
})

const published = computed(() => {
  return author.books.length > 1 ? 'Yes' : 'No'
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
