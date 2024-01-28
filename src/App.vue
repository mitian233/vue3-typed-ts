<script setup lang="ts">
import { VueTypedJs } from "../packages";
</script>

<template>
<div>
  <VueTypedJs
      :strings="['123123']"
      :loop="true"
      :startDelay="300"
      :typeSpeed="100"
      :backSpeed="50">
    <span class="typing"></span>
  </VueTypedJs>
</div>
</template>

<style scoped>
</style>
