<script setup lang="ts">
import SvgLinkedin from '@/components/svg/SvgLinkedin.vue'
import SvgGithub from '@/components/svg/SvgGithub.vue'
</script>

<template>
  <div class="py-20 lg:grid lg:grid-cols-8 gap-8 text-left">
    <!-- left -->
    <div class="flex flex-col gap-8 lg:col-span-5">
      <!-- core -->
      <div>
        <p>Hello, my name is</p>
        <p class="text-5xl font-bold text-primary">Muhammad Ghifar</p>
        <p>Web Developer</p>
      </div>

      <!-- description -->
      <div>
        <p>
          I'm a Web Developer with a year of front-end expertise, experienced in VueJS and ReactTS
          to create responsive, user-friendly web applications.
        </p>
      </div>

      <!-- action -->
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex flex-row justify-center gap-8">
          <a
            href="https://drive.google.com/file/d/1MpL6ESucOFP8IdYNVITMZC7Nc1_bok_R/view?usp=sharing"
            target="_blank"
            class="bg-primary p-4 rounded-lg text-white font-medium active:bg-secondary duration-500 cursor-pointer"
          >
            Download CV
          </a>
        </div>

        <!-- icons -->
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
          <a href="https://github.com/muhammadghifar/" target="_blank" class="hover:cursor-pointer">
            <SvgGithub
              size="32"
              class="fill-white hover:fill-slate-600 transition-all duration-500"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- right -->
    <div class="hidden lg:flex lg:col-span-3 relative ml-8">
      <div class="absolute flex items-center justify-center">
        <div class="w-72 h-72 bg-secondary rounded-full blur-xl animate-blob"></div>
      </div>

      <div
        class="absolute flex items-center justify-center w-72 h-72 bg-primary overflow-hidden animate-blob"
      >
        <img src="/img/far.png" alt="Image" class="object-cover w-72 h-72" />
      </div>
    </div>
  </div>
</template>

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
