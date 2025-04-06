<script setup lang="ts">
import { motion } from 'motion-v'
import { Icon } from '@iconify/vue'

defineProps<{
  value: Project
}>()
</script>

<template>
  <motion.div
    ref="card"
    layout
    :layout-id="`project-card-${value.id}`"
    class="project-card rounded-3xl w-full overflow-hidden h-[66svh] mb-4 relative backdrop-blur-xl border border-white/10"
  >
    <div
      class="w-full h-full flex flex-col justify-between z-[1] absolute"
    >
      <div class="py-5 px-7 text-white/50 text-sm flex justify-between">
        <div>{{ value.description }}</div>
        <div>{{ value.id }}</div>
      </div>
      <div class="font-semibold py-10 px-14 bg-gradient-to-b from-transparent to-black/90 pt-12">
        <div class="drop-shadow-md shadow-black text-4xl md:text-7xl xl:text-6xl py-2 flex items-center justify-between">
          <motion.div layout-id="project-grid-card-title">
            {{ value.title }}
          </motion.div>
          <nuxt-link :to="`/project/${value.id}`">
            <div class="relative flex items-center w-max uppercase text-lg text-white bg-black/40 z-10 px-9 py-3 border rounded-full hover:bg-white hover:text-black cursor-pointer transition-colors group/view">
              <icon
                class="text-black/25 scale-125 absolute left-5"
                icon="mdi:eye-outline"
                width="24"
              />
              <nuxt-link
                :to="`/project/${value.id}`"
                class="group-hover/view:translate-x-2 gap-1 flex items-center transition-transform duration-300 ease-out"
              >
                <div class="ml-3">
                  View
                </div>
                <icon icon="ic:round-chevron-right" />
              </nuxt-link>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-img
      class="w-full h-full object-cover"
      :src="'/img/' + value.img"
    />
  </motion.div>
</template>
