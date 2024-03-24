<template>
  <h1>provide-inject</h1>
  <Footer></Footer>
</template>
<script setup lang="ts">
import { provide, ref } from 'vue'
import Footer from './components/footer.vue'

provide('message', 'hello')

const count = ref(0)

provide('count', count)

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>
