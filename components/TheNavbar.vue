<template>
  <nav class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
    <div class="flex items-center gap-2 p-2 rounded-full bg-zinc-950/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        @click.prevent="scrollToSection(link.href)"
        class="px-5 py-2.5 text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5 active:scale-95"
      >
        {{ link.label }}
      </a>

      <div class="w-px h-4 bg-white/10 mx-2"></div>

      <button
        @click="toggleDark()"
        class="p-2.5 text-zinc-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5 active:scale-95"
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

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
const toggleDark = useToggle(isDark)

const links = [
  { label: 'Home', href: '#' },
  { label: 'DNA', href: '#dna' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

const scrollToSection = (href) => {
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
