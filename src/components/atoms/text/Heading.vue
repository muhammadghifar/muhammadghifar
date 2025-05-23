<script setup lang="ts">
import { computed } from 'vue'

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  class?: string
}

const props = defineProps<HeadingProps>()

const tag = computed(() => `h${props.level || 1}`)

const baseClassByLevel: Record<number, string> = {
  1: 'text-5xl font-black',
  2: 'text-4xl font-bold',
  3: 'text-3xl font-semibold',
  4: 'text-2xl font-medium',
  5: 'text-xl font-normal',
  6: 'text-lg font-light'
}

const headingClasses = computed(() => {
  const level = props.level || 1
  return [baseClassByLevel[level], props.class].filter(Boolean).join(' ')
})
</script>

<template>
  <component :is="tag" :class="headingClasses">
    <slot />
  </component>
</template>
