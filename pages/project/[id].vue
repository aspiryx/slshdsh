<script setup lang="ts">
import { motion } from 'motion-v'
import { Icon } from '@iconify/vue'

definePageMeta({
  validate: (route) => {
    return typeof route.params.id === 'string' && route.params.id.length > 0
  },
})

const store = useProjects()
const route = useRoute()
const router = useRouter()

const { data: project } = useNuxtData('project')

project.value = store.projects.find(el => el.id === route.params.id)

onKeyStroke('Escape', () => router.push({ path: '/' }))
</script>

<template>
  <div class="container h-full relative">
    <template v-if="project">
      <div class="absolute h-screen left-full">
        <nuxt-link
          to="/"
          class="sticky top-24"
        >
          <div class=" p-4 rounded-full border border-white/10 bg-black/40 hover:bg-white hover:text-black transition-colors cursor-pointer backdrop-blur-md">
            <icon
              icon="bitcoin-icons:cross-outline"
              width="32"
            />
          </div>
        </nuxt-link>
      </div>
      <motion.div
        layout
        :layout-id="`project-card-${project.id}`"
        class="w-full h-[66svh] rounded-3xl overflow-hidden"
      >
        <nuxt-img
          class="w-full h-full object-cover"
          :src="'/img/' + project.img"
        />
      </motion.div>
      <motion.div
        layout-id="project-grid-card-title"
        class="text-8xl semibold py-8"
      >
        {{ project.title }}
      </motion.div>
    </template>
    <div v-else>
      unknown project
    </div>
  </div>
</template>
