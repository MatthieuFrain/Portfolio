<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, computed } from 'vue'
import { Plus } from 'lucide-vue-next'

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

// Lightbox Logic
const visibleRef = ref(false)
const indexRef = ref(0)
const imgsRef = computed(() => projects.map(p => p.image))

const showImg = (index: number) => {
  indexRef.value = index
  visibleRef.value = true
}

const onHide = () => {
  visibleRef.value = false
}

const currentProject = computed(() => projects[indexRef.value])
</script>

<template>
  <section id="works" class="py-32 relative z-10">
    <div class="max-w-7xl mx-auto px-6">
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative cursor-pointer"
          v-motion-slide-visible-bottom
          @click="showImg(index)"
        >
          <!-- Card Container -->
          <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <!-- Image Container -->
            <div class="aspect-video w-full overflow-hidden">
              <img
                :src="project.image"
                :alt="t.works[project.key].title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <!-- View Project Hint (Always Visible) -->
            <div class="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-2 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform duration-300 group-hover:scale-110">
              <Plus class="w-4 h-4 text-zinc-900 dark:text-white" />
            </div>

            <!-- Desktop Overlay (Hidden on mobile, visible on hover on desktop) -->
            <div class="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6">
              <span class="text-indigo-400 text-sm font-medium mb-2">{{ t.works[project.key].tag }}</span>
              <h3 class="text-2xl font-bold text-white mb-2">{{ t.works[project.key].title }}</h3>
              <p class="text-zinc-200 text-sm">{{ t.works[project.key].desc }}</p>
            </div>
          </div>

          <!-- Mobile Text (Visible only on mobile below the image) -->
          <div class="block md:hidden mt-4">
            <span class="text-indigo-500 dark:text-indigo-400 text-xs font-medium block mb-1">{{ t.works[project.key].tag }}</span>
            <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">{{ t.works[project.key].title }}</h3>
            <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{{ t.works[project.key].desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Component -->
    <ClientOnly>
      <VueEasyLightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
      />

      <!-- Lightbox Info Overlay -->
      <Transition name="fade">
        <div v-if="visibleRef" class="fixed bottom-0 left-0 w-full z-[10000] p-6 pointer-events-none flex justify-center">
          <div class="glass-panel px-8 py-6 rounded-2xl max-w-2xl w-full pointer-events-auto text-center md:text-left">
            <span class="text-indigo-500 dark:text-indigo-400 text-sm font-medium block mb-2">{{ t.works[currentProject.key].tag }}</span>
            <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{{ t.works[currentProject.key].title }}</h3>
            <p class="text-zinc-600 dark:text-zinc-300">{{ t.works[currentProject.key].desc }}</p>
          </div>
        </div>
      </Transition>
    </ClientOnly>
  </section>
</template>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(228, 228, 231, 0.5);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

:global(.dark) .glass-panel {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(39, 39, 42, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
