import {createRouter,createWebHashHistory} from 'vue-router'
import Home from "../components/Home.vue"
import Infografia from "../components/Infografia.vue"
import Problematica from "../components/Problematica.vue"
import Solucion from "../components/Solucion.vue"
import Introduccion from "../components/Introduccion.vue"
import Desarrollo from "../components/Desarrollo.vue"
import Documentos from "../components/Documents.vue"
import Prezi from "../components/Prezi.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/infografia', component: Infografia },
  { path: '/problematica', component: Problematica },
  { path: '/solucion', component: Solucion },
  { path: '/introduccion', component: Introduccion },
  { path: '/desarrollo', component: Desarrollo },
  { path: '/documentos', component: Documentos },
  { path: '/prezi', component: Prezi },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})