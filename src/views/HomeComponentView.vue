<script setup>
</script>

<template>
  <div class="home">
    <h2>Pourquoi voter pour nous ?</h2>
    <h3>Notre avis sur : </h3>
    <ul>
      <li><RouterLink to="/salaire-et-retraite">Salaires & retraites</RouterLink></li>
      <li><RouterLink to="/prix">Pouvoir d'achat</RouterLink></li>
      <li><RouterLink to="/fiscalite">Fiscalité</RouterLink></li>
      <li><RouterLink to="/service-publics">Services Publics</RouterLink></li>
      <li><RouterLink to="/agriculture">Agriculture</RouterLink></li>
      <li><RouterLink to="/travail">Travail</RouterLink></li>
      <li><RouterLink to="/logement">Logement</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
  margin-bottom: 1rem;
}

ul a {
  list-style-type: circle;
}
</style>
