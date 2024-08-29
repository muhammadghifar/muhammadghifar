<script setup lang="ts">
import type { Experience } from '@/types/experience'

interface TimelineProps {
  items: Experience[]
  direction: 'left' | 'right'
}

const props = defineProps<TimelineProps>()
</script>

<template>
  <div>
    <ol
      class="relative border-gray-700 transition-all duration-500"
      :class="{
        'border-s': props.direction === 'left',
        'border-e': props.direction === 'right'
      }"
    >
      <li
        v-for="item in props.items"
        :key="item.id"
        class="mb-10"
        :class="{
          'ms-4': props.direction === 'left',
          'me-4 text-end': props.direction === 'right'
        }"
      >
        <div
          class="absolute w-3 h-3 rounded-full mt-1.5 border-gray-900 bg-primary"
          :class="{
            '-start-1.5': props.direction === 'left',
            '-end-1.5': props.direction === 'right'
          }"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ item.time }}</time>
        <h3 class="text-lg font-semibold text-white">{{ item.title || 'tilte' }}</h3>
        <p class="mb-4 text-base font-normal text-gray-400">
          {{ item.description || 'Lorem Ipsum' }}
        </p>
      </li>
    </ol>
    <!-- <ol class="relative border-s border-gray-700 transition-all duration-500">
      <li v-for="item in props.items" :key="item.id" class="mb-10 ms-4">
        <div
          class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-gray-900 bg-primary"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ item.time }}</time>
        <h3 class="text-lg font-semibold text-white">{{ item.title || 'tilte' }}</h3>
        <p class="mb-4 text-base font-normal text-gray-400">
          {{ item.description || 'Lorem Ipsum' }}
        </p>
      </li>
    </ol> -->
  </div>
</template>
