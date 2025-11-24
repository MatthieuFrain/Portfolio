<template>
  <footer class="py-12 px-6 md:px-20 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left">
        <h3 class="text-2xl font-bold text-white mb-2">Let's build something amazing.</h3>
        <p class="text-slate-400">Open for opportunities and collaborations.</p>
      </div>
      <div class="flex items-center gap-6">
        <a href="mailto:contact@matthieufrain.com" class="text-slate-400 hover:text-indigo-400 transition-colors">
          <Mail class="w-6 h-6" />
          <span class="sr-only">Email</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-indigo-400 transition-colors">
          <Github class="w-6 h-6" />
          <span class="sr-only">GitHub</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-indigo-400 transition-colors">
          <Linkedin class="w-6 h-6" />
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
    <div class="mt-12 text-center text-slate-600 text-sm">
      &copy; {{ new Date().getFullYear() }} Matthieu Frain. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { Mail, Github, Linkedin } from 'lucide-vue-next'
</script>
