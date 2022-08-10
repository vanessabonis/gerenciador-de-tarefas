// import Role from '@/model/Role';
// import { PropType } from 'vue';
import { Vue } from 'vue-class-component';

// @Options({
//   props: {
//     roles: { type: Array as PropType<Array<Role>> },
//   }
// })
export default class GerenciadorTemplate extends Vue {
  exibeMenuLateral = true;
  baseURL = '/gerenciador';

  // roles: Role[] = [];
  // rolesUsuario: string[] = [];

  // store = useStore();

  items: any[] = [];

  created(): void {
    // this.rolesUsuario = this.roles.map(role => role.role);
    // this.exibeMenuLateral = !(this.rolesUsuario.length === 1 && this.rolesUsuario.includes('ADMIN', 'USER));

    // const usuario = new Usuario(this.roles);

    // const urlUsuarios = Filtros.usuarioTemPermissoes(usuario, ['USER']) ? 
    //   `${this.baseURL}/tarefas?idUsuario=${this.store.getters.idUsuario}` : `${this.baseURL}/tarefas`

    this.items = [
      {
        label: 'Usuários', icon: 'pi pi-user', to: `${this.baseURL}/usuarios`
      },
      {
        label: 'Tarefas', icon: 'pi pi-list', to: `${this.baseURL}/tarefas`
      },
    ];
  }

  toggleMenuLateral() {
    const mainContentDivClasses = document.getElementById('gerenciador-content')?.classList;
    this.exibeMenuLateral = !this.exibeMenuLateral;

    if (!this.exibeMenuLateral && mainContentDivClasses?.contains('gerenciador-content')) mainContentDivClasses.remove('gerenciador-content');
    else if (!mainContentDivClasses?.contains('gerenciador-content')) mainContentDivClasses?.add('gerenciador-content');
  }

  // logout(): void {
  //   this.store.commit('token', null);
  //   logout();
  // }
}