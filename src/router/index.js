import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostsList from '../views/PostsList.vue'
import PostDetail from '../views/PostDetail.vue'

const routes = [
  {
    path: '/home',
    name: 'home',  // Named Route
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsList
  },
  {
    path: '/posts/:id',
    name: 'singlePost',
    component: PostDetail
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
