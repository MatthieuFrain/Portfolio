<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { useDark, useToggle } from '@vueuse/core'

const { locale, toggleLocale } = useTranslation()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 pointer-events-none">
    <!-- Empty div for spacing/balance if needed, or Logo could go here -->
    <div></div>

    <div class="glass-panel px-4 py-2 rounded-full flex items-center gap-4 pointer-events-auto">
      <ClientOnly>
        <!-- Language Switcher -->
        <button
          @click="toggleLocale"
          class="text-xs font-medium px-2 py-1 rounded hover:bg-white/10 transition-colors text-zinc-300 hover:text-white"
        >
          {{ locale === 'en' ? 'FR' : 'EN' }}
        </button>

        <!-- Divider -->
        <div class="w-px h-3 bg-white/10"></div>

        <!-- Theme Toggle -->
        <button
          @click="toggleDark()"
          class="p-1 rounded-full hover:bg-white/10 transition-colors text-zinc-300 hover:text-white"
          aria-label="Toggle Theme"
        >
          <component :is="isDark ? 'LucideMoon' : 'LucideSun'" class="w-4 h-4" />
        </button>
      </ClientOnly>
    </div>
  </header>
</template>

<style scoped>
.glass-panel {
  background: rgba(9, 9, 11, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
