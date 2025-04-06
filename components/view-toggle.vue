<script setup lang="ts">
import { motion } from 'motion-v'
import { Icon } from '@iconify/vue'

const store = useProjects()

const toggleDisabled = ref(false)

function toggleViewType() {
  if (toggleDisabled.value) return

  toggleDisabled.value = true

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  setTimeout(() => {
    store.viewType = store.viewType === 'grid' ? 'list' : 'grid'
  }, window.scrollY > 0 ? 300 : 0)

  setTimeout(() => {
    toggleDisabled.value = false
  }, 300)
}
</script>

<template>
  <div
    class="view-toggle sticky top-24 z-50 flex w-max p-1 gap-1 rounded-xl bg-white/10 backdrop-blur-md mb-4 justify-self-end text-white/20 cursor-pointer"
    @click="toggleViewType"
  >
    <div
      class="relative aspect-square h-12 flex items-center justify-center p-2 transition-colors duration-300"
      :class="{ 'text-white': store.viewType === 'list' }"
    >
      <icon
        class="z-10"
        icon="material-symbols:table-rows-rounded"
        width="24"
      />
      <motion.div
        v-if="store.viewType === 'list'"
        layout
        layout-id="view-toggle-selection"
        class="bg-black rounded-lg w-full h-full absolute"
      />
    </div>
    <div
      class="relative aspect-square h-12 flex items-center justify-center p-2 rounded-lg transition-colors duration-300"
      :class="{ 'text-white': store.viewType === 'grid' }"
    >
      <icon
        class="z-10"
        icon="material-symbols:browse"
        width="24"
      />
      <motion.div
        v-if="store.viewType === 'grid'"
        layout
        layout-id="view-toggle-selection"
        class="bg-black rounded-lg w-full h-full absolute"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-toggle {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.02),
      0px 1px 5px rgba(0, 0, 0, 0.04),
      0px 3px 10px rgba(0, 0, 0, 0.06),
      0px 6px 19px rgba(0, 0, 0, 0.08),
      0px 9px 29px rgba(0, 0, 0, 0.09),
      0px 13px 42px rgba(0, 0, 0, 0.11),
      0px 18px 57px rgba(0, 0, 0, 0.13),
      0px 24px 74px rgba(0, 0, 0, 0.15),
      0px 30px 94px rgba(0, 0, 0, 0.17);
}
</style>
