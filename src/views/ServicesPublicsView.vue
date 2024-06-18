<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  "Recrutement de sapeurs-pompiers et revalorisation des salaires des agents de police",
  "Augmentation des moyens alloués aux hôpitaux",
  "Baisse de la TVA sur les transports en commun"
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Services Publics'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * baseReasons.length" />
    </SectionElement>
  </div>
</template>

<style>
</style>
