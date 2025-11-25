<template>
  <section class="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto pt-32">
    <div class="space-y-8 animate-fade-in-up">
      <h1 class="font-display text-6xl md:text-9xl font-bold tracking-tighter leading-none whitespace-pre-line">
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 animate-aurora bg-[length:200%_auto]">
          {{ t.hero.title }}
        </span>
      </h1>
      <p class="text-2xl md:text-4xl text-zinc-400 max-w-3xl font-light tracking-wide">
        {{ t.hero.subtitle }}
      </p>
      <div class="pt-8 flex gap-6">
        <a href="#works" class="group relative px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span class="relative z-10 group-hover:text-white transition-colors">{{ t.hero.cta }}</span>
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <a href="#works" class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50 cursor-pointer hover:opacity-100 transition-opacity">
      <div class="w-px h-12 bg-gradient-to-b from-transparent via-zinc-400 to-transparent"></div>
    </a>
  </section>
</template>

<script setup>
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()
</script>
