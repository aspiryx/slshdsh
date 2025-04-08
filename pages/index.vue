<script setup lang="ts">
import { motion } from 'motion-v'
import { useElementVisibility, useWindowScroll } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import type { ContextAction } from '~/components/app/context-actions.vue'

const variants = {
  grid: 'grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-max',
  list: 'flex flex-col',
}

const store = useProjects()
const className = computed(() => [variants[store.viewType]])
const toggleDisabled = ref(false)
const { y } = useWindowScroll()

const contextActions: ContextAction[] = [
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

function updateViewType(value?: string) {
  if (toggleDisabled.value) return

  toggleDisabled.value = true

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  setTimeout(() => {
    store.viewType = value as 'grid' | 'list'
  }, window.scrollY > 0 ? 300 : 0)

  setTimeout(() => {
    toggleDisabled.value = false
  }, 300)
}

const target = useTemplateRef<HTMLDivElement>('view-toggle')
const targetIsVisible = useElementVisibility(target)
</script>

<template>
  <section
    class="container m-auto mt-4 pt-20 relative"
    data-aos="fade-up"
  >
    <div class="flex justify-between items-end">
      <div class="text-3xl font-semibold uppercase py-8 text-zinc-400">
        Projects
      </div>

      <div
        ref="view-toggle"
        class="z-10"
      >
        <motion.div
          v-if="targetIsVisible"
          layout
          layout-id="view-toggle"
        >
          <ui-toggle-group
            :disabled="toggleDisabled"
            class="sticky top-24"
            :model-value="store.viewType"
            @update:model-value="updateViewType"
          >
            <ui-toggle-group-item
              value="list"
              icon="material-symbols:table-rows-rounded"
            />
            <ui-toggle-group-item
              value="grid"
              icon="material-symbols:browse"
            />
          </ui-toggle-group>
        </motion.div>
      </div>
    </div>

    <div
      class="projects"
      :class="[className]"
    >
      <app-context-actions :actions="contextActions">
        <motion.div
          v-if="!targetIsVisible"
          layout
          layout-id="view-toggle"
        >
          <ui-toggle-group
            direction="column"
            :disabled="toggleDisabled"
            class="sticky top-24"
            :model-value="store.viewType"
            @update:model-value="updateViewType"
          >
            <ui-toggle-group-item
              value="list"
              icon="material-symbols:table-rows-rounded"
            />
            <ui-toggle-group-item
              value="grid"
              icon="material-symbols:browse"
            />
          </ui-toggle-group>
        </motion.div>
      </app-context-actions>

      <template
        v-for="(value, i) of store.projects"
        :key="value.id"
      >
        <project-list-card
          v-if="store.viewType == 'list'"
          :order="i"
          :z-index="store.projects.length - i"
          :value
        />
        <project-grid-card
          v-else-if="store.viewType == 'grid'"
          :value
        />
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  perspective: 2000px;
  perspective-origin: 50% 0%;
}
</style>
