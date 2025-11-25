<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { ref, onMounted, onUnmounted } from 'vue'

const { t } = useTranslation()
const activeSection = ref('home')

const sections = ['home', 'about', 'works', 'contact']

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = id
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, {
    threshold: 0.5
  })

  sections.forEach((id) => {
    const element = document.getElementById(id)
    if (element) observer?.observe(element)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center px-4 pointer-events-none">
    <div class="glass-panel px-6 py-3 rounded-full flex items-center gap-8 pointer-events-auto max-w-[90vw] overflow-x-auto no-scrollbar">
      <!-- Logo / Home -->
      <button
        @click="scrollToSection('home')"
        class="text-sm font-medium transition-colors whitespace-nowrap"
        :class="activeSection === 'home' ? 'text-indigo-500' : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'"
      >
        {{ t.nav.home }}
      </button>

      <!-- Navigation Links -->
      <div class="flex items-center gap-6">
        <button
          @click="scrollToSection('about')"
          class="text-sm transition-colors whitespace-nowrap"
          :class="activeSection === 'about' ? 'text-indigo-500' : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'"
        >
          {{ t.nav.dna }}
        </button>
        <button
          @click="scrollToSection('works')"
          class="text-sm transition-colors whitespace-nowrap"
          :class="activeSection === 'works' ? 'text-indigo-500' : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'"
        >
          {{ t.nav.works }}
        </button>
        <button
          @click="scrollToSection('contact')"
          class="text-sm transition-colors whitespace-nowrap"
          :class="activeSection === 'contact' ? 'text-indigo-500' : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'"
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
  border: 1px solid #e4e4e7; /* border-zinc-200 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

:global(.dark) .glass-panel {
  background: rgba(24, 24, 27, 0.8); /* bg-zinc-950/80 */
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-color: #27272a; /* border-zinc-800 */
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
