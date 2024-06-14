<script setup>

</script>

<template>
  <div class="greetings">
    <h1>Tu l'as fait !</h1>
    <h3>
      Le RN est au porte du pouvoir
    </h3>
    <p>Pourquoi voter pour nous ?</p>
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

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3,
  .greetings p {
    text-align: left;
  }
}
</style>
