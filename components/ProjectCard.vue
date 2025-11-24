<template>
  <div
    class="group relative h-[600px] w-full overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10"
  >
    <!-- Browser Frame -->
    <div class="absolute inset-x-4 top-4 bottom-0 bg-zinc-950 rounded-t-xl overflow-hidden border border-white/5 transition-transform duration-700 group-hover:translate-y-2">
      <!-- Browser Header -->
      <div class="h-8 bg-zinc-900 border-b border-white/5 flex items-center px-3 gap-1.5">
        <div class="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div class="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
        <!-- URL Bar Mockup -->
        <div class="ml-4 flex-1 h-5 bg-zinc-950 rounded border border-white/5 flex items-center px-2">
          <div class="w-2 h-2 rounded-full bg-indigo-500/50"></div>
          <div class="ml-2 w-20 h-1 bg-zinc-800 rounded-full"></div>
        </div>
      </div>

      <!-- Content Placeholder / Image -->
      <div class="relative h-full w-full bg-zinc-900/50 group-hover:bg-zinc-900/30 transition-colors">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Project Info Overlay -->
        <div class="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div class="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <div class="flex items-center gap-3 mb-3">
              <component :is="icon" class="w-5 h-5 text-indigo-400" />
              <span class="text-xs font-bold text-indigo-400 uppercase tracking-widest">{{ tags[0] }}</span>
            </div>
            <h3 class="font-display text-3xl font-bold text-white mb-2">{{ title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              {{ description }}
            </p>
          </div>
        </div>
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
