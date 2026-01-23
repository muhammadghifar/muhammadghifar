import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
// import ProjectView from '@/views/ProjectView.vue'
// import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/error/NotFoundView.vue'
import NewVersion from '@/views/NewVersion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NewVersion,
      meta: {
        title: 'Muhammad Ghifar',
        description: 'Welcome to my portfolio. I build modern web applications with Vue.js, TypeScript, and cutting-edge frontend technologies.'
      }
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    //   meta: {
    //     title: 'Muhammad Ghifar',
    //     description: 'Welcome to my portfolio. I build modern web applications with Vue.js, TypeScript, and cutting-edge frontend technologies.'
    //   }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: AboutView,
    //   meta: {
    //     title: 'About Me | Muhammad Ghifar',
    //     description:
    //       'Learn more about Muhammad Ghifar Rijali, my background, skills, and passion for software development.'
    //   }
    // },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: ProjectView,
    //   meta: {
    //     title: 'Projects | Muhammad Ghifar',
    //     description:
    //       'Explore my portfolio of projects including web applications, tools, and experiments built with modern technologies.'
    //   }
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: 'Page Not Found | Muhammad Ghifar',
        description: 'The page you are looking for does not exist.',
        noIndex: true
      }
    }
  ]
})

// Update page title on route change
// router.afterEach((to) => {
//   const title = (to.meta.title as string) || 'Muhammad Ghifar'
//   document.title = title
// })

export default router
