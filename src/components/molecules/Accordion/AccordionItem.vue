<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  index: number
  activeIndex: number | null
}

const emit = defineEmits(['toggle'])
const props = defineProps<Props>()

const isOpen = computed(() => props.index === props.activeIndex)

function handleToggle() {
  emit('toggle', props.index)
}
</script>

<template>
  <div class="border rounded overflow-hidden">
    <button class="w-full text-left px-4 py-2 bg-gray-700 font-medium" @click="handleToggle">
      {{ title }}
    </button>

    <transition name="slide">
      <div v-show="isOpen" class="px-4 py-2 bg-dark border-t text-sm">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
