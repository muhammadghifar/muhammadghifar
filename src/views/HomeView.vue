<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import HeroSection from '@/components/section/HeroSection.vue'
import ExperienceSection from '@/components/section/ExperienceSection.vue'
import ProjectSection from '@/components/section/ProjectSection.vue'
import ContactSection from '@/components/section/ContactSection.vue'
</script>

<template>
  <main>
    <div id="top" class="flex flex-col gap-20">
      <!-- <TheWelcome /> -->

      <!-- main / hero -->
      <HeroSection class="h-scsreen" />

      <hr />

      <!-- Experience -->
      <div id="experience">
        <h2 class="text-center text-4xl font-semibold mb-8 text-white">Experience</h2>
        <ExperienceSection />
      </div>

      <!-- Timeline -->

      <!-- Projects -->
      <div id="projects">
        <div class="mb-4 text-center">
          <h2 class="text-center text-4xl font-semibold text-white mb-2">Latest Projects</h2>
          <a
            href="/projects"
            class="underline cursor-pointer hover:text-primary transition-all duration-300"
            >View all projects</a
          >
        </div>
        <ProjectSection />
      </div>

      <!-- Tech Stack -->
      <!-- <div>
        <h2 class="text-center text-4xl font-semibold mb-8">Tech Stack</h2>
      </div> -->

      <!-- Contact -->
      <div id="contact-me">
        <h2 class="text-center text-4xl font-semibold mb-8 text-white">Contact Me</h2>
        <ContactSection />
      </div>
    </div>
  </main>
</template>
