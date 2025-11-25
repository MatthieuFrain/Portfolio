<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { ref, onMounted, watch } from 'vue'

// SEO Metadata
useSeoMeta({
  title: 'Matthieu Frain | Creative Developer',
  description: 'Portfolio of Matthieu Frain, a Creative Developer & SEO Specialist crafting the future of digital experiences.',
  ogTitle: 'Matthieu Frain | Creative Developer',
  ogDescription: 'Portfolio of Matthieu Frain, a Creative Developer & SEO Specialist crafting the future of digital experiences.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})

// Scroll Spy Logic
const activeSection = ref('home')
const { y } = useWindowScroll()
const { height: windowHeight } = useWindowSize()

const checkActiveSection = () => {
  // 1. Force 'Home' if at top
  if (y.value < 100) {
    activeSection.value = 'home'
    return
  }

  // 2. Force 'Contact' if at bottom
  // We use a small buffer (50px) to ensure it triggers even if not pixel perfect
  const documentHeight = document.documentElement.scrollHeight
  if (y.value + windowHeight.value >= documentHeight - 50) {
    activeSection.value = 'contact'
    return
  }

  // 3. Middle Sections Logic (DNA vs Works)
  const sections = ['dna', 'works']
  let maxVisibility = 0
  let currentSection = activeSection.value

  for (const id of sections) {
    const element = document.getElementById(id)
    if (element) {
      const rect = element.getBoundingClientRect()
      // Calculate how much of the element is visible in the viewport
      const visibleHeight = Math.min(rect.bottom, windowHeight.value) - Math.max(rect.top, 0)

      if (visibleHeight > maxVisibility && visibleHeight > 0) {
        maxVisibility = visibleHeight
        currentSection = id
      }
    }
  }

  // Only update if we found a clearly visible section
  if (maxVisibility > 0) {
    activeSection.value = currentSection
  }
}

// Watch for scroll and resize events
watch([y, windowHeight], () => {
  checkActiveSection()
})

// Initial check
onMounted(() => {
  checkActiveSection()
})
</script>

<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <!-- Custom Cursor -->
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>

    <!-- Navigation -->
    <TheNavbar :active-section="activeSection" />

    <!-- Sections -->
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

    <!-- Controls (Theme/Lang) -->
    <TheControls />

    <!-- Back To Top -->
    <ClientOnly>
      <BackToTop />
    </ClientOnly>
  </div>
</template>
