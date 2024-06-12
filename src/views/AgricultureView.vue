<template>
  <div class="agriculture">
    <p>Le RN <span class="bold">s'oppose</span> à forcer la grande distribution a donner des revenus décents aux agriculteurs</p>
    <h2>Le Front Populaire s'engage <span class="bold">POUR</span></h2>
    <div>
      <a href="https://www.vie-publique.fr/loi/293676-garantir-un-revenu-digne-aux-agriculteurs-proposion-de-loi-ecologiste" target="_blank">source</a>
      <a href="https://www.assemblee-nationale.fr/dyn/16/scrutins/3653" target="_blank">source</a>
    </div>
    <div class="spacing">
      <img alt="Front populaire logo" class="logo" src="@/assets/logo.png" />
    </div>
  </div>
</template>

<style>
.agriculture {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200px;
}

@media (min-width: 1024px) {
  .agriculture {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
