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
      v-if="y > 400"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
      aria-label="Back to top"
    >
      <ArrowUp class="w-5 h-5" />
    </button>
  </Transition>
</template>

<style scoped>
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
