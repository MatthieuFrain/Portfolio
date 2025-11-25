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
  <div class="relative min-h-screen w-full overflow-hidden">
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>

    <TheNavbar :active-section="activeSection" />

    <div id="home">
      <HeroSection />
    </div>

    <div id="dna">
      <BentoGrid />
    </div>

    <div id="works">
      <SelectedWorks />
    </div>

    <div id="contact">
      <TheFooter />
    </div>

    <TheControls />

    <ClientOnly>
      <BackToTop />
    </ClientOnly>
  </div>
</template>
