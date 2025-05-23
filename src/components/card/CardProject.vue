<script setup lang="ts">
import { defineProps } from 'vue'
import CardBase from './CardBase.vue'
import MiscBadge from '@/components/misc/MiscBadge.vue'

interface CardProjectProps {
  title: string
  description: string
  image: string
  stack?: string[]
}

const props = defineProps<CardProjectProps>()
</script>

<template>
  <CardBase>
    <!-- Image -->
    <img :src="props.image" alt="thumbnail" class="aspect-video object-cover rounded-t-lg" />

    <!-- Description -->
    <div class="mt-2 flex flex-col gap-2">
      <div class="flex flex-wrap gap-2 mt-2">
        <MiscBadge v-for="(item, index) in props.stack" :key="index" :text="item" />
      </div>

      <h3 class="text-2xl font-bold">{{ props.title }}</h3>
      <p class="line-clamp-3">
        {{ props.description }}
      </p>
    </div>
  </CardBase>
</template>
