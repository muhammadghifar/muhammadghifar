<script setup lang="ts">
import { ref } from 'vue'
import { useExperienceStore } from '@/stores/experience'
import { storeToRefs } from 'pinia'

const { setActiveExperience } = useExperienceStore()
const { activeStatus } = storeToRefs(useExperienceStore())

const emit = defineEmits(['toggleSwitch'])

const isChecked = ref(false)

const handleCheckboxChange = () => {
  emit('toggleSwitch', isChecked.value)
  isChecked.value = !isChecked.value

  setActiveExperience(isChecked.value ? 'education' : 'work')
}
</script>

<template>
  <div>
    <label
      class="relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-zinc-800 p-1"
    >
      <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
      <span
        :class="{
          'bg-primary text-white': !isChecked,
          'text-primary': isChecked
        }"
        class="flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-semibold transition-all duration-300"
      >
        Work Experience
      </span>
      <span
        :class="{
          'text-primary ': !isChecked,
          'bg-primary text-white': isChecked
        }"
        class="text-primary flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-semibold transition-all duration-300"
      >
        Education
      </span>
    </label>
  </div>
</template>
