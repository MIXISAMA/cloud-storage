import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import File from '../views/File.vue'
import Share from '../views/Share.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: File
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/file',
    name: 'FileRoot',
    component: File
  },
  {
    name: 'File',
    path: '/file/:id',
    component: File
  },
  {
    path: '/share',
    component: Share
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
