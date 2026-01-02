<template>
  <div id="accordion-arrow">
    <div v-for="(item, index) in items" :key="index" class="overflow-hidden">
      <!-- Header -->
      <h2 :id="`accordion-heading-${index}`">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-semibold text-lg text-body border-b border-default gap-3 hover:text-white transition-all duration-300"
          :class="{ 'text-white': activeIndex === index }"
          :aria-expanded="activeIndex === index"
          @click="toggle(index)"
        >
          <span class="font-bold">{{ item.title }}</span>

          <!-- Optional Icon -->
          <span v-if="item.icon" class="shrink-0" :class="{ 'text-white': activeIndex === index }">
            <component :is="item.icon" />
          </span>

          <svg
            class="w-5 h-5 shrink-0 transition-transform duration-300 -rotate-90"
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
      <transition
        name="accordion"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div
          v-show="activeIndex === index"
          :id="`accordion-body-${index}`"
          class="text-base text-body transition-colors duration-300 px-4"
          :aria-labelledby="`accordion-heading-${index}`"
        >
          <div class="pt-8">
            <slot :name="`content-${index}`" :item="item">
              <p class="leading-relaxed opacity-90">{{ item.content }}</p>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Component } from 'vue'

export interface AccordionItem {
  title: string
  content?: string
  icon?: Component
  id?: string | number
}

interface AccordionProps {
  items?: AccordionItem[]
  defaultOpen?: number | null
  allowMultiple?: boolean
}

const props = withDefaults(defineProps<AccordionProps>(), {
  items: () => [],
  defaultOpen: 0,
  allowMultiple: false
})

const activeIndex = ref<number | null>(props.defaultOpen)

const toggle = (index: number) => {
  if (props.allowMultiple) {
    activeIndex.value = activeIndex.value === index ? null : index
  } else {
    activeIndex.value = activeIndex.value === index ? null : index
  }
}

// TODO : change to class transition
// Animation functions for expand/collapse
const beforeEnter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = '0'
  htmlEl.style.overflow = 'hidden'
}

const enter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = htmlEl.scrollHeight + 'px'
}

const beforeLeave = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = htmlEl.scrollHeight + 'px'
  htmlEl.style.overflow = 'hidden'
}

const leave = (el: Element) => {
  const htmlEl = el as HTMLElement

  htmlEl.offsetHeight
  htmlEl.style.height = '0'
}
</script>

<style scoped>
/* Smooth height transition for accordion content */
[id^='accordion-body-'] {
  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>
