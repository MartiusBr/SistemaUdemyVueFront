import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Categoria from './components/Categoria.vue'
import Articulo from './components/Articulo.vue'
import Rol from './components/Rol.vue'
import Usuario from './components/Usuario.vue'
import Cliente from './components/Cliente.vue'
import Proveedor from './components/Proveedor.vue'
import Login from './components/Login.vue'
import Store from './store'


Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: Categoria
    },
    {
      path: '/articulos',
      name: 'articulos',
      component : Articulo
    },
    {
      path: '/roles',
      name: 'roles',
      component : Rol
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component : Usuario
    },
    {
      path: '/clientes',
      name: 'clientes',
      component : Cliente
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component : Proveedor
    },
    {
      path: '/login',
      name: 'login',
      component : Login
    },
  ]
})
