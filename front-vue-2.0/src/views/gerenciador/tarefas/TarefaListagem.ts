import { PrioridadeEnum } from '@/enums/PrioridadeEnum';
import { StatusEnum } from '@/enums/StatusEnum';
import TarefaFiltro from '@/model/filtros/TarefaFiltro';
import ListagemTarefas from '@/model/listagem/ListagemTarefas';
import Tarefa from '@/model/Tarefa';
import Page from '@/model/utils/Page';
import Pageable from '@/model/utils/Pageable';
import TarefaService from '@/service/TarefaService';
import FormTarefa from '@/shared/components/form-tarefa/FormTarefa.vue';
import ToastService from '@/shared/service/ToastService';
import GerenciadorTemplate from '@/shared/templates/gerenciador-template/GerenciadorTemplate.vue';
import { ConstantesUtil } from '@/shared/utils/ConstantesUtil';
import { AxiosError } from 'axios';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    GerenciadorTemplate,
    FormTarefa
  }
})
export default class TarefaListagem extends Vue {

  toastService: ToastService;
  tarefaService: TarefaService;

  tarefas = new Page<ListagemTarefas>();
  tarefa = new Tarefa();

  filtro = new TarefaFiltro();
  filters = {
    'tituloOuDescricao': {value: ''},
    'responsavel': {value: ''},
    'status': {value: StatusEnum.EM_ANDAMENTO}
  }

  opcoesStatus = Object.values(StatusEnum);
  status = Object.assign(StatusEnum);
  opcoesPrioridade = Object.values(PrioridadeEnum);
  prioridade = Object.assign(PrioridadeEnum);
  STATUS_BADGES = ConstantesUtil.STATUS;
  PRIORIDADE_BADGES = ConstantesUtil.PRIORIDADE;

  exibeForm = false;
  formHeader = 'ADICIONAR Tarefa';

  pageable = new Pageable();

  created(): void {
    this.tarefaService = new TarefaService();
    this.toastService = new ToastService();

    this.listarTarefas({});
  }

  listarTarefas(event: any): void {
    this.setFiltrosAndPaginaInfo(event);
    this.tarefaService.listarTarefas(this.filtro, this.pageable).then(response => {
      this.tarefas = response.data;
    });
  }

  adicionarTarefaLista(tarefa: any) {
    this.tarefas.content.push(tarefa);
    this.fecharForm();
  }

  setFiltrosAndPaginaInfo(event: any): void {

    this.pageable.page = event.page || 0;
    this.pageable.pageSize = event.rows || 25;
    this.pageable.sortField = event.sortField || '';
    this.pageable.sortOrder = event.sortOrder === 1 ? 'ASC' : 'DESC';

    this.filtro.tituloOuDescricao = this.filters.tituloOuDescricao.value || null;
    this.filtro.responsavel = this.filters.responsavel.value || null;
    this.filtro.status = this.filters.status.value || null;
  }

  concluirTarefa(id: number): void {
    this.tarefaService.concluirTarefa(id).then(response => {
      this.toastService.success('Tarefa Concluída com Sucesso!', response.data);
      this.listarTarefas({});
    }).catch((error: AxiosError) => this.toastService.error('Erro', error.response?.data))
  }

  editarTarefa(id: number) {
    this.tarefaService.obterPorId(id).then(response => {
      this.tarefa = response.data
      this.exibirForm();
    });
  }

  excluirTarefa(id: number) {
    this.$confirm.require({
      acceptLabel: `Sim`,
      rejectLabel: `Não`,
      message: 'Deseja confirmar operação?',
      icon: 'pi pi-exclamation-triangle',
      header: 'Confirmar exclusão',
      accept: () => {
        this.tarefaService.excluirPorId(id).then(() => {
          this.toastService.success('Exclusão de Tarefa', `Tarefa com id ${id} excluída definitivamente.`);
          this.listarTarefas({});
        })
        .catch((error: AxiosError) => this.toastService.success('Erro', error.response?.data))
      }
    });
  }

  exibirForm(): void {
    this.exibeForm = true;
  }

  fecharForm(): void {
    this.exibeForm = false;
  }
}