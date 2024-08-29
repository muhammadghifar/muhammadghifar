<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <header>
    <PageHeader />
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  </header>

  <div class="my-20 p-8 max-w-[1440px] mx-auto">
    <RouterView />
  </div>

  <footer>
    <PageFooter />
  </footer>
</template>
