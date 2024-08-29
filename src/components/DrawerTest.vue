<template>
  <div class="relative">
    <!-- Button to open the drawer -->
    <button @click="toggleDrawer" class="p-2 bg-blue-500 text-white rounded">Toggle Drawer</button>

    <!-- Overlay -->
    <div v-if="isOpen" @click="toggleDrawer" class="fixed inset-0 bg-black bg-opacity-50"></div>

    <!-- Drawer -->
    <div
      :class="{ 'translate-y-0': isOpen, 'translate-y-full': !isOpen }"
      class="fixed bottom-0 left-0 w-full h-3/4 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out"
    >
      <div class="flex flex-col gap-4 p-4">
        <p>Close</p>
        <img src="/img/square.jpg" alt="" class="h-[300px] max-w-full mx-auto" />

        <div class="flex flex-col gap-2">
          <h3 class="text-4xl font-bold">{{ 'props.title' }}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque alias,
            debitis doloribus nulla pariatur labore iste ipsam blanditiis aliquam officiis omnis
            nemo. Perspiciatis hic aperiam dolor veniam? Quod, ex?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDrawer() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
/* Custom styles for the drawer (optional) */
</style>
