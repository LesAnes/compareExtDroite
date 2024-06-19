<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  ["Blocage des prix des produits de première nécessité", 'https://www.lemonde.fr/economie/article/2023/04/06/inflation-l-assemblee-nationale-adopte-des-mesures-de-blocage-de-prix_6168547_3234.html'],
  ["Gratuité des premiers mètres cubes d'eau", 'https://datan.fr/votes/legislature-16/vote_131'],
  ["Gel du prix des loyers", 'https://www.bfmtv.com/politique/parlement/loyers-renaissance-et-le-rn-votent-contre-le-gel-proposee-par-la-nupes-et-prolongent-le-plafonnement-de-la-hausse_AD-202306010090.html'],
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Pouvoir d\'achat'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * (baseReasons.length + 1)" />
    </SectionElement>
  </div>
</template>

<style>
</style>
