import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategorieView from '../views/CategorieView.vue'
import ProduitView from '../views/ProduitView.vue'
import CategorieProduitView from '../views/CategorieProduitView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategorieView
    },
    {
      path: '/produits',
      name: 'produits',
      component: ProduitView
    },
    {
      path: '/categorieProduit',
      name: 'categorieProduit',
      component: CategorieProduitView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router