<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { ArrowUp } from 'lucide-vue-next'

const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition name="fade">
    <button
      v-if="y > 300"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-panel text-zinc-600 dark:text-white bg-white dark:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp class="w-5 h-5" />
    </button>
  </Transition>
</template>

<style scoped>
.glass-panel {
  backdrop-filter: blur(12px);
  border: 1px solid #e4e4e7;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

:global(.dark) .glass-panel {
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
