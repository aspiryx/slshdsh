<script lang="ts">
import { useWindowScroll } from '@vueuse/core'

export const showHeader = ref(true)

export default {
  setup() {
    const { y: scrollY } = useWindowScroll()

    watch(scrollY, (val, oldVal) => {
      showHeader.value = val < oldVal || val <= 80
    })

    const links = [
      {
        name: 'LINKS',
        path: '/links',
      },
      {
        name: 'CV',
        path: '/cv',
      },
      {
        name: 'PRESS',
        path: '/press',
      },
    ]

    return {
      showHeader,
      links,
      scrollY,
    }
  },
}
</script>

<template>
  <div
    :class="{
      '-translate-y-full': !showHeader,
      'border-b-0': scrollY == 0
    }"
    class="bg-black/70 backdrop-blur-md sticky top-0 z-10 border-b mb-6 border-b-white/10 transition-transform ease-out duration-200"
  >
    <header class="w-full grid grid-cols-3 container py-6 items-center overflow-hidden">
      <div class="justify-start">
        SLASH DASH
      </div>

      <div class="justify-self-center">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
      </div>

      <div class="flex items-center justify-end gap-4">
        <nav class="gap-2 sm:flex hidden">
          <nuxt-link
            v-for="(link, i) of links"
            :key="i"
            class="text-white/50 hover:text-white px-2"
            :to="link.path"
          >
            {{ link.name }}
          </nuxt-link>
        </nav>
      </div>
    </header>
  </div>
</template>
