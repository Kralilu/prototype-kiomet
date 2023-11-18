import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../views/InscriptionView.vue')
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: () => import('../views/InstructionView.vue')
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('../views/DocumentationView.vue')
    },
    {
      path: '/jeu',
      name: 'jeu',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: () => import('../views/ScoreboardView.vue')
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import('../views/RuleView.vue')
    }, {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
