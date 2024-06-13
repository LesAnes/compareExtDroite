<script setup>
import { onUnmounted, ref } from 'vue';
import { filename } from 'pathe/utils'


const glob = import.meta.glob('@/assets/fp-art-*.jpg', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
  
let plotTwist = ref(false);
const imageLinks = Object.values(images);
let imageArt = imageLinks[Math.floor(Math.random() * imageLinks.length)]

onUnmounted(() => {
  document.querySelector('body').classList.remove('-twisted')
});

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
}, 2000)
</script>

<template>
  <Transition>
    <div v-if="plotTwist">
      <h2 class="spacing"><slot>Le Front Populaire s'engage POUR</slot></h2>
      <div class="spacing img">
        <img alt="Front populaire logo" class="logo" src="@/assets/logo.png" />
      </div>
      <div class="spacing img">
        <img alt="Front populaire img" class="logo" :src="imageArt" />
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

.img {
  display: flex;
  justify-content: center;
}

.logo {
  width: 200px;
}
</style>
