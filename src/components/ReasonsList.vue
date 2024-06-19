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
    <li v-for="reason of reasons" v-bind:key="reason[0]">
      <div>
        <span>{{ reason[0] }}</span>
        <a class="source" v-if="reason.length > 1" :href="reason[1]" target="_blank">source</a>
      </div>
    </li>
  </TransitionGroup>
</template>

<style scoped>
ul {
  width: 100%;;
}

ul > li > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
  /* transform: translateZ(30px); */
  transform: scale(3) translate(0, -30px);
}
</style>
