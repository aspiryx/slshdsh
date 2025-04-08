<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { useToggleGroupState } from './useToggleGroup'

defineProps<{
  value: string
  icon: string
  tooltip?: string
}>()

const state = useToggleGroupState()
</script>

<template>
  <div
    class="relative aspect-square h-12 flex items-center justify-center p-2 transition-colors duration-300"
    :class="{ 'text-white': state?.currentValue.value === value }"
    :title="tooltip"
  >
    <icon
      class="z-10"
      :icon="icon"
      width="24"
    />
  </div>
</template>
