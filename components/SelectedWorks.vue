<template>
  <section id="works" class="py-32 px-6 md:px-20 max-w-7xl mx-auto">
    <div class="mb-20" v-motion-slide-visible-bottom>
      <h2 class="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{{ t.works.title }}</h2>
      <p class="text-xl text-zinc-400 max-w-2xl font-light">
        {{ t.works.subtitle }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[500px]">
      <!-- GDSI Stock Manager (Featured) -->
      <div
        class="group relative md:col-span-2 overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 cursor-pointer flex flex-col md:block"
        v-motion-slide-visible-bottom
        :delay="100"
      >
        <!-- Background Image -->
        <div class="h-64 md:absolute md:inset-0 bg-[url('/images/project-gdsi.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div class="hidden md:block absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>

        <!-- Content -->
        <div class="relative h-full flex flex-col justify-end p-6 md:p-10 z-10 bg-zinc-900 md:bg-transparent flex-1">
          <div class="transform md:translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <span class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">{{ t.works.gdsi.tag }}</span>
            <h3 class="font-display text-3xl md:text-5xl font-bold text-white mb-4">{{ t.works.gdsi.title }}</h3>
            <p class="text-zinc-400 md:text-zinc-300 max-w-xl md:opacity-0 transform md:translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
              {{ t.works.gdsi.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- School Hacker App -->
      <div
        class="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 cursor-pointer flex flex-col md:block"
        v-motion-slide-visible-bottom
        :delay="200"
      >
        <div class="h-64 md:absolute md:inset-0 bg-[url('/images/project-pronote.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div class="hidden md:block absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>

        <div class="relative h-full flex flex-col justify-end p-6 md:p-8 z-10 bg-zinc-900 md:bg-transparent flex-1">
          <div class="transform md:translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <span class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-violet-400 uppercase bg-violet-500/10 rounded-full border border-violet-500/20">{{ t.works.school.tag }}</span>
            <h3 class="font-display text-2xl md:text-3xl font-bold text-white mb-3">{{ t.works.school.title }}</h3>
            <p class="text-zinc-400 md:text-zinc-300 md:opacity-0 transform md:translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
              {{ t.works.school.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- AI TV Zap -->
      <div
        class="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 cursor-pointer flex flex-col md:block"
        v-motion-slide-visible-bottom
        :delay="300"
      >
        <div class="h-64 md:absolute md:inset-0 bg-[url('/images/project-tv.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div class="hidden md:block absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>

        <div class="relative h-full flex flex-col justify-end p-6 md:p-8 z-10 bg-zinc-900 md:bg-transparent flex-1">
          <div class="transform md:translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <span class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">{{ t.works.tv.tag }}</span>
            <h3 class="font-display text-2xl md:text-3xl font-bold text-white mb-3">{{ t.works.tv.title }}</h3>
            <p class="text-zinc-400 md:text-zinc-300 md:opacity-0 transform md:translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
              {{ t.works.tv.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()
</script>
