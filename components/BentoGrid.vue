<template>
  <section id="dna" class="py-32 px-6 md:px-20 max-w-7xl mx-auto">
    <h2 class="font-display text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">The DNA</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      <!-- Card 1: The Hacker -->
      <div class="group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 hover:border-indigo-500/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <Terminal class="w-10 h-10 text-indigo-500" />
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">The Hacker</h3>
            <p class="text-slate-400">Reverse engineering school APIs to build better tools. Solving problems by digging deep.</p>
          </div>
        </div>
      </div>

      <!-- Card 2: The Builder (Spans 2 cols) -->
      <div class="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 hover:border-indigo-500/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <Hammer class="w-10 h-10 text-indigo-500" />
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">The Builder</h3>
            <p class="text-slate-400 max-w-lg">Full-stack experience with GDSI. Building robust enterprise solutions that handle complex data and real-time operations.</p>
          </div>
        </div>
      </div>

      <!-- Card 3: The Resilient (Spans 2 cols) -->
      <div class="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 hover:border-indigo-500/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <Shield class="w-10 h-10 text-indigo-500" />
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">The Resilient</h3>
            <p class="text-slate-400 max-w-lg">Overcoming health challenges has sharpened my focus and determination. I don't just write code; I persevere until the solution is elegant.</p>
          </div>
        </div>
      </div>

      <!-- Card 4: The AI Pilot -->
      <div class="group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 hover:border-indigo-500/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative z-10 h-full flex flex-col justify-between">
          <Bot class="w-10 h-10 text-indigo-500" />
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">The AI Pilot</h3>
            <p class="text-slate-400">Leveraging Google IDX & Gemini to amplify productivity and explore new frontiers.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Terminal, Hammer, Shield, Bot } from 'lucide-vue-next'
</script>
