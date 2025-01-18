<script setup lang="ts">
import { onMounted } from 'vue'

type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  img: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'RIBBONHEAD',
    subtitle: 'RIBBONHEAD',
    description: 'Artwork // Digital art // 2024',
    img: '/ribbon-head-1.jpg',
  },
  {
    id: '2',
    title: 'LAM888d0666',
    subtitle: 'LAM888d0666',
    description: 'Diptych // Digital art // 2024',
    img: '/lam888-d0666-1.jpg',
  },
  {
    id: '3',
    title: 'NOT YOURS',
    subtitle: 'NOT YOURS',
    description: 'Diptych // Digital art // 2021',
    img: '/not-yours.jpg',
  },
  {
    id: '1',
    title: 'RIBBONHEAD',
    subtitle: 'RIBBONHEAD',
    description: 'Artwork // Digital art // 2024',
    img: '/ribbon-head-1.jpg',
  },
  {
    id: '2',
    title: 'LAM888d0666',
    subtitle: 'LAM888d0666',
    description: 'Diptych // Digital art // 2024',
    img: '/lam888-d0666-1.jpg',
  },
  {
    id: '3',
    title: 'NOT YOURS',
    subtitle: 'NOT YOURS',
    description: 'Diptych // Digital art // 2021',
    img: '/not-yours.jpg',
  },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', window.scrollY.toString())
  })
})
</script>

<template>
  <section class="container m-auto mt-4 pt-20 relative">
    <div class="flex flex-col projects">
      <project-card
        v-for="(item, i) of projects"
        :key="i"
        :order="i"
        :z-index="projects.length - i"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
        :img="item.img"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  perspective: 2000px;
  perspective-origin: 50% 0%;
}
</style>
