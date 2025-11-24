<template>
  <nav class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
    <div class="flex items-center gap-2 p-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
      >
        {{ link.label }}
      </a>

      <div class="w-px h-4 bg-white/10 mx-2"></div>

      <button
        @click="toggleDark"
        class="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
        aria-label="Toggle Dark Mode"
      >
        <Sun v-if="isDark" class="w-4 h-4" />
        <Moon v-else class="w-4 h-4" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const links = [
  { label: 'Home', href: '#' },
  { label: 'DNA', href: '#dna' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]
</script>
