<script setup lang="ts">
import Paragraph from '@/components/atoms/text/Paragraph.vue'
import Heading from '@/components/atoms/text/Heading.vue'
import Button from '@/components/atoms/Button.vue'
import SvgGithub from '@/components/svg/SvgGithub.vue'
import SvgLinkedin from '@/components/svg/SvgLinkedin.vue'
import Image from '@/components/atoms/Image.vue'
import Accordion from '@/components/organisms/Accordion/Accordion.vue'

// state
const items = [
  { title: 'About Me', content: 'Atomic Design adalah metodologi UI...' },
  { title: 'Experience', content: 'Accordion adalah komponen UI yang...' },
  {
    title: 'Education',
    content: 'Saat ingin menyajikan banyak informasi tanpa memenuhi tampilan.'
  }
]

// methods
const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <div class="h-screen grid grid-cols-12 items-center">
    <!-- left side -->
    <div class="col-span-6 flex flex-col items-center gap-10">
      <div class="">
        <Image src="/img/landscape.spg" class="w-64 rounded-full aspect-square object-cover" />
      </div>
      <div class="flex flex-col items-center gap-5">
        <Heading :level="2">LOREM IPSUM NAME</Heading>
        <Button @click="handleClick">Download</Button>
        <div class="flex flex-row">
          <SvgGithub color="white" />
          <SvgLinkedin color="white" />
        </div>
      </div>
    </div>

    <!-- breaker -->
    <!-- <div class="w-px h-full bg-white"></div> -->

    <div class="col-span-6 flex flex-col items-center">
      <div class="">
        <Accordion :items="items" />
        <!-- <details>
          <summary>Test</summary>
          <p>kore</p>
        </details> -->
      </div>
      <div class=""></div>
      <Paragraph>Right side</Paragraph>
    </div>
  </div>
</template>
