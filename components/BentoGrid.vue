<template>
  <section id="dna" class="py-32 px-6 md:px-20 max-w-7xl mx-auto">
    <h2 class="font-display text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">The DNA</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        ref="cardRefs"
        class="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5 p-8 hover:border-indigo-500/30 transition-colors"
        :class="card.class"
        @mousemove="handleMouseMove($event, index)"
      >
        <!-- Interactive Glow -->
        <div
          class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          :style="{
            background: `radial-gradient(600px circle at ${card.x}px ${card.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`
          }"
        ></div>

        <div class="relative z-10 h-full flex flex-col justify-between pointer-events-none">
          <component :is="card.icon" class="w-10 h-10 text-indigo-500" />
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">{{ card.title }}</h3>
            <p class="text-zinc-400">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Terminal, Hammer, Shield, Bot } from 'lucide-vue-next'
import { useMouseInElement } from '@vueuse/core'

const cards = ref([
  {
    title: 'The Hacker',
    description: 'Reverse engineering school APIs to build better tools. Solving problems by digging deep.',
    icon: Terminal,
    class: '',
    x: 0,
    y: 0
  },
  {
    title: 'The Builder',
    description: 'Full-stack experience with GDSI. Building robust enterprise solutions that handle complex data and real-time operations.',
    icon: Hammer,
    class: 'md:col-span-2',
    x: 0,
    y: 0
  },
  {
    title: 'The Resilient',
    description: 'Overcoming health challenges has sharpened my focus and determination. I don\'t just write code; I persevere until the solution is elegant.',
    icon: Shield,
    class: 'md:col-span-2',
    x: 0,
    y: 0
  },
  {
    title: 'The AI Pilot',
    description: 'Leveraging Google IDX & Gemini to amplify productivity and explore new frontiers.',
    icon: Bot,
    class: '',
    x: 0,
    y: 0
  }
])

const handleMouseMove = (e, index) => {
  const card = cards.value[index]
  const target = e.currentTarget
  const rect = target.getBoundingClientRect()
  card.x = e.clientX - rect.left
  card.y = e.clientY - rect.top
}
</script>
