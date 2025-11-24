<template>
  <section id="about" class="py-20 px-6 md:px-20 max-w-7xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
        <div class="space-y-4 text-slate-400 text-lg">
          <p>
            I'm a developer with a "Hacker/Maker" mindset. I don't just write code; I build products.
          </p>
          <p>
            My journey is defined by autonomy and resilience. I thrive on solving complex problems and creating efficient, user-centric solutions. Whether it's reverse engineering a school app or building an enterprise stock manager, I dive deep to deliver value.
          </p>
          <p>
            I specialize in the Vue.js ecosystem (Nuxt 3) and modern front-end technologies, always looking for the next challenge to sharpen my skills.
          </p>
        </div>
      </div>
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h3 class="text-xl font-semibold text-white mb-4">My Stack</h3>
          <ul class="grid grid-cols-2 gap-4">
            <li class="flex items-center space-x-2 text-slate-300">
              <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>Vue 3 / Nuxt 3</span>
            </li>
            <li class="flex items-center space-x-2 text-slate-300">
              <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>Tailwind CSS</span>
            </li>
            <li class="flex items-center space-x-2 text-slate-300">
              <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>TypeScript</span>
            </li>
            <li class="flex items-center space-x-2 text-slate-300">
              <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>Node.js</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
