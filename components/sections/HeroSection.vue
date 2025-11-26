<template>
  <section
    class="min-h-screen flex flex-col justify-center items-center px-6 max-w-7xl w-full mx-auto pt-40 pb-32 md:pb-0 text-center">
    <div class="space-y-8 animate-fade-in-up flex flex-col items-center w-full">
      <h1 class="font-display text-6xl md:text-9xl font-bold tracking-tighter leading-none whitespace-pre-line">
        <span
          class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 animate-aurora bg-[length:200%_auto]">
          {{ t.hero.title }}
        </span>
      </h1>
      <p class="text-2xl md:text-4xl text-zinc-600 dark:text-zinc-400 max-w-3xl font-light tracking-wide mx-auto">
        {{ t.hero.subtitle }}
      </p>
      <!-- Centered Button Container -->
      <div class="pt-8 w-full flex flex-col items-center justify-center">
        <button @click="scrollToWorks" type="button"
          class="group relative px-8 py-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
          <span class="relative z-10 transition-colors">{{ t.hero.cta }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()

const scrollToWorks = () => {
  const worksSection = document.getElementById('works')
  if (worksSection) {
    worksSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
