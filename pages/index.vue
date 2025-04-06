<script setup lang="ts">
import { onMounted } from 'vue'

const store = useProjects()

const variants = {
  grid: 'grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-max',
  list: 'flex flex-col',
}

const className = computed(() => [variants[store.viewType]])

onMounted(() => {
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', window.scrollY.toString())
  })
})
</script>

<template>
  <section
    class="container m-auto mt-4 pt-20 relative"
    data-aos="fade-up"
  >
    <view-toggle />
    <div
      class="projects"
      :class="[className]"
    >
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
