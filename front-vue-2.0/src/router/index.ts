import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Dashboard from '@/views/gerenciador/dashboard/Dashboard.vue';
import TarefaListagem from '@/views/gerenciador/tarefas/TarefaListagem.vue';
import UsuarioListagem from '@/views/gerenciador/usuarios/UsuarioListagem.vue';

// import store from '@/store';
// import { ConstantesUtil } from '@/shared/utils/ConstantesUtil';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', redirect: '/gerenciador', component: Dashboard
  },
  // {
  //   name: 'Login', path: '/login', component: Home,
  //   meta: { title: 'Login - gerenciador' }
  // },
  
  {
    name: 'Dashboard', path: '/gerenciador', component: Dashboard,
    meta: { title: 'Gerenciador' }
  },
  
  {
    name: 'Usuarios', path: '/gerenciador/usuarios', component: UsuarioListagem,
    meta: { title: 'Gerenciador - Usuarios' }
  },
  {
    name: 'Tarefas', path: '/gerenciador/tarefas', component: TarefaListagem,
    meta: { title: 'Gerenciador - Tarefas' }
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const DEFAULT_TITLE = 'Gerenciador de Tarefas';

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title as string || DEFAULT_TITLE;
  next();
});

// function usuarioTemPermissao(idDestino: string, tipoUsuario: string): boolean {
//   const idAdmin = store.getters.idAdmin;


//   const idLogado = store.getters[tipoUsuario];
//   
//   return Number.parseInt(idDestino) === idLogado;
// }

export default router;
