import { defineStore } from 'pinia'

export const useProjects = defineStore('projects', () => {
  const viewType = ref<'grid' | 'list'>('grid')
  const hoveredCard = ref('')

  const projects: Project[] = [
    {
      id: '1',
      title: 'RIBBONHEAD',
      subtitle: 'RIBBONHEAD',
      description: 'Artwork // Digital art // 2024',
      img: 'ribbon-head-1.jpg',
    },
    {
      id: '2',
      title: 'LAM888d0666',
      subtitle: 'LAM888d0666',
      description: 'Diptych // Digital art // 2024',
      img: 'lam888-d0666-1.jpg',
    },
    {
      id: '3',
      title: '### ####',
      subtitle: '### ####',
      description: '### // ##### art // 20##',
      img: '3.jpg',
    },
    {
      id: '4',
      title: 'NOT YOURS',
      subtitle: 'NOT YOURS',
      description: 'Diptych // Digital art // 2021',
      img: 'not-yours.jpg',
    },
    {
      id: '5',
      title: '### ####',
      subtitle: '### ####',
      description: '### // ##### art // 20##',
      img: 'lam888-d0666-3.jpg',
    },
    {
      id: '6',
      title: '### ####',
      subtitle: '### ####',
      description: '### // ##### art // 20##',
      img: '1.jpg',
    },
    {
      id: '7',
      title: '### ####',
      subtitle: '### ####',
      description: '### // ##### art // 20##',
      img: '2.jpg',
    },
    {
      id: '8',
      title: '### ####',
      subtitle: '### ####',
      description: '### // ##### art // 20##',
      img: 'lam888-d0666-4.jpg',
    },
    {
      id: '9',
      title: '### ####',
      subtitle: '### ####',
      description: '### // ##### art // 20##',
      img: 'ribbon-head-2.jpg',
    },
  ]

  return {
    viewType,
    projects,
    hoveredCard,
  }
}, {
  persist: true,
})
