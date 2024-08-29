import { defineStore } from 'pinia'
import type { Experience } from '@/types'

interface ExperienceStatus {
  status: 'work' | 'education'
  //   status: boolean
}

export const useExperienceStore = defineStore('experience', {
  state: () => {
    return {
      experiences: [
        {
          id: 1,
          title: 'PT Motiolabs Digital Indonesia',
          description: 'Frontend Developer',
          time: 'July 2023 - July 2024'
        },
        {
          id: 2,
          title: 'PT Neuronworks Indonesia',
          description: 'Technical Support Intern',
          time: 'July 2022 - June 2023'
        },
        {
          id: 3,
          title: 'Dinas Pekerjaan Umum',
          description: 'IT Support Intern',
          time: 'July 2019 - September 2019'
        }
      ],
      education: [
        {
          id: 1,
          title: 'Telkom University',
          description: 'Associate Degree in Computer Engineering Technology',
          time: '2020 - 2023'
        },
        {
          id: 2,
          title: 'SMKN 13 Bandung',
          description: 'Computer Engineering',
          time: '2017 - 2020'
        }
      ],
      activeStatus: 'work'
    }
  },
  getters: {
    getExperiences: (state) => state.experiences,
    getEducation: (state) => state.education,
    getActiveExperience: (state) => state.activeStatus
  },
  actions: {
    setActiveExperience(status: string) {
      this.activeStatus = status
    }
  }
})
