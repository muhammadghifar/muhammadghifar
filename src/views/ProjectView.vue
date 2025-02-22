<script setup lang="ts">
import CardProject from '@/components/card/CardProject.vue'
// import MiscBadge from '@/components/misc/MiscBadge.vue'
import ModalProject from '@/components/modal/ModalProject.vue'
import { useProjectStore } from '@/stores/project'
import type { Project } from '@/types'
import { ref } from 'vue'

const { getProjects } = useProjectStore()

// const isWorkRelated = ref(false)
const isModalOpen = ref(false)
const projectList = getProjects
const activeProject = ref({} as Project)

const projectDatas = ref(projectList)

const setActiveProject = (item: any) => {
  activeProject.value = item
}

// const setWorkRelated = () => {
//   isWorkRelated.value = !isWorkRelated.value

//   const wrData = projectList.filter((item) => item.isWorkRelated === isWorkRelated.value)

//   projectDatas.value = isWorkRelated.value ? wrData : projectList
// }

const closeModal = () => {
  isModalOpen.value = !isModalOpen.value
}
</script>

<template>
  <ModalProject v-if="isModalOpen" :data="activeProject" @close-modal="closeModal" />

  <!-- Header -->
  <div class="mt-4 mb-8">
    <h1 class="text-5xl font-bold">Projects</h1>
  </div>

  <!-- Project List -->
  <div class="flex flex-col gap-10">
    <!-- Work Related Project -->
    <div>
      <div class="mb-4 flex flex-row items-center gap-4">
        <!-- <h2 class="text-2xl font-semibold">Filter:</h2> -->
        <!-- <p class="text-xl">Filter:</p> -->
        <!-- <MiscBadge
          text="Work-Related"
          :is-outline="!isWorkRelated"
          :with-check="isWorkRelated"
          class="cursor-pointer border border-primary"
          :class="{
            'hover:bg-primary': !isWorkRelated,
            'hover:bg-dark': isWorkRelated
          }"
          @click="setWorkRelated"
        /> -->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardProject
          v-for="(item, index) in projectDatas"
          :key="index"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :stack="item.stack"
          class="hover:bg-[#eee] hover:text-[#181818] transition-all duration-500 cursor-pointer"
          @click="
            () => {
              isModalOpen = !isModalOpen
              setActiveProject(item)
            }
          "
        />
      </div>
    </div>
  </div>
</template>
