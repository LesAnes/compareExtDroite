<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  ['Le droits au chômage après abandon de poste', 'https://www.la-croix.com/Economie/Assurance-chomage-deputes-votent-assimiler-labandon-poste-demission-2022-10-05-1201236345'],
  ['Les allocations chômage pour les employés refusant un CDI à la fin du CDD', 'https://datan.fr/votes/legislature-16/vote_210'],
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Travail'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * (baseReasons.length + 1)" />
    </SectionElement>
  </div>
</template>

<style>
</style>
