<template>
  <div
    class="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference hidden md:block"
  >
    <div
      class="absolute h-4 w-4 rounded-full bg-white transition-transform duration-100 ease-out"
      :style="{
        transform: `translate(${x - 8}px, ${y - 8}px) scale(${isHovering ? 2.5 : 1})`,
      }"
    ></div>
    <div
      class="absolute h-8 w-8 rounded-full border border-white transition-transform duration-300 ease-out opacity-50"
      :style="{
        transform: `translate(${x - 16}px, ${y - 16}px) scale(${isHovering ? 1.5 : 1})`,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
const isHovering = ref(false)

const handleMouseOver = (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mouseover', handleMouseOver)
})

onUnmounted(() => {
  window.removeEventListener('mouseover', handleMouseOver)
})
</script>
