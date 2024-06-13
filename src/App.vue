<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

window.document.title = window.location.hostname.replace('.fr', '').split('-').map(word => `${word[0].toUpperCase()}${word.slice(1, word.length)}`).join(' ')
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />

      <nav>
        <RouterLink to="/smic">SMIC</RouterLink>
        <RouterLink to="/retraite">Retraite</RouterLink>
        <RouterLink to="/agriculture">Agriculture</RouterLink>
        <RouterLink to="/sante">Santé</RouterLink>
        <RouterLink to="/taxer">Taxer</RouterLink>
        <RouterLink to="/gel">Gel des prix</RouterLink>
        <RouterLink to="/extreme-gauche">Extrême gauche</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid rgba(60, 60, 60, 0.12);
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(160px / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
