<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import ToggleGroupItem from './item.vue'
import { useProvideToggleGroupState } from './useToggleGroup'

const props = withDefaults(defineProps<{
  disabled?: boolean
  direction?: 'row' | 'column'
  class?: HTMLAttributes['class']
}>(), {
  direction: 'row',
})

const state = useProvideToggleGroupState()
const slots = useSlots()

const options = computed<string[]>(() => {
  const children = (slots.default?.() || []).filter(vnode => vnode.type === ToggleGroupItem)
  return children.map(el => el.props!.value)
})

const value = defineModel<string>()

watch(value, (val) => {
  state.currentValue.value = val
}, {
  immediate: true,
})

const currentIndex = computed(() => {
  const i = Number(options.value.indexOf(value.value!))
  return i < 0 ? 0 : i
})

function toggle() {
  const i = options.value.findIndex(el => el === value.value)
  const next = i >= options.value.length - 1 ? 0 : i + 1
  value.value = options.value[next]
}
</script>

<template>
  <div
    :class="[props.class, { 'pointer-events-none': disabled, 'flex-col': direction === 'column' }]"
    class="view-toggle relative z-50 flex w-max p-1 gap-1 rounded-xl bg-white/10 backdrop-blur-md mb-4 justify-self-end text-white/20 cursor-pointer"
    @click="toggle"
  >
    <slot />
    <div
      class="bg-black rounded-lg absolute aspect-square h-12 transition-transform ease-out duration-300"
      :style="{ transform: `translate${direction === 'column' ? 'Y' : 'X'}(${3.25 * currentIndex}rem)` }"
    />
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
