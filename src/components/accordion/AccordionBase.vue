<template>
  <div id="accordion-arrow">
    <div v-for="(item, index) in items" :key="index">
      <!-- Header -->
      <h2 :id="`accordion-heading-${index}`">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-medium text-body border-b border-default gap-3 hover:text-white transition-all duration-500"
          :aria-expanded="activeIndex === index"
          @click="toggle(index)"
        >
          {{ console.log('index', activeIndex) }}
          <span :class="activeIndex === index ? 'text-white' : ''" class="">{{ item.title }}</span>

          <!-- Optional Icon -->
          <span v-if="item.icon" class="shrink-0">
            <component :is="item.icon" />
          </span>

          <svg
            class="w-5 h-5 shrink-0 transition-transform duration-500 -rotate-90"
            :class="{ 'rotate-0': activeIndex === index }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
      </h2>

      <!-- Body -->
      <div
        v-show="activeIndex === index"
        :id="`accordion-body-${index}`"
        class="text-body transition-all duration-500"
        :aria-labelledby="`accordion-heading-${index}`"
      >
        <div class="py-5 border-b border-default">
          <slot :name="`content-${index}`">
            {{ item.content }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Component } from 'vue'

interface AccordionItem {
  title: string
  content?: string
  icon?: Component
}

const activeIndex = ref<number | null>(0)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

/**
 * Data accordion
 * Bisa diganti dari API / props kalau mau
 */
const items: AccordionItem[] = [
  {
    title: 'Accordion without an arrow',
    content:
      'Flowbite is an open-source library of interactive components built on top of Tailwind CSS.'
  },
  {
    title: 'Accordion with another icon',
    content:
      'Flowbite is an open-source library of interactive components built on top of Tailwind CSS.'
  },
  {
    title: 'Accordion without arrow rotation',
    content:
      'Flowbite is an open-source library of interactive components built on top of Tailwind CSS.'
  }
]
</script>

<style scoped></style>
