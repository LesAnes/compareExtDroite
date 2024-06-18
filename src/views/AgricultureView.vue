<script setup>
import { ref } from 'vue';
import { delayMs } from '../tools/utils.js';
import TitleElement from '../components/TitleElement.vue'
import ReasonsList from '../components/ReasonsList.vue'
import PlotTwist from '../components/PlotTwist.vue'
import SectionElement from '../components/SectionElement.vue'

const baseReasons = ref([
  "À forcer la grande distribution à acheter à des prix décents aux agriculteurs",
  "Plafonner les aides de la PAC (politique agricole commune)",
  "Soutenir la filière bio",
])
</script>

<template>
  <div class="section-wrapper">
    <TitleElement :title="'Agriculture'" />

    <SectionElement>
      <h2>Le RN <span class="bold">s'oppose</span> :</h2>

      <ReasonsList :baseReasons="baseReasons"/>

      <PlotTwist :timeoutMs="delayMs * baseReasons.length">
        <div>
          <a href="https://www.vie-publique.fr/loi/293676-garantir-un-revenu-digne-aux-agriculteurs-proposion-de-loi-ecologiste" target="_blank">source</a>
          <a href="https://www.assemblee-nationale.fr/dyn/16/scrutins/3653" target="_blank">source</a>
        </div>
      </PlotTwist>
    </SectionElement>
  </div>
</template>

<style>
</style>
