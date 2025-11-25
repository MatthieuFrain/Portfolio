<template>
  <nav class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 md:w-auto md:px-0">
    <div class="flex items-center justify-between md:justify-center gap-2 p-2 rounded-2xl md:rounded-full bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5">
      <!-- Mobile: Simplified Menu -->
      <div class="flex md:hidden w-full justify-around">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          class="p-3 text-zinc-400 hover:text-white transition-all active:scale-95"
        >
          <component :is="link.icon" class="w-5 h-5" />
        </a>
      </div>

      <!-- Desktop: Full Menu -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          class="px-5 py-2.5 text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5 active:scale-95"
        >
          {{ t.nav[link.key] }}
        </a>
      </div>

      <div class="hidden md:block w-px h-4 bg-white/10 mx-2"></div>

      <div class="flex items-center gap-1">
        <!-- Lang Switch -->
        <button
          @click="toggleLocale"
          class="px-3 py-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5 active:scale-95 uppercase"
        >
          {{ locale }}
        </button>

        <!-- Theme Toggle -->
        <ClientOnly>
          <button
            @click="toggleDark()"
            class="p-2.5 text-zinc-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5 active:scale-95"
            aria-label="Toggle Dark Mode"
          >
            <Sun v-if="isDark" class="w-4 h-4" />
            <Moon v-else class="w-4 h-4" />
          </button>
        </ClientOnly>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon, Home, Dna, Briefcase, Mail } from 'lucide-vue-next'
import { useTranslation } from '~/composables/useTranslation'

const { t, locale, toggleLocale } = useTranslation()

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
const toggleDark = useToggle(isDark)

const links = [
  { key: 'home', label: 'Home', href: '#', icon: Home },
  { key: 'dna', label: 'DNA', href: '#dna', icon: Dna },
  { key: 'works', label: 'Works', href: '#works', icon: Briefcase },
  { key: 'contact', label: 'Contact', href: '#contact', icon: Mail },
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
