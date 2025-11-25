<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'

const { locale, toggleLocale } = useTranslation()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 md:fixed md:top-6 md:right-6 md:bottom-auto md:left-auto md:translate-x-0 z-50 flex items-center gap-2 px-2 py-2 rounded-full backdrop-blur-xl transition-all duration-300 bg-white/80 border border-zinc-200/50 shadow-lg dark:bg-black/80 dark:border-white/10 dark:shadow-black/50">
    <ClientOnly>
      <!-- Language Switcher -->
      <button
        @click="toggleLocale"
        class="text-xs font-medium px-2 py-1 rounded hover:bg-white/10 transition-colors text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        :aria-label="'Switch to ' + (locale === 'en' ? 'French' : 'English')"
      >
        {{ locale === 'en' ? 'FR' : 'EN' }}
      </button>

      <!-- Divider -->
      <div class="w-px h-3 bg-zinc-200 dark:bg-zinc-800"></div>

      <!-- Theme Toggle -->
      <button
        @click="toggleDark()"
        class="p-1 rounded-full hover:bg-white/10 transition-colors text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        aria-label="Toggle Dark Mode"
      >
        <Sun v-if="!isDark" class="h-5 w-5" />
        <Moon v-else class="h-5 w-5 text-zinc-300 dark:hover:text-white" />
      </button>
    </ClientOnly>
  </div>
</template>
