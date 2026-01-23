<template>
  <div class="w-full h-full p-12">
    <div class="grid grid-cols-8 gap-4 content-center h-full">
      <!-- left side -->
      <div class="col-span-3 content-center p-4 borderborder-gray-300">
        <!-- photo -->
        <div class="relative flex items-center justify-center">
          <div class="absolute w-64 h-64 bg-secondary rounded-full blur-xl animate-blob"></div>
          <div
            class="relative flex items-center justify-center w-64 h-64 bg-primary overflow-hidden animate-blob"
          >
            <img src="/img/far.png" alt="profile photo" class="h-64 w-64 object-cover" />
          </div>
        </div>

        <!-- name -->
        <div class="text-center mx-20">
          <h1 class="text-3xl text-white font-bold mt-4">Muhammad Ghifar Rijali</h1>
          <p>
            A programmer focused on web development with an interest in technology. Enjoy to
            learning new things and aim to develop impactful applications.
          </p>
        </div>

        <hr class="my-4 mx-20" />

        <!-- socmed -->
        <div class="">
          <div class="flex flex-row gap-4 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/muhammadghifarr/"
              target="_blank"
              class="hover:cursor-pointer"
            >
              <SvgLinkedin
                size="32"
                class="fill-white hover:fill-[#0077B5] transition-all duration-500"
              />
            </a>
            <a
              href="https://github.com/muhammadghifar/"
              target="_blank"
              class="hover:cursor-pointer"
            >
              <SvgGithub
                size="32"
                class="fill-white hover:fill-slate-600 transition-all duration-500"
              />
            </a>
          </div>
        </div>

        <!-- contact me -->
        <div class="mt-4 w-full text-center flex flex-col gap-2 items-center">
          <ButtonBase variant="primary" :icon="SvgEnvelope" icon-color="white" @click="sendMailTo">
            Contact Me
          </ButtonBase>
          <div class="">
            <a
              :href="resumeUrl"
              target="_blank"
              class="underline hover:text-white transition-all duration-500"
            >
              &gt; My Resume
            </a>
          </div>
        </div>
      </div>

      <!-- right side -->
      <div class="col-span-5 pt-4 borderborder-gray-300 h-full overflow-auto">
        <AccordionBase :items="accordionItems">
          <template #content-1>
            <ExperienceSection experince-type="work" />
          </template>
          <template #content-2>
            <ExperienceSection experince-type="education" />
          </template>
          <template #content-3>
            <ProjectSection />
          </template>
        </AccordionBase>
      </div>
    </div>

    <div class="pt-2 pl-12">
      <p class="text-zinc-100">© 2026 Muhammad Ghifar - All rights reserved. ✨</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccordionBase, { type AccordionItem } from '@/components/accordion/AccordionBase.vue'
import ButtonBase from '@/components/button/ButtonBase.vue'
import ExperienceSection from '@/components/section/ExperienceSection.vue'
import ProjectSection from '@/components/section/ProjectSection.vue'
import SvgEnvelope from '@/components/svg/SvgEnvelope.vue'
import SvgGithub from '@/components/svg/SvgGithub.vue'
import SvgLinkedin from '@/components/svg/SvgLinkedin.vue'

const resumeUrl: string = import.meta.env.VITE_RESUME_URL
const mailtoUrl: string = import.meta.env.VITE_MAILTO_URL

// Button action handlers - declared in the page, not in the component
// const openCloudFiles = (): Window | null => {
//   return window.open(resumeUrl, '_blank')
// }

const sendMailTo = (): void => {
  window.location.href = mailtoUrl
}

const accordionItems: AccordionItem[] = [
  {
    title: 'Summary',
    content:
      'I am a programmer focused on web development with an interest in technology. Enjoy to learning new things and aim to develop impactful applications. I hope to develop and participate in projects that bring value and make a genuine impact.'
  },
  {
    title: 'Experience'
  },
  {
    title: 'Education'
  },
  {
    title: 'Project'
  }
]
</script>

<style scoped>
@keyframes blob {
  0%,
  100% {
    border-radius: 46% 54% 31% 69% / 36% 33% 67% 64%;
  }
  25% {
    border-radius: 50% 50% 32% 68% / 38% 44% 56% 62%;
  }
  50% {
    border-radius: 36% 64% 50% 50% / 65% 58% 42% 35%;
  }
  75% {
    border-radius: 32% 68% 54% 46% / 40% 40% 60% 60%;
  }
}

.animate-blob {
  animation: blob 15s infinite;
}
</style>
