<template>
  <section id="works" class="py-32 px-6 md:px-20 max-w-7xl mx-auto">
    <div class="mb-20">
      <h2 class="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Selected Works</h2>
      <p class="text-xl text-zinc-400 max-w-2xl font-light">
        A collection of projects where design meets engineering.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[500px]">
      <!-- GDSI Stock Manager (Featured) -->
      <div class="group relative md:col-span-2 overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 cursor-pointer">
        <!-- Background Image with Scale Effect -->
        <div class="absolute inset-0 bg-[url('/images/project-gdsi.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>

        <div class="relative h-full flex flex-col justify-end p-10 z-10">
          <div class="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <span class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">Full Stack</span>
            <h3 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">GDSI Stock Manager</h3>
            <p class="text-lg text-zinc-300 max-w-xl opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
              A comprehensive enterprise stock management solution built with PHP and SQL. Handles complex inventory tracking, reporting, and real-time analytics for large-scale operations.
            </p>
          </div>
        </div>
      </div>

      <!-- School Hacker App -->
      <div class="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 cursor-pointer">
        <div class="absolute inset-0 bg-[url('/images/project-pronote.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>

        <div class="relative h-full flex flex-col justify-end p-8 z-10">
          <div class="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <span class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-violet-400 uppercase bg-violet-500/10 rounded-full border border-violet-500/20">Mobile App</span>
            <h3 class="font-display text-3xl font-bold text-white mb-3">School Hacker App</h3>
            <p class="text-zinc-300 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
              Mobile application developed by reverse engineering school APIs to provide a better user experience.
            </p>
          </div>
        </div>
      </div>

      <!-- AI TV Zap -->
      <div class="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 cursor-pointer">
        <div class="absolute inset-0 bg-[url('/images/project-tv.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>

        <div class="relative h-full flex flex-col justify-end p-8 z-10">
          <div class="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <span class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">AI & React</span>
            <h3 class="font-display text-3xl font-bold text-white mb-3">AI TV Zap</h3>
            <p class="text-zinc-300 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
              Smart TV recommendation system using React and advanced algorithms to personalize content viewing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
