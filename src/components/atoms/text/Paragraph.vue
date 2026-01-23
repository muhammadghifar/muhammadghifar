<script setup lang="ts">
import { computed } from 'vue'

interface ParagraphProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'thin' | 'light' | 'normal' | 'bold' | 'black'
  class?: string
}

const props = defineProps<ParagraphProps>()

const textClasses = computed(() => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const weightClasses = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    bold: 'font-bold',
    black: 'font-black'
  }

  return [
    sizeClasses[props.size || 'base'],
    weightClasses[props.weight || 'normal'],
    props.class
  ].join(' ')
})
</script>

<template>
  <p :class="textClasses">
    <slot />
  </p>
</template>
