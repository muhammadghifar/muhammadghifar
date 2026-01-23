<script setup lang="ts">
import CardBase from './CardBase.vue'
import MiscBadge from '@/components/misc/MiscBadge.vue'

interface CardProjectProps {
  title: string
  description: string
  image: string
  stack?: string[]
  isWorkRelated?: boolean
}

const props = defineProps<CardProjectProps>()
</script>

<template>
  <CardBase>
    <!-- Image -->
    <img
      v-if="image"
      :src="props.image"
      alt="thumbnail"
      class="aspect-video object-cover rounded-t-lg"
    />

    <!-- Description -->
    <div class="mt-2 flex flex-col gap-2">
      <div class="flex flex-wrap gap-2 mt-2">
        <MiscBadge v-for="(item, index) in props.stack" :key="index" :text="item" />
        <MiscBadge v-if="props.isWorkRelated" text="Work-Related" color="#A0A0DA" />
      </div>

      <h3 class="text-2xl font-bold text-white">{{ props.title }}</h3>
      <p class="line-clamp-3">
        {{ props.description }}
      </p>
    </div>

    <!-- Button show -->
    <!-- <a href="" class="text-right underline hover:text-white transition-all duration-500">Show Detail</a> -->
  </CardBase>
</template>
