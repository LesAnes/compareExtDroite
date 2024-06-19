<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const props = defineProps(['timeoutMs'])
let plotTwist = ref(false);

onUnmounted(() => {
  document.querySelector('body').classList.remove('-twisted')
});


onMounted(() => {
  setTimeout(() => {
    plotTwist.value = true;
    document.querySelector('body').classList.add('-twisted')
    window.document.title = 'Front Populaire';

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = '/favicon2.ico';
  }, props.timeoutMs || 2000)
});
</script>

<template>
  <Transition>
    <div v-if="plotTwist" class="plot-section">
      <h2 class="section">Le Front Populaire s'engage POUR</h2>
      <div class="section img">
        <img alt="Front populaire logo" class="logo" src="@/assets/logo1.png" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
h2 {
  background-color: #68c984;
  padding: 0.1875rem 0.5rem;
  border-radius: 3px;
  font-weight: 900;
  text-align: center;
}

.section {
  margin-top: 1rem;
}

.plot-section {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.logo {
  width: 200px;
}

@media (min-width: 1024px) {
  .logo {
    width: 400px;
  }
}

</style>
