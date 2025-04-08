<script setup lang="ts">
import { motion } from 'motion-v'

const store = useProjects()

const props = defineProps<{
  value: Project
}>()

const card = ref<HTMLElement>()

const isFocused = computed(() => store.hoveredCard === props.value.id)
</script>

<template>
  <motion.div
    class="relative"
    :layout-id="`project-card-${value.id}`"
    @mouseenter="() => store.hoveredCard = value.id"
  >
    <motion.div
      v-if="isFocused"
      layout-id="project-grid-card-selection"
      :style="{
        // backgroundImage: 'radial-gradient(transparent 1px, #000004 1px)',
        backgroundSize: '4px 4px',
        backgroundRepeat: 'repeat'
      }"
      class="top-0 absolute w-full h-full rounded-xl border border-white/10 backdrop-blur-md bg-black/40 z-10 pointer-events-none flex flex-col"
    >
      <div
        class="h-full content-center text-center text-xl md:text-4xl xl:text-4xl font-semibold pt-14"
      >
        <motion.div layout-id="project-grid-card-title">
          {{ value.title }}
        </motion.div>
      </div>
      <div class="p-6 py-5 pt-12">
        <motion.div
          layout-id="project-grid-card-subtitle"
          class="font-semibold text-2xl text-white/20 z-10"
        >
          {{ value.subtitle }}
        </motion.div>
        <motion.div
          layout-id="project-grid-card-description"
          class="font-semibold text-white/20 text-sm flex justify-between z-10"
        >
          <div>{{ value.description }}</div>
          <div>{{ value.id }}</div>
        </motion.div>
      </div>
    </motion.div>
    <div
      :id="`${value.id}`"
      ref="card"
      class="project-grid-card rounded-xl w-full overflow-hidden aspect-square relative backdrop-blur-xl group bg-white/5"
    >
      <nuxt-link
        :to="`/project/${value.id}`"
        class="w-full h-full z-[1] absolute transition-all duration-200 text-transparent"
      />
      <nuxt-img
        sizes="680px sm:440px"
        class="group-hover:scale-150 transition-transform duration-[1s] ease-out w-full h-full object-cover"
        :src="'/img/' + value.img"
      />
    </div>
  </motion.div>
</template>
