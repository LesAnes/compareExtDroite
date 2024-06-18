<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  "Blocage des prix des produits de première nécessité",
  "Gratuité des premiers mètres cubes d'eau",
  "Gel du prix des loyers",
  "Augmentation des hébergements d'urgence",
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Pouvoir d\'achat'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * baseReasons.length" />
    </SectionElement>
  </div>
</template>

<style>
</style>
