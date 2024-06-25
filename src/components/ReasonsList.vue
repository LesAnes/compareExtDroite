<script setup>
import { onMounted, ref } from 'vue';
import { delayMs } from '../tools/utils.js';

const props = defineProps(['baseReasons'])

const reasons = ref([]);
let index = 0;

const items = ref(null)

const getElementWidth = (index) => {
  if (!items.value) return;

  const currentItem = items.value[index]
  if (!currentItem) return;

  const offsetLeft = currentItem.parentNode.querySelector(".cursor").offsetLeft

  return `${currentItem.parentNode.offsetWidth - offsetLeft - 4}px`;
}

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
    <li v-for="(reason, index) in reasons" v-bind:key="reason[0]" :class="{ '-sources': reason.length > 1 }">
      <div>
        <p>
          <span ref="items" class="reason-text" :style="'--dotted-line-width:' + (reason.length > 1 ? getElementWidth(index) : '0px')">
            {{ reason[0] }}
          </span>
          <span class="cursor"></span>
        </p>
        <div class="source"><a v-if="reason.length > 1" :href="reason[1]" target="_blank">source</a></div>
      </div>
    </li>
  </TransitionGroup>
</template>

<style scoped>
ul {
  width: 100%;
}

ul > li > div {
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 60px;
}

ul > li > div > p {
  position: relative;
}

ul > li > div span.reason-text::after {
  content: '';
  border-bottom: 1px dotted #1b222c;
  position: absolute;
  width: var(--dotted-line-width);
  bottom: 6px;
  margin-left: 4px;
}

ul > li > div .source {
  display: flex;
  justify-content: end;
}

ul > li > div .source a {
  padding: 0 0.5rem;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(3) translate(0, -30px);
}
</style>
