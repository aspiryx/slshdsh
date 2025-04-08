<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { NuxtLink } from '#components'

import { showHeader } from './header.vue'

export type ContextAction = {
  name: string
  icon: string
  to?: string
  onClick?: (e: MouseEvent) => void
  position: 'top' | 'bottom'
  hidden?: ComputedRef
}

const { actions = [] } = defineProps<{
  actions?: ContextAction[]
}>()

const topActions = computed(() => actions.filter(el => el.position === 'top' && !el.hidden?.value))
const bottomActions = computed(() => actions.filter(el => el.position === 'bottom' && !el.hidden?.value))
</script>

<template>
  <div class="absolute left-0 w-full h-full flex justify-end z-50 pointer-events-none">
    <div
      class="sticky right-0 flex flex-col justify-between w-max py-2 px-4 min-[1870px]:translate-x-24 transition-transform ease-out duration-200"
    >
      <div
        class="sticky top-24 flex flex-col gap-4 transition-transform ease-out duration-200"
        :class="{
          '-translate-y-20': !showHeader,
        }"
      >
        <component
          :is="item.to ? NuxtLink : 'div'"
          v-for="(item, i) of topActions"
          :key="i"
          :to="item.to"
          class="pointer-events-auto"
          @click="item.onClick"
        >
          <div class="p-4 rounded-full border border-white/10 bg-black/60 hover:bg-white hover:text-black transition-colors cursor-pointer backdrop-blur-md">
            <icon
              :icon="item.icon"
              width="32"
            />
          </div>
        </component>
        <div class="pointer-events-auto">
          <slot />
        </div>
      </div>
      <div class="sticky bottom-4 flex flex-col gap-4">
        <component
          :is="item.to ? NuxtLink : 'div'"
          v-for="(item, i) of bottomActions"
          :key="i"
          :to="item.to"
          class="pointer-events-auto"
          @click="item.onClick"
        >
          <div class="p-4 rounded-full border border-white/10 bg-black/60 hover:bg-white hover:text-black transition-colors cursor-pointer backdrop-blur-md">
            <icon
              :icon="item.icon"
              width="32"
            />
          </div>
        </component>
        <div class="pointer-events-auto">
          <slot name="bottom" />
        </div>
      </div>
    </div>
  </div>
</template>
