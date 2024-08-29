import { defineStore } from 'pinia'
import type { Project } from '@/types'

export const useProjectStore = defineStore('project', {
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'myDigiLearn',
          url: 'https://mydigilearn.id',
          description:
            'SaaS-based web application that focuses on providing an online learning platform for BUMN employees.',
          image: '/img/project/mydigilearn-page.png',
          year: '2023 - 2024',
          stack: ['Vue JS', 'Nuxt JS'],
          isWorkRelated: true
        },
        {
          id: 2,
          title: 'Learnhub',
          url: 'https://learnhub.id',
          description: 'SaaS-based web app learning platform.',
          image: '/img/project/learnhub-page.png',
          year: 2024,
          stack: ['React JS', 'Next JS', 'Typescript'],
          isWorkRelated: true
        },
        {
          id: 3,
          title: 'Personal Assessment App',
          url: '',
          description: 'Mini application for personal assessment. Integrated with Learnhub.',
          image: '/img/tech/laravel.png',
          year: 2024,
          stack: ['Laravel'],
          isWorkRelated: true
        },
        {
          id: 4,
          title: 'NITA - Telegram Bot',
          url: '',
          description: 'Telegram bot for internal team for daily task management.',
          image: '/img/tech/telegram.png',
          year: 2023,
          stack: ['Google Script', 'Javascript'],
          isWorkRelated: true
        },
        {
          id: 5,
          title: 'Portfolio',
          url: 'https://mghifarr.vercel.app',
          description: 'My personal portfolio website.',
          image: '/img/project/portfolio-page.png',
          year: 2024,
          stack: ['Vue JS', 'Typescript']
        },
        {
          id: 6,
          title: 'Codewars',
          url: 'https://github.com/muhammadghifar/codewars-progress',
          description:
            'Not my project, but a platform for coding challenges. This repo is for tracking my progress in Codewars.',
          image: '/img/tech/codewars.png'
          // year: 2024,
          // stack: ['Training']
        },
        {
          id: 7,
          title: 'Notes App',
          url: 'https://github.com/muhammadghifar/latihan-laravel-11-notes-app',
          description: 'Notes app from my personal exercise to learn Laravel.',
          image: '/img/tech/laravel.png',
          year: 2024,
          stack: ['Laravel']
        },
        {
          id: 8,
          title: 'Hotel Booking App',
          url: 'https://github.com/muhammadghifar/vue-bookingHotel',
          description:
            'Web application for hotel booking. Final Submission when Bootcamp in JagooIT.',
          image: '/img/tech/vue.png',
          year: 2023,
          stack: ['Vue JS']
        },
        {
          id: 9,
          title: 'Task Management API',
          url: 'https://github.com/muhammadghifar/nest-task-management',
          description: 'Personal project to learn Nest JS with Typescript and PostgreSQL.',
          image: '/img/tech/nest.png',
          year: 2024,
          stack: ['Nest JS', 'Typescript']
        },
        {
          id: 10,
          title: 'Bookshelf API',
          url: 'https://github.com/muhammadghifar/dicoding-submission-backend-pemula',
          description: 'Final submission for Basic Backend Course in Dicoding.',
          image: '/img/tech/hapi.png',
          year: 2024,
          stack: ['Hapi JS']
        }
      ],
      activeProject: {} as Project
    }
  },
  getters: {
    getProjects: (state) => state.projects,
    getActiveProject: (state) => state.activeProject
  },
  actions: {
    setActiveProject(project: Project) {
      console.log(project)

      this.activeProject = project
    }
  }
})
