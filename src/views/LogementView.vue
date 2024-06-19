<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  ["Créer une taxe sur les bureaux vacants", 'https://datan.fr/votes/legislature-16/vote_3442'],
  ["Augmentation des hébergements d'urgence", 'https://www.lemediasocial.fr/plf-2024-le-gouvernement-refuse-d-augmenter-les-places-d-hebergement-d-urgence_HGBTPs'],
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
