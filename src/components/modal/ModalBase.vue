<script setup lang="ts">
import SvgCross from '@/components/svg/SvgCross.vue'

const emit = defineEmits(['close-modal'])

const closeModal = () => {
  emit('close-modal')
}
</script>

<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 bg-[#00000080] flex justify-center items-center"
    @click.self="closeModal"
  >
    <!-- Modal -->
    <div
      class="flex flex-col gap-2 w-full max-w-[900px] max-h-[700px] p-4 mx-8 lg:mx-20 bg-dark shadow-xl rounded-lg border border-secondary"
    >
      <!-- header -->
      <div>
        <!-- Close button -->
        <div class="absolute">
          <button
            class="relative -left-9 -top-9 bg-white rounded-full p-2 cursor-pointer text-dark font-black"
            @click="closeModal"
          >
            <SvgCross />
          </button>
        </div>

        <slot name="header" />
      </div>
      <!-- content -->
      <div>
        <slot name="content" />
      </div>
      <!-- footer -->
      <div>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
