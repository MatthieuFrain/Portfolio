<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()

defineProps<{
  activeSection: string
}>()

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center px-4 pointer-events-none">
    <div class="glass-panel px-6 py-3 rounded-full flex items-center gap-8 pointer-events-auto max-w-[90vw] overflow-x-auto no-scrollbar">
      <!-- Logo / Home -->
      <button
        @click="scrollToSection('home')"
        class="text-sm font-medium transition-colors whitespace-nowrap"
        :class="activeSection === 'home' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
      >
        {{ t.nav.home }}
      </button>

      <!-- Navigation Links -->
      <div class="flex items-center gap-6">
        <button
          @click="scrollToSection('dna')"
          class="text-sm transition-colors whitespace-nowrap"
          :class="activeSection === 'dna' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
        >
          {{ t.nav.dna }}
        </button>
        <button
          @click="scrollToSection('works')"
          class="text-sm transition-colors whitespace-nowrap"
          :class="activeSection === 'works' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
        >
          {{ t.nav.works }}
        </button>
        <button
          @click="scrollToSection('contact')"
          class="text-sm transition-colors whitespace-nowrap"
          :class="activeSection === 'contact' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
        >
          {{ t.nav.contact }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(228, 228, 231, 0.5); /* border-zinc-200/50 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

:global(.dark) .glass-panel {
  background: rgba(24, 24, 27, 0.8); /* bg-zinc-900/80 */
  border: 1px solid rgba(39, 39, 42, 0.5); /* border-zinc-800/50 */
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
