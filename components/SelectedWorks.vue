<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { ArrowUpRight } from 'lucide-vue-next'

const { t } = useTranslation()

const projects = [
  {
    id: 'gdsi',
    image: '/images/project-gdsi.jpg',
    key: 'gdsi',
    aspect: 'aspect-[9/16]'
  },
  {
    id: 'school',
    image: '/images/project-pronote.jpg',
    key: 'school',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'tv',
    image: '/images/project-tv.jpg',
    key: 'tv',
    aspect: 'aspect-[16/9]'
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

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column: Portrait Project (GDSI) -->
        <div class="h-full">
          <div class="group h-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]">
            <!-- Image Area -->
            <div class="w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <img
                :src="projects[0].image"
                :alt="t.works[projects[0].key].title"
                class="w-full h-full object-cover"
                :class="projects[0].aspect"
              />
            </div>
            <!-- Text Area -->
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <span class="text-indigo-500 dark:text-indigo-400 text-sm font-medium tracking-wide uppercase">{{ t.works[projects[0].key].tag }}</span>
              </div>
              <h3 class="text-3xl font-bold text-zinc-900 dark:text-white mb-3">{{ t.works[projects[0].key].title }}</h3>
              <p class="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                {{ t.works[projects[0].key].desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Stacked Landscape Projects -->
        <div class="flex flex-col gap-8 h-full">
          <!-- School Hacker -->
          <div class="group flex-1 bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]">
            <!-- Image Area -->
            <div class="w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <img
                :src="projects[1].image"
                :alt="t.works[projects[1].key].title"
                class="w-full h-full object-cover"
                :class="projects[1].aspect"
              />
            </div>
            <!-- Text Area -->
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <span class="text-indigo-500 dark:text-indigo-400 text-sm font-medium tracking-wide uppercase">{{ t.works[projects[1].key].tag }}</span>
              </div>
              <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{{ t.works[projects[1].key].title }}</h3>
              <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {{ t.works[projects[1].key].desc }}
              </p>
            </div>
          </div>

          <!-- TV Zap -->
          <div class="group flex-1 bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]">
            <!-- Image Area -->
            <div class="w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <img
                :src="projects[2].image"
                :alt="t.works[projects[2].key].title"
                class="w-full h-full object-cover"
                :class="projects[2].aspect"
              />
            </div>
            <!-- Text Area -->
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <span class="text-indigo-500 dark:text-indigo-400 text-sm font-medium tracking-wide uppercase">{{ t.works[projects[2].key].tag }}</span>
              </div>
              <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{{ t.works[projects[2].key].title }}</h3>
              <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {{ t.works[projects[2].key].desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
