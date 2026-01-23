<script setup lang="ts">
import { computed, type Component } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'text' | 'destructive' | 'warning' | 'ghost'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type IconPosition = 'left' | 'right' | 'both'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  icon?: Component
  iconPosition?: IconPosition
  iconColor?: String
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  iconPosition: 'left',
  fullWidth: false,
  type: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}

// Variant styles
const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90 active:bg-opacity-80 shadow-md',
    secondary: 'bg-secondary text-white hover:bg-opacity-90 active:bg-opacity-80 shadow-md',
    text: 'bg-transparent text-primary hover:bg-primary hover:bg-opacity-10',
    destructive: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-md',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 shadow-md',
    ghost: 'bg-transparent text-body hover:bg-gray-100 dark:hover:bg-gray-800'
  }
  return variants[props.variant]
})

// Size styles
const sizeClasses = computed(() => {
  const sizes = {
    xs: 'px-2 py-1 text-xs font-medium',
    sm: 'px-3 py-1.5 text-sm font-medium',
    md: 'px-4 py-2 text-sm font-semibold',
    lg: 'px-6 py-3 text-base font-semibold',
    xl: 'px-8 py-4 text-lg font-semibold'
  }
  return sizes[props.size]
})

// Icon size based on button size
const iconSize = computed(() => {
  const sizes = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 22
  }
  return sizes[props.size]
})

// Disabled state
const disabledClasses = computed(() => {
  return props.disabled || props.loading
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer'
})

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2',
  variantClasses.value,
  sizeClasses.value,
  disabledClasses.value,
  props.fullWidth ? 'w-full' : ''
])
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin"
      :width="iconSize"
      :height="iconSize"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <!-- Left icon -->
    <component
      v-if="icon && !loading && (iconPosition === 'left' || iconPosition === 'both')"
      :is="icon"
      :size="iconSize"
      :color="props.iconColor"
    />

    <!-- Button content -->
    <slot />

    <!-- Right icon -->
    <component
      v-if="icon && !loading && (iconPosition === 'right' || iconPosition === 'both')"
      :is="icon"
      :size="iconSize"
      :color="props.iconColor"
    />
  </button>
</template>
