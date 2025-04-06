<script setup lang="ts">
const socials = [
  { href: '#', name: 'TG' },
  { href: '#', name: 'IG' },
]
</script>

<template>
  <div>
    <div class="container pb-24 py-8 flex justify-between">
      <div class="font-mono text-white/50">
        (c) 2025
      </div>
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
      <nav class="flex gap-2">
        <nuxt-link
          v-for="(item, i) of socials"
          :key="i"
          class="text-white/50 hover:text-white px-2"
          :href="item.href"
        >
          {{ item.name }}
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>
