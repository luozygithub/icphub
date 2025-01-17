import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import(/* webpackChunkName: "about" */ '../views/SolutionsView.vue')
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }; // 滚动到顶部
  },
})

export default router
