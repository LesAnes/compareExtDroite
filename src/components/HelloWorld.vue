<script setup>
</script>

<template>
  <div class="greetings">
    <h1>Bravo !</h1>
    <h2>
      Nous avons gagné les européennes, maintenant nous avons besoin de vous pour les législatives !
    </h2>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 900;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3,
.greetings p {
  text-align: center;
}

.merdella {
  margin-top: 1rem;
  width: 100%;
  border-radius: 4px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3,
  .greetings p {
    text-align: left;
  }
}
</style>
