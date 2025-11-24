<template>
  <section class="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto pt-32">
    <div class="space-y-8 animate-fade-in-up">
      <h1 class="font-display text-6xl md:text-9xl font-bold tracking-tighter leading-none">
        <span class="block text-white">Matthieu</span>
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 animate-aurora bg-[length:200%_auto]">
          Frain.
        </span>
      </h1>
      <p class="text-2xl md:text-4xl text-slate-400 max-w-3xl font-light tracking-wide">
        Front-End Developer & Creative Maker. <br />
        <span class="text-slate-500">Building digital experiences that matter.</span>
      </p>
      <div class="pt-8 flex gap-6">
        <a href="#projects" class="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span class="relative z-10 group-hover:text-white transition-colors">See my work</span>
        </a>
        <a href="#about" class="px-8 py-4 border border-slate-700 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-colors">
          About me
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
