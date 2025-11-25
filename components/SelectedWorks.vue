<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()

const projects = [
  {
    id: 'gdsi',
    image: '/images/project-gdsi.jpg',
    key: 'gdsi', // Key to lookup in translation
    link: '#'
  },
  {
    id: 'school',
    image: '/images/project-pronote.jpg',
    key: 'school',
    link: '#'
  },
  {
    id: 'tv',
    image: '/images/project-tv.jpg',
    key: 'tv',
    link: '#'
  }
]
</script>

<template>
  <section id="works" class="py-32 relative z-10">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="text-4xl md:text-6xl font-display font-bold mb-6">
          {{ t.works.title }}
        </h2>
        <p class="text-xl text-zinc-400 max-w-2xl">
          {{ t.works.subtitle }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group relative"
          v-motion-slide-visible-bottom
        >
          <!-- Card Container -->
          <div class="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
            <!-- Image Container -->
            <div class="aspect-video w-full overflow-hidden">
              <img
                :src="project.image"
                :alt="t.works[project.key].title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <!-- Desktop Overlay (Hidden on mobile, visible on hover on desktop) -->
            <div class="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6">
              <span class="text-indigo-400 text-sm font-medium mb-2">{{ t.works[project.key].tag }}</span>
              <h3 class="text-2xl font-bold mb-2">{{ t.works[project.key].title }}</h3>
              <p class="text-zinc-300 text-sm">{{ t.works[project.key].desc }}</p>
            </div>
          </div>

          <!-- Mobile Text (Visible only on mobile below the image) -->
          <div class="block md:hidden mt-4">
            <span class="text-indigo-400 text-xs font-medium block mb-1">{{ t.works[project.key].tag }}</span>
            <h3 class="text-xl font-bold mb-2">{{ t.works[project.key].title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ t.works[project.key].desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
