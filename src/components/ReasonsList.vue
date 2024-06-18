<script setup>
import { onMounted, ref } from 'vue';
import { delayMs } from '../tools/utils.js';
const props = defineProps(['baseReasons'])

const reasons = ref([]);
let index = 0;

onMounted(() => {
  const intervalId = setInterval(() => {
    reasons.value.push(props.baseReasons[index]);
    index += 1;

    if (index > props.baseReasons.length - 1) {
     clearInterval(intervalId);
    }
  }, delayMs);
})
</script>

<template>
  <TransitionGroup name="list" tag="ul">
    <li v-for="reason of reasons" v-bind:key="reason">
      <span>{{ reason }}</span>
    </li>
  </TransitionGroup>
</template>

<style scoped>
ul {
  width: fit-content;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
  /* transform: translateZ(30px); */
  transform: scale(3) translate(0, -30px);
}
</style>
