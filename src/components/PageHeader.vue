<script setup lang="ts">
import { onMounted, ref } from 'vue'
const scrollY = ref(0)
const breakpoint = ref(0)

const updateScroll = () => {
  scrollY.value = window.scrollY
}

const updateBreakpoint = () => {
  breakpoint.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  updateScroll()

  window.addEventListener('resize', updateBreakpoint)
  updateBreakpoint()
})

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>
<template>
  <nav
    class="fixed top-0 w-full z-50 transition-all duration-500"
    :class="{ 'bg-primary': scrollY > 0 }"
  >
    <div class="flex flex-row justify-center p-4 gap-10 text-zinc-100 text-xs md:text-xl">
      <!-- {{ scrollY }} -->
      <a class="hover:underline font-semibold" href="/">Home</a>
      <a class="hover:underline font-semibold" href="/projects">Project</a>
      <!-- <a class="hover:underline font-semibold" href="/#contact-me">Contact Me</a> -->
      <!-- {{ breakpoint }} -->
    </div>
  </nav>
</template>
