<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref<HTMLElement | null>(null)
const cursorDot = ref<HTMLElement | null>(null)

// Fluid movement logic
let mouseX = 0
let mouseY = 0
let cursorX = 0
let cursorY = 0
let dotX = 0
let dotY = 0

const moveCursor = (e: MouseEvent) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const animate = () => {
  // Linear interpolation for smooth delay
  const speed = 0.15

  cursorX += (mouseX - cursorX) * speed
  cursorY += (mouseY - cursorY) * speed

  dotX += (mouseX - dotX) * 0.5 // Dot moves faster
  dotY += (mouseY - dotY) * 0.5

  if (cursor.value) {
    cursor.value.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
  }

  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block mix-blend-difference">
    <!-- Main Circle -->
    <div
      ref="cursor"
      class="fixed top-0 left-0 w-8 h-8 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform"
    ></div>

    <!-- Center Dot -->
    <div
      ref="cursorDot"
      class="fixed top-0 left-0 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform"
    ></div>
  </div>
</template>
