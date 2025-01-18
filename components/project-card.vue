<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  zIndex: number
  order: number
  title: string
  subtitle: string
  description: string
  img: string
}>()

const anchor = ref<HTMLElement>()
const card = ref<HTMLElement>()
const width = ref()
const height = ref()

const quality = ref(70)

function updateValues() {
  if (anchor.value && card.value) {
    const anchorRect = anchor.value.getBoundingClientRect()
    const cardRect = card.value.getBoundingClientRect()

    width.value = anchorRect.width
    height.value = window.innerHeight / 2

    const start = window.scrollY + anchorRect.y - window.innerHeight
    const end = start + cardRect.height

    card.value.style.setProperty('--start', `${start}px`)
    card.value.style.setProperty('--end', `${end + 177}px`)
  }
}

onMounted(() => {
  updateValues()

  // cool effect but cant keep it
  // quality.value = 1
  // const i = setInterval(() => {
  //   quality.value += 2
  //   if (quality.value > 99) {
  //     quality.value = 99
  //     clearInterval(i)
  //   }
  // }, 200)

  window.addEventListener('resize', () => {
    updateValues()
  })
})
</script>

<template>
  <div
    ref="anchor"
    class="project-card__anchor z-10"
  />
  <div
    :id="`${order}`"
    ref="card"
    data-aos="fade-up"
    class="project-card rounded-xl w-full overflow-hidden h-[660px] mb-4 relative backdrop-blur-xl group"
    :style="{ zIndex, transitionDelay: `${order * 150}ms` }"
  >
    <nuxt-link
      :to="`#${order}`"
      class="w-full h-full flex flex-col z-[1] absolute hover:bg-black/40 hover:backdrop-blur-sm transition-all duration-700"
    >
      <div
        class=" h-full drop-shadow-md shadow-black content-center text-center text-4xl md:text-7xl xl:text-9xl font-semibold p-6"
      >
        <div class="relative flex flex-col items-center justify-center">
          <div>{{ title }}</div>
          <Icon
            icon="material-symbols:eye-tracking-outline"
            width="52"
            class="eye-icon opacity-0 text-white/50 mt-4 transition-opacity"
          />
        </div>
      </div>
      <div class="p-6 py-12 bg-gradient-to-b from-transparent to-black/90 pt-12">
        <div class="font-semibold text-2xl text-white/50">
          {{ subtitle }}
        </div>
        <div class="font-semibold text-white/50 text-sm flex justify-between">
          <div>{{ description }}</div>
          <div>0{{ zIndex }} 0{{ zIndex }} 0{{ zIndex }}</div>
        </div>
      </div>
    </nuxt-link>
    <img
      class="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover"
      :src="'/img/' + img"
    >
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  @apply sticky bottom-0;

  animation: fade-in ease-in-out forwards;
  animation-timeline: scroll();
  animation-range-start: var(--start);
  animation-range-end: var(--end);

  box-shadow:
    0px 3.6px 2.6px rgba(0, 0, 0, 0.059),
    0px 8px 5.8px rgba(0, 0, 0, 0.092),
    0px 13.6px 9.9px rgba(0, 0, 0, 0.114),
    0px 20.9px 15.3px rgba(0, 0, 0, 0.129),
    0px 31px 22.6px rgba(0, 0, 0, 0.139),
    0px 45.6px 33.3px rgba(0, 0, 0, 0.144),
    0px 68.3px 49.9px rgba(0, 0, 0, 0.145),
    0px 108.8px 79.5px rgba(0, 0, 0, 0.141),
    0px 204px 149px rgba(0, 0, 0, 0.13);

  opacity: 0;
  scale: 0.75;

  translate: 0 20%;

  &:hover {
    .eye-icon {
      opacity: 1;
    }
  }
}

@keyframes fade-in {
  to {
    scale: 1;
    translate: 0;
  }
}
</style>
