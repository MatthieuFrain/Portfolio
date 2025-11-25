<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
    <div class="glass-panel px-6 py-3 rounded-full flex items-center gap-8 pointer-events-auto max-w-[90vw] overflow-x-auto no-scrollbar">
      <!-- Logo / Home -->
      <button @click="scrollToSection('home')" class="text-sm font-medium hover:text-indigo-400 transition-colors whitespace-nowrap">
        {{ t.nav.home }}
      </button>

      <!-- Navigation Links -->
      <div class="flex items-center gap-6">
        <button @click="scrollToSection('about')" class="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
          {{ t.nav.dna }}
        </button>
        <button @click="scrollToSection('works')" class="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
          {{ t.nav.works }}
        </button>
        <button @click="scrollToSection('contact')" class="text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap">
          {{ t.nav.contact }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.glass-panel {
  background: rgba(9, 9, 11, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
