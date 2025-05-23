<script setup lang="ts">
import MiscTimeline from '@/components/misc/MiscTimeline.vue'
import MiscSwitch from '@/components/misc/MiscSwitch.vue'
import { useCoreStore, useExperienceStore } from '@/stores'
import { storeToRefs } from 'pinia'

const { getExperiences, getEducation, activeStatus } = storeToRefs(useExperienceStore())
const { getIsMobile, getIsTablet, getIsDesktop } = storeToRefs(useCoreStore())
</script>

<template>
  <div class="flex flex-col gap-8 md:hidden">
    <div class="text-center">
      <MiscSwitch />
    </div>
    <div>
      <MiscTimeline
        class="transition-all duration-500 ease-in-out"
        direction="left"
        :items="activeStatus === 'work' ? getExperiences : getEducation"
      />
    </div>
  </div>

  <div class="hidden md:grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
    <div class="flex flex-col gap-6">
      <h3 class="text-3xl font-medium">Work Experience</h3>
      <MiscTimeline
        direction="left"
        class="transition-all duration-500 ease-in-out"
        :items="getExperiences"
      />
    </div>

    <div class="flex flex-col gap-6">
      <h3 class="text-3xl font-medium text-end">Education</h3>
      <MiscTimeline
        direction="right"
        class="transition-all duration-500 ease-in-out"
        :items="getEducation"
      />
    </div>
  </div>
</template>
