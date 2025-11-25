<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const { t } = useTranslation()

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:matthieufrain.pro@gmail.com',
    label: 'matthieufrain.pro@gmail.com'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://www.github.com/MatthieuFrain',
    label: 'MatthieuFrain'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/matthieu-frain-0628511a6/',
    label: 'Matthieu Frain'
  }
]
</script>

<template>
  <footer id="contact" class="py-24 border-t border-white/5 relative z-10 bg-zinc-950">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <!-- CTA Section -->
        <div>
          <h2 class="text-4xl md:text-6xl font-display font-bold mb-8">
            {{ t.footer.title }}
          </h2>
          <a
            href="mailto:matthieufrain.pro@gmail.com"
            class="inline-flex items-center gap-2 text-xl text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {{ t.footer.cta }}
            <span class="text-2xl">→</span>
          </a>
        </div>

        <!-- Links Section -->
        <div class="flex flex-col justify-end">
          <div class="space-y-6">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group"
            >
              <div class="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <component :is="link.icon" class="w-5 h-5" />
              </div>
              <span class="text-lg">{{ link.label }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <p>© {{ new Date().getFullYear() }} {{ t.footer.copyright }}</p>
        <div class="flex gap-6">
          <!-- <NuxtLink to="/sitemap.xml" class="hover:text-zinc-300 transition-colors">Sitemap</NuxtLink> -->
        </div>
      </div>
    </div>
  </footer>
</template>
