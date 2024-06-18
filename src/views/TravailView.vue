<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  'Le droits au chômage après abandon de poste',
  'Les allocations chômage pour les employés refusant un CDI à la fin du CDD'
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Travail'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * baseReasons.length" />
    </SectionElement>
  </div>
</template>

<style>
</style>
