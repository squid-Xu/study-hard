<template>
  <div>
    <h3>导航</h3>
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <RouterLink :to="item.path">{{ item.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { constantRouterMap } from '../../router/router-config'
const nav = constantRouterMap.map((v) => {
  return {
    path: v.path,
    title: v.meta.title
  }
})
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
