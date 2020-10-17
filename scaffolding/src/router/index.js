import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/MintUI/Header.vue';
import Button from '../components/MintUI/Button.vue';
import Field from '../components/MintUI/Field.vue';
import Register from '../views/Register.vue';
import Gs from '../views/Gs.vue';
import Gsu from '../views/Gsu.vue';
Vue.use(VueRouter)

const routes = [
  {
    path:'/gsu',
    component:Gsu
     },
  {
    path:'/gs',
    component:Gs
     },
  {
    path:'/register',
    component:Register
     },
  {
    path:'/field',
    component:Field
     },
  {
 path:'/button',
 component:Button
  },
  {
   path:'/header',
   component:()=>import(/* webpackChunkName: "header" */'../components/MintUI/Header.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
