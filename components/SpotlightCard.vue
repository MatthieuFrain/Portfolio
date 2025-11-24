<template>
  <div
    ref="cardRef"
    class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10"
    :style="{
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1, 1, 1)`,
    }"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Spotlight Effect -->
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
      :style="{
        background: `radial-gradient(600px circle at ${elementX}px ${elementY}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
      }"
    ></div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const cardRef = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(cardRef)

const tiltX = ref(0)
const tiltY = ref(0)

const handleMouseMove = (e) => {
  if (!cardRef.value) return

  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -5 // Max 5 deg rotation
  const rotateY = ((x - centerX) / centerX) * 5

  tiltX.value = rotateX
  tiltY.value = rotateY
}

const handleMouseLeave = () => {
  tiltX.value = 0
  tiltY.value = 0
}
</script>
