<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  class?: string
}

const props = defineProps<ButtonProps>()

const sizeClassMap = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg'
}

const variantClassMap = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100'
}

const buttonClass = computed(() => {
  const size = sizeClassMap[props.size || 'md']
  const variant = variantClassMap[props.variant || 'primary']
  const base =
    'rounded transition duration-150 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'

  return [base, size, variant, props.class].filter(Boolean).join(' ')
})
</script>

<template>
  <button :class="buttonClass" :disabled="props.disabled">
    <slot />
  </button>
</template>
