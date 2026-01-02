<template>
  <div class="w-full h-full p-12">
    <div class="grid grid-cols-8 gap-4 content-center h-full">
      <!-- left side -->
      <div class="col-span-3 content-center p-4 borderborder-gray-300">
        <!-- photo -->
        <div class="">
          <img src="/img/square.jpg" alt="profile photo" class="w-32 h-32 rounded-full mx-auto" />
        </div>

        <!-- name -->
        <div class="text-center mx-20">
          <h1 class="text-2xl text-white font-bold mt-4">Sfrsm Sfrsm Sfrsm Sfrsm Sfrsm</h1>
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
              :href="resumeUrl"
              target="_blank"
              class="underline hover:text-white transition-all duration-500"
            >
              My Resume
            </a>
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
      <p class="text-zinc-100">© 2026 All rights reserved.</p>
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
      'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
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
/* TODO : make it globally */
/* macOS-style thin scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

::-webkit-scrollbar-thumb:active {
  background: rgba(255, 255, 255, 0.4);
}

/* Firefox scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}
</style>
