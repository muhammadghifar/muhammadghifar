<script setup lang="ts">
import CardProject from '@/components/card/CardProject.vue'
import { useProjectStore } from '@/stores/project'

const { projects } = useProjectStore()
</script>

<template>
  <div>
    <!-- <div class="text-center">
      <a class="underline hover:text-primary transition-all duration-300">View all projects</a>
    </div> -->

    <div class="flex flex-col md:grid md:grid-cols-2 gap-4">
      <CardProject
        v-for="(item, index) in projects.slice(0, 2)"
        :key="index"
        :title="item.title"
        :description="item.description"
        :stack="item.stack"
      />
    </div>
  </div>
</template>
