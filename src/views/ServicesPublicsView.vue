<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  ["Recrutement de sapeurs-pompiers et revalorisation des salaires des agents de police"],
  ["Augmentation des moyens alloués aux hôpitaux", 'https://www.publicsenat.fr/actualites/sante/budget-2024-le-senat-reduit-dun-tiers-les-moyens-alloues-a-laide-medicale-detat'],
  ["Baisse de la TVA sur les transports en commun", 'https://www.publicsenat.fr/actualites/politique/budget-le-senat-vote-une-baisse-de-la-tva-sur-les-transports-en-commun-227977'],
  ["Améliorer le modèle économique et la qualité d'accueil des crèches", 'https://datan.fr/votes/legislature-16/vote_3048'],
  ["Augmenter le budget des préfectures", 'https://datan.fr/votes/legislature-16/vote_2826'],
  ["Lutter contre les déserts médicaux", 'https://datan.fr/votes/legislature-16/vote_1812'],
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Services Publics'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * (baseReasons.length + 1)" />
    </SectionElement>
  </div>
</template>

<style>
</style>
