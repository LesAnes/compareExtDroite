<template>
  <div class="retraite">
    <p>Le RN <span class="bold">s'oppose</span> au retour de la retraite à 60 ans</p>
    <h2>Le Front Populaire s'engage <span class="bold">POUR</span></h2>
    <a href="https://www.lemonde.fr/videos/video/2024/06/11/jordan-bardella-retropedale-sur-l-abrogation-de-la-reforme-des-retraites-en-cas-d-election_6238664_1669088.html" target="_blank">source</a>
    <div class="spacing">
      <img alt="Front populaire logo" class="logo" src="@/assets/logo.png" />
    </div>
  </div>
</template>

<style>
.retraite {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200px;
}

@media (min-width: 1024px) {
  .retraite {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
