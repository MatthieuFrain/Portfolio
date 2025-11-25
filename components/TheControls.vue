<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { useDark, useToggle } from '@vueuse/core'

const { locale, toggleLocale } = useTranslation()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:bottom-auto md:top-6 md:right-6 z-50 flex items-center pointer-events-none">
    <div class="glass-panel px-4 py-2 rounded-full flex items-center gap-4 pointer-events-auto">
      <ClientOnly>
        <!-- Language Switcher -->
        <button
          @click="toggleLocale"
          class="text-xs font-medium px-2 py-1 rounded hover:bg-white/10 transition-colors text-zinc-500 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
        >
          {{ locale === 'en' ? 'FR' : 'EN' }}
        </button>

        <!-- Divider -->
        <div class="w-px h-3 bg-zinc-200 dark:bg-white/10"></div>

        <!-- Theme Toggle -->
        <button
          @click="toggleDark()"
          class="p-1 rounded-full hover:bg-white/10 transition-colors text-zinc-500 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
          aria-label="Toggle Theme"
        >
          <component :is="isDark ? 'LucideMoon' : 'LucideSun'" class="w-4 h-4" />
        </button>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid #e4e4e7; /* border-zinc-200 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

:global(.dark) .glass-panel {
  background: rgba(24, 24, 27, 0.8); /* bg-zinc-900 */
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
