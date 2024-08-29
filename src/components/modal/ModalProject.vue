<script setup lang="ts">
import ModalBase from '@/components/modal/ModalBase.vue'
import type { Project } from '@/types'

interface ProjectViewProps {
  data?: Project
}

const props = defineProps<ProjectViewProps>()
</script>

<template>
  <ModalBase>
    <template #header>
      <div class="px-6">
        <h1 class="text-2xl font-bold !hover:text-dark">{{ props.data?.title }}</h1>
        <p class="text-xs">{{ props.data?.isWorkRelated && '(Work-Related Project)' }}</p>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-2.5 px-6">
        <img
          :src="props.data?.image"
          alt="content image"
          class="rounded-lg object-cover max-h-[400px] aspect-video"
        />
        <p>{{ props.data?.description }}</p>
        <hr />
        <div class="mt-2">
          <p v-if="props.data?.year">Time: {{ props.data?.year }}</p>
          <p v-if="props.data?.stack">Tech Stack: {{ props.data?.stack?.join(', ') }}</p>
          <p v-if="props.data?.url" href="#" target="_blank">
            Related URL:
            <span>
              <a :href="props.data?.url" target="_blank" class="hover:underline">{{
                props.data?.url
              }}</a>
            </span>
          </p>
        </div>
      </div>
    </template>
  </ModalBase>
</template>
