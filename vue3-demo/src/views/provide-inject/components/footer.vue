<template>
  <h2>footer-message:{{ message }}</h2>
  <button @click="updateLocation">{{ location }}</button>
  <deepchild></deepchild>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import deepchild from './deepchild.vue'

const message = inject('message')

const { location, updateLocation } = inject('location')
</script>
