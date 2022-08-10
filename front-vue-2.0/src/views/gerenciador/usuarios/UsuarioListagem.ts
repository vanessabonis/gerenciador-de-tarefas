import Usuario from '@/model/Usuario';
import UsuarioService from '@/service/UsuarioService';
import GerenciadorTemplate from '@/shared/templates/gerenciador-template/GerenciadorTemplate.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    GerenciadorTemplate
  }
})
export default class UsuarioListagem extends Vue {
  
  usuarioService: UsuarioService;
  usuarios: Usuario[] = [];

  created(): void {
    this.usuarioService = new UsuarioService();

    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.listarUsuarios().then(response => {
      this.usuarios = response.data;
    })
  }
}