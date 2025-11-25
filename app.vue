<script setup lang="ts">
import { useDark } from '@vueuse/core'

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
// This automatically binds class="dark" to the html tag
const isDark = useDark()
</script>

<template>
  <div class="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white min-h-screen selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 transition-colors duration-300">
    <!-- Custom Cursor -->
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>

    <!-- Navigation -->
    <TheNavbar />
    <TheControls />

    <!-- Main Content -->
    <main>
      <HeroSection />
      <BentoGrid />
      <SelectedWorks />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
