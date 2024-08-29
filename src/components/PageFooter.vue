<script setup lang="ts">
import SvgGithub from './svg/SvgGithub.vue'
import SvgLinkedin from './svg/SvgLinkedin.vue'
</script>

<template>
  <div class="py-8 bg-zinc-800">
    <div class="h-full flex flex-col gap-4">
      <!-- social media -->
      <div>
        <div class="flex flex-row gap-4 justify-center">
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
          <a href="https://github.com/muhammadghifar/" target="_blank" class="hover:cursor-pointer">
            <SvgGithub
              size="32"
              class="fill-white hover:fill-slate-600 transition-all duration-500"
            />
          </a>
        </div>
      </div>

      <!-- copyright -->
      <div>
        <p class="text-center text-zinc-100">Copyright © 2024 Muhammad Ghifar</p>
      </div>
    </div>
  </div>
</template>
