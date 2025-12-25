<template>
  <div class="w-full h-full">
    <div class="grid grid-cols-2 content-center h-full">
      <!-- left side -->
      <div class="p-4 border border-gray-300 m-2">
        <!-- photo -->
        <div class="">
          <img src="/img/far.png" alt="profile photo" class="w-32 h-32 rounded-full mx-auto" />
        </div>

        <!-- name -->
        <div class="">
          <h1 class="text-2xl font-bold text-center mt-4">Muhammad Ghifar</h1>
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
      </div>

      <!-- right side -->
      <div class="p-4 border border-gray-300 m-2">
        <p>New Version</p>

        <AccordionBase>
          <!-- <template #content-1>
            <p>ini test</p>
          </template> -->
        </AccordionBase>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccordionBase from '@/components/accordion/AccordionBase.vue';
import SvgGithub from '@/components/svg/SvgGithub.vue'
import SvgLinkedin from '@/components/svg/SvgLinkedin.vue'

const resumeUrl = import.meta.env.VITE_RESUME_URL
</script>

<style scoped></style>
