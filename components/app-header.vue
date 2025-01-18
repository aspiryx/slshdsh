<script setup lang="ts">
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
</script>

<template>
  <div class="bg-black/70 backdrop-blur-md sticky top-0 z-10">
    <header class="flex justify-between container py-6 items-center overflow-hidden">
      <div>
        SLASH DASH
      </div>

      <nuxt-link to="/">
        <logo />
      </nuxt-link>

      <nav class="gap-2 sm:flex hidden">
        <nuxt-link
          v-for="(link, i) of links"
          :key="i"
          class="text-white/50 hover:text-white px-2"
          :to="link.path"
        >
          {{ link.name
          }}
        </nuxt-link>
      </nav>
    </header>
  </div>
</template>
