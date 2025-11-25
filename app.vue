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
  const documentHeight = document.documentElement.scrollHeight
  if (y.value + windowHeight.value >= documentHeight - 50) {
    activeSection.value = 'contact'
    return
  }

  // 3. Middle Sections Logic
  const sections = ['dna', 'works']
  let maxVisibility = 0
  let currentSection = activeSection.value

  // If we are not at home or contact, default to keeping current or finding best match
  // We only check dna and works here because home and contact are handled by edge cases

  // However, if we scrolled past home but not at bottom, we need to decide between dna and works.
  // Let's check which one is most visible.

  for (const id of sections) {
    const element = document.getElementById(id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const visibleHeight = Math.min(rect.bottom, windowHeight.value) - Math.max(rect.top, 0)

      if (visibleHeight > maxVisibility && visibleHeight > 0) {
        maxVisibility = visibleHeight
        currentSection = id
      }
    }
  }

  // Only update if we found a clearly visible section, otherwise keep current (unless it was home/contact which are handled)
  if (maxVisibility > 0) {
    activeSection.value = currentSection
  }
}

watch([y, windowHeight], () => {
  checkActiveSection()
})

onMounted(() => {
  checkActiveSection()
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
