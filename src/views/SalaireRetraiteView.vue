<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  "Au retour de la retraite à 60 ans",
  "À l'augmentation du SMIC à 1500€ nets",
  "À la revalorisation des petites retraites",
  "À l'indexation des salaires sur l'inflation",
  "À la revalorisation des salaires des fonctionnaires de 10% (infirmières, auxiliaires de vie, etc)",
  "À la suppression des aides publiques aux entreprises qui ont augmenté les dividendes à leurs actionnaires sans augmenter les salaires",
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Salaires & retraites'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * baseReasons.length" />
    </SectionElement>
  </div>
</template>

<style>
</style>
