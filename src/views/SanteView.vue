<template>
  <div class="santé">
    <p>Le RN <span class="bold">s'oppose</span> à allouer plus de moyen aux personnels soignants</p>
    <h2>Le Front Populaire s'engage <span class="bold">POUR</span></h2>
    <div class="spacing">
      <img alt="Front populaire logo" class="logo" src="@/assets/logo.png" />
    </div>
  </div>
</template>

<style>
.santé {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200px;
}

@media (min-width: 1024px) {
  .santé {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
