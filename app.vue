<script setup lang="ts">
// SEO Metadata
useSeoMeta({
  title: 'Matthieu Frain | Creative Developer',
  description: 'Portfolio of Matthieu Frain, a Creative Developer & SEO Specialist crafting the future of digital experiences.',
  ogTitle: 'Matthieu Frain | Creative Developer',
  ogDescription: 'Portfolio of Matthieu Frain, a Creative Developer & SEO Specialist crafting the future of digital experiences.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="bg-zinc-950 text-white min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
    <!-- Custom Cursor -->
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>

    <!-- Navigation -->
    <TheNavbar />

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

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-zinc-950 text-white antialiased;
}
</style>
