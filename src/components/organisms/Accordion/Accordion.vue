<script setup lang="ts">
import { ref } from 'vue'
import AccordionItem from '@/components/molecules/Accordion/AccordionItem.vue'

interface AccordionItemData {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItemData[]
}

const props = withDefaults(defineProps<AccordionProps>(), {
  items: () => []
})

const activeIndex = ref<number | null>(null)

function toggleAccordion(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <div class="w-[500px] mx-auto space-y-2">
    <AccordionItem
      v-for="(item, i) in props.items"
      :key="i"
      :title="item.title"
      :index="i"
      :activeIndex="activeIndex"
      @toggle="toggleAccordion"
    >
      {{ item.content }}
    </AccordionItem>
  </div>
</template>
