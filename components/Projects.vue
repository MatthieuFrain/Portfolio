<template>
  <section id="projects" class="py-32 px-6 md:px-20 max-w-7xl mx-auto">
    <div class="mb-20">
      <h2 class="font-display text-4xl md:text-6xl font-bold text-white mb-6">Selected Works</h2>
      <p class="text-xl text-slate-400 max-w-2xl">
        A collection of projects where design meets engineering.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[400px]">
      <!-- Featured Project (Spans 2 columns) -->
      <SpotlightCard class="md:col-span-2 group cursor-pointer">
        <div class="flex flex-col h-full justify-between relative z-10">
          <div class="flex justify-between items-start">
            <div class="p-2 bg-indigo-500/20 rounded-lg text-indigo-300">
              <Database class="w-8 h-8" />
            </div>
            <span class="px-4 py-1 rounded-full border border-slate-700 text-sm text-slate-400">2024</span>
          </div>

          <div class="space-y-4">
            <h3 class="font-display text-4xl font-bold text-white group-hover:text-indigo-300 transition-colors">GDSI Stock Manager</h3>
            <p class="text-lg text-slate-400 max-w-lg">
              A comprehensive enterprise stock management solution built with PHP and SQL. Handles complex inventory tracking, reporting, and real-time analytics for large-scale operations.
            </p>
            <div class="flex flex-wrap gap-3 pt-4">
              <span class="px-3 py-1 text-sm font-medium rounded-md bg-slate-800 text-indigo-300 border border-slate-700">Full Stack</span>
              <span class="px-3 py-1 text-sm font-medium rounded-md bg-slate-800 text-indigo-300 border border-slate-700">PHP</span>
              <span class="px-3 py-1 text-sm font-medium rounded-md bg-slate-800 text-indigo-300 border border-slate-700">SQL</span>
            </div>
          </div>
        </div>
      </SpotlightCard>

      <!-- Secondary Project 1 -->
      <SpotlightCard class="group cursor-pointer">
        <div class="flex flex-col h-full justify-between relative z-10">
          <div class="flex justify-between items-start">
            <div class="p-2 bg-violet-500/20 rounded-lg text-violet-300">
              <Smartphone class="w-8 h-8" />
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-display text-3xl font-bold text-white group-hover:text-violet-300 transition-colors">School Hacker App</h3>
            <p class="text-slate-400">
              Mobile application developed by reverse engineering school APIs to provide a better user experience.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-violet-300 border border-slate-700">Reverse Engineering</span>
              <span class="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-violet-300 border border-slate-700">Mobile UX</span>
            </div>
          </div>
        </div>
      </SpotlightCard>

      <!-- Secondary Project 2 -->
      <SpotlightCard class="group cursor-pointer">
        <div class="flex flex-col h-full justify-between relative z-10">
          <div class="flex justify-between items-start">
            <div class="p-2 bg-blue-500/20 rounded-lg text-blue-300">
              <Tv class="w-8 h-8" />
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-display text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">AI TV Zap</h3>
            <p class="text-slate-400">
              Smart TV recommendation system using React and advanced algorithms to personalize content viewing.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-blue-300 border border-slate-700">React</span>
              <span class="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-blue-300 border border-slate-700">AI</span>
            </div>
          </div>
        </div>
      </SpotlightCard>

      <!-- Placeholder for future project or contact CTA -->
      <SpotlightCard class="md:col-span-2 group cursor-pointer flex items-center justify-center text-center">
         <div class="space-y-4">
            <h3 class="font-display text-3xl font-bold text-white">Have a project in mind?</h3>
            <p class="text-slate-400">Let's build something extraordinary together.</p>
            <a href="mailto:contact@matthieufrain.com" class="inline-block px-8 py-3 bg-white text-slate-900 rounded-full font-medium hover:scale-105 transition-transform">Get in touch</a>
         </div>
      </SpotlightCard>
    </div>
  </section>
</template>

<script setup>
import { Database, Smartphone, Tv } from 'lucide-vue-next'
</script>
