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
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 rounded-full backdrop-blur-xl transition-all duration-300 bg-white/70 border border-zinc-200/50 shadow-lg dark:bg-black/60 dark:border-white/10 dark:shadow-black/50">
    <!-- Logo / Home -->
    <button
      @click="scrollToSection('home')"
      class="text-sm font-medium transition-colors whitespace-nowrap"
      :class="activeSection === 'home' ? 'text-indigo-500 dark:text-indigo-400 font-semibold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
      :aria-label="t.nav.home"
    >
      {{ t.nav.home }}
    </button>

    <!-- Navigation Links -->
    <div class="flex items-center gap-6">
      <button
        @click="scrollToSection('dna')"
        class="text-sm transition-colors whitespace-nowrap"
        :class="activeSection === 'dna' ? 'text-indigo-500 dark:text-indigo-400 font-semibold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
        :aria-label="t.nav.dna"
      >
        {{ t.nav.dna }}
      </button>
      <button
        @click="scrollToSection('works')"
        class="text-sm transition-colors whitespace-nowrap"
        :class="activeSection === 'works' ? 'text-indigo-500 dark:text-indigo-400 font-semibold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
        :aria-label="t.nav.works"
      >
        {{ t.nav.works }}
      </button>
      <button
        @click="scrollToSection('contact')"
        class="text-sm transition-colors whitespace-nowrap"
        :class="activeSection === 'contact' ? 'text-indigo-500 dark:text-indigo-400 font-semibold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
        :aria-label="t.nav.contact"
      >
        {{ t.nav.contact }}
      </button>
    </div>
  </nav>
</template>
