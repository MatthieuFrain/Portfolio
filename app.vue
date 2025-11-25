<script setup lang="ts">
import { useDark, useIntersectionObserver } from '@vueuse/core'
import { ref, onMounted } from 'vue'

// SEO Metadata
useSeoMeta({
  title: 'Matthieu Frain | Creative Developer',
  description: 'Portfolio of Matthieu Frain, a Creative Developer & SEO Specialist crafting the future of digital experiences.',
  ogTitle: 'Matthieu Frain | Creative Developer',
  ogDescription: 'Portfolio of Matthieu Frain, a Creative Developer & SEO Specialist crafting the future of digital experiences.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})

// Initialize Dark Mode
const isDark = useDark()

// Scroll Spy Logic
const activeSection = ref('home')
const sectionIds = ['home', 'dna', 'works', 'contact']

onMounted(() => {
  sectionIds.forEach(id => {
    const element = document.getElementById(id)
    if (element) {
      useIntersectionObserver(
        element,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            activeSection.value = id
          }
        },
        { threshold: 0.25 } // Trigger when 25% of section is visible
      )
    }
  })
})
</script>

<template>
  <div class="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white min-h-screen selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 transition-colors duration-300">
    <!-- Custom Cursor -->
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>

    <!-- Navigation -->
    <TheNavbar :active-section="activeSection" />
    <TheControls />

    <!-- Main Content -->
    <main>
      <div id="home">
        <HeroSection />
      </div>

      <div id="dna">
        <BentoGrid />
      </div>

      <div id="works">
        <SelectedWorks />
      </div>
    </main>

    <!-- Footer -->
    <div id="contact">
      <TheFooter />
    </div>

    <!-- Back To Top -->
    <ClientOnly>
      <BackToTop />
    </ClientOnly>
  </div>
</template>
