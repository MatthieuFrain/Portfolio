<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
    <!-- Aurora Blobs -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
    </div>

    <div class="relative z-10 text-center space-y-8 max-w-7xl mx-auto">
      <h1 class="font-display text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 animate-fade-in-up drop-shadow-2xl">
        CRAFTING<br />THE FUTURE.
      </h1>

      <p class="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light tracking-wide animate-fade-in-up" style="animation-delay: 0.2s">
        Matthieu Frain. Transforming complex problems into fluid interfaces.
      </p>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
      <div class="w-px h-12 bg-gradient-to-b from-transparent via-zinc-400 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
// Components auto-imported
</script>
