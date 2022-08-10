<template>
  <Toast position="top-right" :breakpoints="{'524px': {width: '100%', right: '0', left: '0'}}"/>
  <ConfirmDialog></ConfirmDialog>
  <router-view />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
// import { useStore } from 'vuex';
// import Usuario from './model/Usuario';
// import UsuarioService from './service/UsuarioService';
// import { logout } from './shared/service/AuthService';
// import { ConstantesUtil } from './shared/utils/ConstantesUtil';

export default class Appvue extends Vue {

//   usuarioService: UsuarioService;

//   usuario = new Usuario();
//   roles: string[] = [];

//   store = useStore();

//   created(): void {
//     this.usuarioService = new UsuarioService();

//     const token = localStorage.getItem('token');
//     if (token) this.store.commit('token', token);

//     this.usuarioService.obterLogado().then(async response => {
//       this.usuario = response.data;
//       this.roles = response.data.roles.map(role => (role.role));

//       if (this.roles.includes('ADMIN')) this.setLocalStorageInfo(this.usuario.id, 'idAdmin');
//   
//     .catch(() => logout());
//   }

//   setLocalStorageInfo(id: number | number[], tipoUsuario: string): void {
//     this.store.commit(tipoUsuario, id);
//   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-top: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bg-laranja {
  background-color: #ef8b22 !important;
}

.bg-azul {
  background-color: #105270 !important;
}

.bg-azul-claro {
  background-color: #a7dbf3 !important;
}

.bg-branco {
  background-color: #FFF !important;
}

.bg-vinho {
  background-color: rgb(112, 12, 12) !important;
}

.c-laranja {
  color: #ef8b22 !important;
}

.c-azul {
  color: #105270 !important;
}

.c-branca {
  color: #FFF !important;
}

.grid {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

input, .p-inputtext {
  font-size: 16px !important;
}

select {
  font-size: 16px !important;
}

.titulo {
  letter-spacing: 2px;
}

h4, h5 {
  letter-spacing: 2px;
}

button:hover {
  transition: all 0.2s ease-out;
  cursor: pointer;
  opacity: 0.6;
}

.spacing {
  letter-spacing: 2px;
  font-weight: 300;
}

.p-column-filter {
  min-width: 150px;
}

.p-autocomplete {
  height: 41px;
}

.p-dropdown .p-dropdown-label,
.p-dropdown .p-dropdown-label,
.p-dropdown-panel .p-dropdown-items .p-dropdown-item,
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
  font-size: 16px;
}

/* CSS das tabelas de listagem de dados do gerenciador */
.table-container {
  overflow-y: scroll;
  height: 72vh;
}

.p-hidden-space {
  display: none !important;
}

@media (max-height: 774px) {
  .table-container {
    height: 71vh;
  }
}

@media (min-height: 774px) {
  .table-container {
    overflow-y: scroll;
    height: 73vh;
  }
}

@media (min-height: 800px) {
  .table-container {
    overflow-y: scroll;
    height: 72vh;
  }
}

@media (min-height: 1000px) {
  .table-container {
    overflow-y: scroll;
    height: 77.5vh;
  }
}

.p-datatable, .p-paginator {
  font-size: 16px !important;
}

@media (max-width: 764px) {
  .p-link {
    font-size: 16px !important;
  }

  .p-paginator-page {
    min-width: 1.3rem !important;
    height: 1.3rem !important;
    margin: 0;
  }

  .p-paginator .p-dropdown {
    height: 2rem !important;
  }
}

/* CSS InputSwitch */
.p-inputswitch {
  width: 2rem !important;
  height: 1.25rem !important;
  margin-bottom: 6px;
}

.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
  transform: translateX(0.6rem) !important;
}

.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
  background-color: #3B82F6 !important;
}
.p-inputswitch .p-inputswitch-slider:before {
  left: 0.3rem !important;
  width: 0.85rem !important;
  height: 0.85rem !important;
  margin-top: -0.45rem !important;
}
/* CSS InputSwitch */
</style>
