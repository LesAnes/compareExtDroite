<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  ["Au retour de la retraite à 60 ans", 'https://www.publicsenat.fr/actualites/politique/reforme-des-retraites-on-ne-va-pas-promettre-le-grand-soir-affirme-franck-allisio-depute-sortant-rn'],
  ["À l'augmentation du SMIC à 1500€ nets", 'https://www.bfmtv.com/politique/pouvoir-d-achat-lrem-lr-et-le-rn-votent-contre-l-augmentation-du-smic-proposee-par-la-nupes_AN-202207210048.html'],
  ["À la revalorisation des petites retraites", 'https://www.lesechos.fr/politique-societe/gouvernement/retraites-apres-un-premier-revers-le-gouvernement-sur-tous-les-fronts-1907061'],
  ["À l'indexation des salaires sur l'inflation", 'https://www.assemblee-nationale.fr/dyn/16/amendements/1774/CION-SOC/AS1'],
  ["À la revalorisation des salaires des fonctionnaires de 10% (infirmières, auxiliaires de vie, etc)"],
  ["À la suppression des aides publiques aux entreprises qui ont augmenté les dividendes à leurs actionnaires sans augmenter les salaires"],
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Salaires & retraites'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * (baseReasons.length + 1)" />
    </SectionElement>
  </div>
</template>

<style>
</style>
