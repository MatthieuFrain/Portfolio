<template>
  <div class="relative min-h-screen bg-black text-slate-200 selection:bg-indigo-500 selection:text-white overflow-x-hidden font-sans">
    <!-- Grainy Noise Overlay -->
    <div class="fixed inset-0 z-[9998] pointer-events-none opacity-[0.03] mix-blend-overlay"
         style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');">
    </div>

    <CustomCursor />
    <TheNavbar />

    <main class="relative z-10">
      <HeroSection />
      <BentoGrid />
      <Projects />
      <TheFooter />
    </main>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

// Initialize Lenis for smooth scrolling
let lenis

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
})
</script>

<style>
html {
  scroll-behavior: auto;
}

body {
  @apply bg-black text-white antialiased;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  @apply bg-black;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-800 rounded-full hover:bg-slate-700 transition-colors;
}
</style>
