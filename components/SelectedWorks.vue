<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { ArrowUpRight } from 'lucide-vue-next'

const { t } = useTranslation()

const projects = [
  {
    id: 'gdsi',
    image: '/images/project-gdsi.jpg',
    key: 'gdsi',
    link: '#',
    class: 'md:row-span-2' // Portrait / Tall card
  },
  {
    id: 'school',
    image: '/images/project-pronote.jpg',
    key: 'school',
    link: '#',
    class: '' // Standard card
  },
  {
    id: 'tv',
    image: '/images/project-tv.jpg',
    key: 'tv',
    link: '#',
    class: 'md:col-span-2' // Landscape / Wide card
  }
]
</script>

<template>
  <section id="works" class="py-32 relative z-10">
    <div class="max-w-7xl w-full mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="text-4xl md:text-6xl font-display font-bold mb-6">
          {{ t.works.title }}
        </h2>
        <p class="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {{ t.works.subtitle }}
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md"
          :class="project.class"
        >
          <!-- Image -->
          <div class="absolute inset-0 w-full h-full">
            <img
              :src="project.image"
              :alt="t.works[project.key].title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <!-- Dark Gradient Overlay for Text Readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>

          <!-- Content (Always Visible) -->
          <div class="absolute inset-0 p-6 flex flex-col justify-end">
            <div class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div class="flex justify-between items-end mb-2">
                <span class="text-indigo-400 text-sm font-medium tracking-wide uppercase">{{ t.works[project.key].tag }}</span>
                <div class="bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight class="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">{{ t.works[project.key].title }}</h3>
              <p class="text-zinc-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {{ t.works[project.key].desc }}
              </p>
            </div>
          </div>

          <!-- Link Overlay -->
          <a :href="project.link" class="absolute inset-0 z-20" :aria-label="t.works[project.key].title"></a>
        </div>
      </div>
    </div>
  </section>
</template>
