<template>
  <div class="gel">
    <p>Le RN <span class="bold">s'oppose</span> au gel des prix des produits de première nécessité</p>
    <h2>Le Front Populaire s'engage <span class="bold">POUR</span></h2>
    <a href="https://www.assemblee-nationale.fr/dyn/15/scrutins/4289" target="_blank">source</a>
    <div class="spacing">
      <img alt="Front populaire logo" class="logo" src="@/assets/logo.png" />
    </div>
  </div>
</template>

<style>
.gel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200px;
}

@media (min-width: 1024px) {
  .gel {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
