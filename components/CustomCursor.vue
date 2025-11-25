<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref<HTMLElement | null>(null)
const cursorDot = ref<HTMLElement | null>(null)

const moveCursor = (e: MouseEvent) => {
  if (cursor.value && cursorDot.value) {
    // Main cursor follows with slight delay (handled by CSS transition usually, or direct update)
    // For performance, direct transform is better
    cursor.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    cursorDot.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
  }
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
    <!-- Main Circle -->
    <div
      ref="cursor"
      class="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out will-change-transform"
    ></div>

    <!-- Center Dot -->
    <div
      ref="cursorDot"
      class="fixed top-0 left-0 w-1 h-1 bg-zinc-900 dark:bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out will-change-transform"
    ></div>
  </div>
</template>
