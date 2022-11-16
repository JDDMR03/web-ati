import {createRouter,createWebHashHistory} from 'vue-router'
import Home from "../components/Home.vue"
import Infografia from "../components/Infografia.vue"
import Problematica from "../components/Problematica.vue"
import Solucion from "../components/Solucion.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/infografia', component: Infografia },
  { path: '/problematica', component: Problematica },
  { path: '/solucion', component: Solucion },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})