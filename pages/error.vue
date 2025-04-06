<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div class="container content-center text-center">
    <div class="semibold uppercase flex flex-col gap-2">
      <div class="text-9xl">
        {{ error.statusCode }}
      </div>
      <div class="text-4xl">
        GOT LOST?
      </div>
      <NuxtLink to="/">
        Go back home
      </NuxtLink>
    </div>
  </div>
</template>
