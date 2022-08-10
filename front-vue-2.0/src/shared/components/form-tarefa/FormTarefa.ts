import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import Filtros from '@/shared/filters/Filtros';
import Tarefa from '@/model/Tarefa';
import TarefaService from '@/service/TarefaService';
import ToastService from '@/shared/service/ToastService';
import { PrioridadeEnum } from '@/enums/PrioridadeEnum';
import { AxiosError } from 'axios';
import UsuarioService from '@/service/UsuarioService';
import { ConstantesUtil } from '@/shared/utils/ConstantesUtil';
import SelectItem from '@/model/utils/SelectItem';
import { StatusEnum } from '@/enums/StatusEnum';

@Options({
  props: {
    tarefaProps: { type: Object as PropType<Tarefa> }
  },
    emits: ['onSalvarTarefa']
})
export default class FormTarefa extends Vue {

  tarefaProps: Tarefa;
  tarefa = new Tarefa()

  toastService: ToastService;
  tarefaService: TarefaService;
  usuarioService: UsuarioService;

  opcoesPrioridade = Object.values(PrioridadeEnum);
  prioridade = Object.assign(PrioridadeEnum);

  usuarioSelecionado = ConstantesUtil.SELECT_PLACEHOLDER;
  opcoesUsuarios: SelectItem[] = [];

  created(): void {
    this.tarefaService = new TarefaService();
    this.toastService = new ToastService();
    this.usuarioService = new UsuarioService();
 
    if (this.tarefaProps && this.tarefaProps.id) {
      this.tarefa = this.tarefaProps;

      const validadeString = Filtros.formatarData(this.tarefa.deadline);
      const [dia, mes, ano] = validadeString.split('/');
      this.tarefa.deadline = new Date(+ano, +mes-1, +dia);

      this.obterUsuarioPorId(this.tarefa.idUsuarioResponsavel);
    }
  }

  buscarUsuarioPorNome(query: string): void {
    if (!query) query = ' ';
    this.usuarioService.obterPorNome(query).then(response => {
      this.opcoesUsuarios = response.data.map(usuario => new SelectItem(usuario.nome, usuario.id));
      if (this.tarefaProps) {
        this.tarefa = this.tarefaProps;
        this.usuarioSelecionado = this.opcoesUsuarios.find(usuario => usuario.value === this.tarefa.idUsuarioResponsavel) || this.usuarioSelecionado;
      }
    });
  }

  obterUsuarioPorId(id: number) {
    this.usuarioService.obterPorId(id).then(response => {
      this.usuarioSelecionado.value = id;
      this.usuarioSelecionado.label = response.data.nome;
    })
  }

  setIdUsuarioResponsavel(): void {
    this.tarefa.idUsuarioResponsavel = +this.usuarioSelecionado.value;
  }

  salvarTarefa() {
    this.tarefa.idUsuarioResponsavel = +this.usuarioSelecionado.value;
    this.tarefa.status = StatusEnum.EM_ANDAMENTO;
    let request;

    if (this.tarefa.id)
      request = this.tarefaService.atualizar(this.tarefa);
    else
      request = this.tarefaService.salvar(this.tarefa);

    request.then(response => {
      const label = this.tarefa.id ? "Atualizada" : "Salva";
      this.toastService.success(`Tarefa ${label} com sucesso`, response.data.titulo);
      this.$emit('onSalvarTarefa', response.data);
    })
    .catch((error: AxiosError) => this.toastService.error('Erro', error.response?.data))
  }
}