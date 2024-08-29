import { defineStore } from 'pinia'

export const useCoreStore = defineStore('core', {
  state: () => {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false
    }
  },
  getters: {
    getIsMobile: (state) => {
      return (state.isMobile = window.screen.width < 768)
    },
    getIsTablet: (state) => {
      return (state.isTablet = window.screen.width < 1024)
    },
    getIsDesktop: (state) => {
      return (state.isDesktop = window.screen.width >= 1024)
    }
  },
  actions: {
    setMobile() {
      this.isMobile = window.screen.width < 768
    },
    setTablet() {
      this.isTablet = window.screen.width < 1024
    },
    setDesktop() {
      this.isDesktop = window.screen.width >= 1024
    },
    setScreenType() {
      if (window.screen.width < 768) {
        this.isMobile = true
        this.isTablet = false
        this.isDesktop = false
      } else if (window.screen.width < 1024) {
        this.isMobile = false
        this.isTablet = true
        this.isDesktop = false
      } else {
        this.isMobile = false
        this.isTablet = false
        this.isDesktop = true
      }
    }
  }
})
