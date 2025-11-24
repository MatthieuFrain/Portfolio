<template>
  <div
    class="group relative h-[500px] w-full overflow-hidden rounded-3xl bg-slate-900 border border-white/5 transition-all duration-500 hover:border-indigo-500/30"
  >
    <!-- Background Image / Gradient Placeholder -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950 transition-transform duration-700 group-hover:scale-110"></div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
      <div class="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
        <div class="flex items-center gap-3 mb-3">
          <component :is="icon" class="w-6 h-6 text-indigo-500" />
          <span class="text-sm font-medium text-indigo-400 uppercase tracking-wider">{{ tags[0] }}</span>
        </div>
        <h3 class="font-display text-3xl font-bold text-white mb-2">{{ title }}</h3>
        <p class="text-slate-400 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  tags: Array,
  icon: Object
})
</script>
