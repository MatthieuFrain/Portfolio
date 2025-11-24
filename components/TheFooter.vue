<template>
  <footer id="contact" class="relative py-32 px-6 md:px-20 border-t border-white/5 bg-black">
    <div class="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
      <h2 class="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter">
        LET'S TALK
      </h2>
      <a
        href="mailto:contact@matthieufrain.com"
        class="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden rounded-full bg-indigo-600 text-white transition-transform hover:scale-105"
      >
        <span class="relative z-10 font-bold text-xl tracking-wide">Get in touch</span>
        <div class="absolute inset-0 bg-indigo-500 transition-transform duration-300 group-hover:scale-110"></div>
      </a>

      <div class="flex gap-8 pt-12">
        <a href="#" class="text-slate-400 hover:text-white transition-colors">GitHub</a>
        <a href="#" class="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
        <a href="#" class="text-slate-400 hover:text-white transition-colors">Twitter</a>
      </div>

      <p class="text-slate-600 text-sm">
        &copy; {{ new Date().getFullYear() }} Matthieu Frain. Architect & Hacker.
      </p>
    </div>

    <!-- Back to Top -->
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:scale-110 z-40"
      :class="{ 'translate-y-24 opacity-0': !showBackToTop, 'translate-y-0 opacity-100': showBackToTop }"
    >
      <ArrowUp class="w-6 h-6" />
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
