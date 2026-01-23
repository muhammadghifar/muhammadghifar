<script setup lang="ts">
interface AtomImageProps {
  src: string
  alt?: string
  class?: string
  fallbackSrc?: string
}

const props = withDefaults(defineProps<AtomImageProps>(), {
  alt: 'image',
  fallbackSrc: '/img/square.jpg'
})

const onError = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (target.src !== location.origin + props.fallbackSrc) {
    target.src = props.fallbackSrc
  }
}
</script>

<template>
  <img :src="props.src" :alt="props.alt" :class="props.class" loading="lazy" @error="onError" />
</template>
