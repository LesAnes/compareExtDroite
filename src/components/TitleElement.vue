<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="title">
    <h1>{{ props.title }}</h1>
  </div>
</template>

<style scoped>
.title {
  width: 100%;
}

h1 {
  font-weight: bold;
  font-size: 2rem;
}
</style>
