<script setup lang="ts">
import { motion } from 'motion-v'
import { useWindowScroll } from '@vueuse/core'

import type { ContextAction } from '~/components/app/context-actions.vue'

definePageMeta({
  validate: (route) => {
    return typeof route.params.id === 'string' && route.params.id.length > 0
  },
})

useHead({
  script: [
    {
      src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js',
      type: 'module',
    },
  ],
})

const { y } = useWindowScroll()

const contextActions: ContextAction[] = [
  {
    name: 'close',
    to: '/',
    icon: 'bitcoin-icons:cross-outline',
    position: 'top',
  },
  {
    name: 'viewer',
    to: '#viewer',
    icon: 'ic:round-3d-rotation',
    position: 'top',
  },
  {
    name: 'back-to-top',
    icon: 'proicons:chevron-up',
    position: 'bottom',
    hidden: computed(() => y.value < 100),
    onClick() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
]

const store = useProjects()
const route = useRoute()
const router = useRouter()

const { data: project } = useNuxtData('project')

project.value = store.projects.find(el => el.id === route.params.id)

onKeyStroke('Escape', () => {
  router.push({ path: '/' })
})
</script>

<template>
  <div class="container h-full relative">
    <template v-if="project">
      <app-context-actions :actions="contextActions" />

      <motion.div
        layout
        :layout-id="`project-card-${project.id}`"
        class="w-full h-[66svh] overflow-hidden border border-white/20 rounded-ss-3xl rounded-se-3xl"
      >
        <nuxt-img
          class="w-full h-full object-cover"
          :src="'/img/' + project.img"
        />
      </motion.div>

      <div class="w-full border border-t-0 border-white/20 py-8 px-12">
        <motion.div
          layout-id="project-grid-card-title"
          class="text-3xl sm:text-6xl md:text-8xl font-semibold"
        >
          {{ project.title }}
        </motion.div>
      </div>

      <div
        class="w-full flex text-base sm:text-xl lg:text-4xl font-semibold h-40 border border-t-0  border-white/20 uppercase text-zinc-100"
      >
        <div
          class="w-full border-r border-white/20"
        >
          <div
            data-aos="fade-up"
            class="h-full content-center text-center "
          >
            Artwork
          </div>
        </div>
        <div
          class="w-full border-r border-white/20"
        >
          <div
            class="h-full content-center text-center "
            data-aos="fade-up"
          >
            Digital Art
          </div>
        </div>
        <div
          data-aos="fade-up"
          class="w-full h-full content-center text-center"
        >
          <div>
            March
          </div>
          <div>
            2021
          </div>
        </div>
      </div>

      <div class="px-8 py-6 lg:py-12 border border-t-0 border-white/20">
        <div
          data-aos="fade-up"
          class=" grid [grid-template-columns:repeat(auto-fit,minmax(450px,1fr))] gap-8 indent-4 leading-relaxed text-zinc-400"
        >
          <p>The image depicts a highly stylized, possibly digitally rendered character with a blue, glowing, and somewhat surreal appearance. The figure appears humanoid, with realistic facial features, yet the overall aesthetic leans toward the fantastical or otherworldly. The character’s skin is a metallic, bluish tone, and the texture of their suit or body surface resembles tightly-woven synthetic fabric or futuristic armor. The character's expression is intense and emotive, possibly displaying anguish, rage, or pain, with the mouth open and teeth visible.</p>

          <p>A striking element of the image is the vivid blue energy or paint-like streaks emerging from the character's eyes. These streaks extend outward and curve dynamically, as though they are in motion or being manipulated by some force. The way they blur slightly and leave trails gives the impression of immense power or emotional outburst. These streaks contribute significantly to the dramatic, almost supernatural feel of the scene.</p>

          <p>The character’s body posture and facial tension suggest a climactic or emotionally charged moment. The jaw is clenched, and the brows are furrowed, though the exact eyes are obscured by the bright blue energy. This makes the scene more intense, as the lack of visible pupils adds to the character’s mystery and possibly their dehumanization. The figure could be in the middle of a transformation or releasing a powerful force.</p>

          <p>The background is stark and dark, which helps the vibrant blue of the energy stand out more strongly. There are no other elements in the background to distract the viewer from the character, emphasizing their significance and amplifying the emotional impact. The contrast between the dark background and the glowing blue energy suggests themes of inner turmoil, power struggles, or the unleashing of hidden potential.</p>

          <p>Overall, this image appears to be a visual representation of raw emotion and power. The artistic choices—such as the texture of the figure’s skin, the dramatic lighting, and the swirling blue energy—combine to create a compelling and dramatic character portrayal. It could be a scene from a video game, animation, or a conceptual artwork representing inner conflict or supernatural transformation. The lack of external context leaves the interpretation open, yet the emotion and power it conveys are undeniably strong.</p>
        </div>
      </div>

      <div
        id="viewer"
        class="w-full h-[80vh] border border-t-0 border-white/20 rounded-es-3xl rounded-ee-3xl"
      >
        <model-viewer
          src="/models/headcrab.glb"
          auto-rotate
          camera-controls
          shadow-intensity="1"
          style="width: 100%; height: 100%;"
        />
      </div>
    </template>
    <div v-else>
      unknown project
    </div>
  </div>
</template>
