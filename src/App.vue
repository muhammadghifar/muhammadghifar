<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <!-- <header>
    <PageHeader />
  </header> -->

  <div class="max-w-[1600px] mx-auto">
    <RouterView />
  </div>
  <!-- 
  <footer>
    <PageFooter />
  </footer> -->
</template>
