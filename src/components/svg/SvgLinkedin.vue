<script setup lang="ts">
interface SvgLinkedinProps {
  size?: string | number
  color?: string
}

const props = defineProps<SvgLinkedinProps>()
</script>

<template>
  <svg
    :width="props.size || '24'"
    :height="props.size || '24'"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>linkedin</title>
    <rect :width="props.size || '24'" :height="props.size || '24'" fill="none" />
    <path
      :fill="props.color"
      d="M19,3a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19m-.5,15.5V13.2a3.26,3.26,0,0,0-3.26-3.26h0a2.9,2.9,0,0,0-2.32,1.3V10.13H10.13V18.5h2.79V13.57a1.4,1.4,0,1,1,2.79,0V18.5H18.5M6.88,8.56A1.68,1.68,0,0,0,8.56,6.88h0a1.69,1.69,0,1,0-3.37,0h0A1.69,1.69,0,0,0,6.88,8.56M8.27,18.5V10.13H5.5V18.5Z"
    />
  </svg>
</template>
