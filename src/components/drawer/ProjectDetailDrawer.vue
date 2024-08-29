<script setup lang="ts">
import { ref, watch } from 'vue'
import { useProjectStore } from '@/stores/project'
import type { Project } from '@/types'

const emit = defineEmits(['toggleDrawer'])

interface ProjectDetailDrawerProps {
  isOpen: boolean
  data?: Project
}

const props = defineProps<ProjectDetailDrawerProps>()

const isDrawerOpen = ref(props.isOpen)
const { getActiveProject } = useProjectStore()
// const data = getActiveProject

const toggleDrawer = () => {
  emit('toggleDrawer')
  isDrawerOpen.value = !isDrawerOpen.value
}

watch(
  () => props.data,
  (value) => {
    console.log(value)

    // isDrawerOpen.value = value
    // console.log(getActiveProject)
  }
)
</script>

<template>
  <div class="relative">
    <!-- overlay -->
    <div v-if="props.isOpen" class="fixed inset-0 bg-black bg-opacity-50" />
    <!-- Drawer -->
    <div
      :class="{ 'translate-y-0': isOpen, 'translate-y-full': !isOpen }"
      class="fixed bottom-0 left-0 w-full h-3/4 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out"
    >
      <div class="flex flex-col gap-4 p-4 lg:mx-20 max-w-[600px]">
        <p @click="toggleDrawer" class="cursor-pointer text-xl">Close</p>
        <img
          :src="props.data?.image || '/img/square.jpg'"
          alt=""
          class="h-[300px] max-w-full mx-auto object-contain"
        />
        {{ props.data }}

        <div class="flex flex-col gap-2">
          <h3 class="text-4xl font-bold">{{ props.data?.title || 'Title' }}</h3>
          <p class="">
            {{ props.data?.description || 'Description' }}
            <!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque alias,
            debitis doloribus nulla pariatur labore iste ipsam blanditiis aliquam officiis omnis
            nemo. Perspiciatis hic aperiam dolor veniam? Quod, ex? -->
          </p>
          <p>Tech Stack: {{ props.data?.stack?.toString() }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <DrawerBase :is-open="isDrawerOpen">
      
    </DrawerBase>
  </div> -->
</template>
