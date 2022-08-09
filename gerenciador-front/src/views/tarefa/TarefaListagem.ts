import { StatusEnum } from '@/enums/StatusEnum';
import TarefaFiltro from '@/model/filtros/TarefaFiltro';
import ListagemTarefas from '@/model/listagem/ListagemTarefas';
import Tarefa from '@/model/Tarefa';
import Page from '@/model/utils/Page';
import Pageable from '@/model/utils/Pageable';
import TarefaService from '@/service/TarefaService';
import ToastService from '@/shared/service/ToastService';
import { Vue } from 'vue-class-component';

export default class TarefaListagem extends Vue {

  toastService: ToastService;
  tarefaService: TarefaService;

  tarefas = new Page<ListagemTarefas>();
  tarefa = new Tarefa();

  filtro = new TarefaFiltro();
  filters = {
    'tituloOuDescricao': {value: ''},
    'responsavel': {value: ''},
    'status': {value: null}
  }

  opcoesStatus = Object.values(StatusEnum);
  status = Object.assign(StatusEnum);

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

  setFiltrosAndPaginaInfo(event: any): void {

    this.pageable.page = event.page || 0;
    this.pageable.pageSize = event.rows || 25;
    this.pageable.sortField = event.sortField || '';
    this.pageable.sortOrder = event.sortOrder === 1 ? 'ASC' : 'DESC';

    this.filtro.tituloOuDescricao = this.filters.tituloOuDescricao.value || null;
    this.filtro.responsavel = this.filters.responsavel.value || null;
    this.filtro.status = this.filters.status.value || null;
  }
}