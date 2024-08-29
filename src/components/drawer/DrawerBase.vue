<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ref } from 'vue'

interface DrawerProps {
  isOpen: boolean
}

const props = defineProps<DrawerProps>()
</script>

<template>
  <div class="relative">
    <!-- overlay -->
    <div v-if="props.isOpen" class="fixed inset-0 bg-black bg-opacity-50" />

    <!-- Drawer -->
    <div
      :class="
        cn(
          'fixed bottom-0 left-0 w-full h-3/4 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out',
          { 'translate-y-0': isOpen, 'translate-y-full': !isOpen }
        )
      "
    >
      <slot />
    </div>
  </div>
</template>
