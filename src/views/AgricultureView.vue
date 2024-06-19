<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  ["À forcer la grande distribution à acheter à des prix décents aux agriculteurs", 'https://datan.fr/votes/legislature-16/vote_3653'],
  ["Plafonner les aides de la PAC (politique agricole commune)", 'https://reporterre.net/PAC-libre-echange-en-Europe-la-droite-vote-contre-les-paysans'],
  ["Soutenir la filière bio", 'https://datan.fr/votes/legislature-16/vote_2890'],
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Agriculture'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * (baseReasons.length + 1)" />
    </SectionElement>
  </div>
</template>

<style>
</style>
