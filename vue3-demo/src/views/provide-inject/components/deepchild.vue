<template>
  <h3>deepChild-count:{{ count }}</h3>
</template>
<script setup lang="ts">
import { inject } from 'vue'

const count = inject('count')
</script>
