<template>
  <section id="dna" class="py-20 px-6 md:px-20 max-w-7xl mx-auto">
    <h2 class="font-display text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-12 tracking-tight">{{ t.about.title }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      <!-- The Hacker -->
      <div class="group relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden hover:border-indigo-500/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <div class="p-3 bg-zinc-100 dark:bg-zinc-950 rounded-2xl w-fit border border-zinc-200 dark:border-zinc-800">
            <Terminal class="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{{ t.about.hacker.title }}</h3>
            <p class="text-zinc-600 dark:text-zinc-400">{{ t.about.hacker.desc }}</p>
          </div>
        </div>
      </div>

      <!-- The Builder -->
      <div class="group relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden md:col-span-2 hover:border-violet-500/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <div class="p-3 bg-zinc-100 dark:bg-zinc-950 rounded-2xl w-fit border border-zinc-200 dark:border-zinc-800">
            <Layers class="w-8 h-8 text-violet-500 dark:text-violet-400" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{{ t.about.builder.title }}</h3>
            <p class="text-zinc-600 dark:text-zinc-400 max-w-xl">{{ t.about.builder.desc }}</p>
          </div>
        </div>
      </div>

      <!-- The Resilient -->
      <div class="group relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden md:col-span-2 hover:border-emerald-500/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <div class="p-3 bg-zinc-100 dark:bg-zinc-950 rounded-2xl w-fit border border-zinc-200 dark:border-zinc-800">
            <Activity class="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{{ t.about.resilient.title }}</h3>
            <p class="text-zinc-600 dark:text-zinc-400 max-w-xl">{{ t.about.resilient.desc }}</p>
          </div>
        </div>
      </div>

      <!-- The AI Pilot -->
      <div class="group relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden hover:border-blue-500/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <div class="p-3 bg-zinc-100 dark:bg-zinc-950 rounded-2xl w-fit border border-zinc-200 dark:border-zinc-800">
            <Cpu class="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{{ t.about.pilot.title }}</h3>
            <p class="text-zinc-600 dark:text-zinc-400">{{ t.about.pilot.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Terminal, Layers, Activity, Cpu } from 'lucide-vue-next'
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()
</script>
