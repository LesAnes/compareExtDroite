<template>
  <div class="ext-gauche">
    <p>Le RN est <span class="bold">d'extrême droite</span></p>
    <h2>Le Front Populaire n'est pas <span class="bold">d'extrême gauche</span></h2>
    <a href="https://www.legifrance.gouv.fr/ceta/id/CETATEXT000049267171" target="_blank">source</a>
    <div class="spacing">
      <img alt="Front populaire logo" class="logo" src="@/assets/logo.png" />
    </div>
  </div>
</template>

<style>
.ext-gauche {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200px;
}

@media (min-width: 1024px) {
  .ext-gauche {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
