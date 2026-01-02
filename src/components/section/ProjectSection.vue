<script setup lang="ts">
import { ref } from 'vue'
import CardProject from '@/components/card/CardProject.vue'
import { useProjectStore } from '@/stores/project'
import type { Project } from '@/types'
import ModalProject from '../modal/ModalProject.vue'

const { projects } = useProjectStore()

const isModalOpen = ref(false)
const activeProject = ref({} as Project)

const setActiveProject = (item: any) => {
  activeProject.value = item
}

const closeModal = () => {
  isModalOpen.value = !isModalOpen.value
}
</script>

<template>
  <div>
    <ModalProject :show="isModalOpen" :data="activeProject" @close-modal="closeModal" />
    <!-- <div class="text-center">
      <a class="underline hover:text-primary transition-all duration-300">View all projects</a>
    </div> -->

    <div class="flex flex-col md:grid md:grid-cols-2 gap-4">
      <CardProject
        v-for="(item, index) in projects"
        :key="index"
        :title="item.title"
        :description="item.description"
        :stack="item.stack"
        class="hover:cursor-pointer"
        @click="
          () => {
            isModalOpen = !isModalOpen
            setActiveProject(item)
          }
        "
      />
    </div>
  </div>
</template>
