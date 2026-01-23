<script setup lang="ts">
import SvgCheck from '@/components/svg/SvgCheck.vue'

interface MiscBadgeProps {
  text: string
  withCheck?: boolean
  isOutline?: boolean
  color?: string
}

const props = defineProps<MiscBadgeProps>()
</script>

<template>
  <div
    class="py-2 px-3 w-fit rounded-full flex flex-row items-center gap-2 transition-all duration-500"
    :style="{
      backgroundColor: !isOutline ? props.color || '#6B6BD7' : 'transparent',
      border: isOutline ? `2px solid ${props.color || '#6B6BD7'}` : 'none'
    }"
  >
    <!-- { 'bg-primary': !isOutline, 'bg-none': isOutline } -->
    <SvgCheck v-if="props.withCheck" size="16" color="white" />
    <p class="text-xs uppercase text-white font-medium">{{ props.text || 'Badges' }}</p>
  </div>
</template>
