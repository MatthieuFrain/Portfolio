<template>
  <footer class="py-12 px-6 md:px-20 border-t border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left">
        <h3 class="text-2xl font-bold text-white mb-2">{{ t.footer.title }}</h3>
        <p class="text-zinc-400">{{ t.footer.cta }}</p>
      </div>
      <div class="flex items-center gap-6">
        <a href="mailto:matthieufrain.pro@gmail.com" class="text-zinc-400 hover:text-indigo-400 transition-colors">
          <Mail class="w-6 h-6" />
          <span class="sr-only">Email</span>
        </a>
        <a href="https://github.com/MatthieuFrain" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-indigo-400 transition-colors">
          <Github class="w-6 h-6" />
          <span class="sr-only">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/matthieu-frain-0628511a6/" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-indigo-400 transition-colors">
          <Linkedin class="w-6 h-6" />
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
    <div class="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-zinc-600 text-sm">
      <p>&copy; {{ new Date().getFullYear() }} {{ t.footer.copyright }}</p>
      <a href="/sitemap.xml" class="hover:text-zinc-400 transition-colors">Sitemap</a>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Github, Linkedin } from 'lucide-vue-next'
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()
</script>
