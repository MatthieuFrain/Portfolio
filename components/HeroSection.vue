<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
    <!-- Aurora Background Integration -->
    <div class="absolute inset-0 z-0">
      <AuroraBackground class="h-full" />
    </div>

    <div class="relative z-10 text-center space-y-8 max-w-5xl mx-auto">
      <h1 class="font-display text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white mix-blend-difference animate-fade-in-up">
        ARCHITECT <span class="text-indigo-500">&</span> HACKER
      </h1>

      <p class="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide animate-fade-in-up" style="animation-delay: 0.2s">
        Matthieu Frain. Transforming complex problems into fluid interfaces.
      </p>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
      <div class="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
// Components auto-imported
</script>
