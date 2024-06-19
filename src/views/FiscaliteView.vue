<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  ["Rétablissement de l'ISF pour taxer les milliardaires", 'https://datan.fr/votes/legislature-16/vote_325'],
  ["Taxe sur les superprofits", 'https://datan.fr/votes/legislature-16/vote_105'],
  ["Taxe sur les revenus supérieurs à 3 millions d'euros"],
  ["Augmentation des moyens pour lutter contre la fraude fiscale", 'https://datan.fr/votes/legislature-15/vote_1166'],
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Fiscalité'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * (baseReasons.length + 1)" />
    </SectionElement>
  </div>
</template>

<style>
</style>
