<template>
<div>
    <Dialog class="col-10 p-0" :header="formHeader" v-model:visible="exibeForm" :modal="true" v-if="exibeForm">
      
    </Dialog>
  </div>
  <div>
    <Card class="shadow-4 lg:m-3">
      <template #title>
        <div class="flex justify-content-between">
          <span>Tarefas</span>
          <Button class="uppercase p-button p-button-outlined c-laranja" type="button" @click="exibirForm()"
                label="Adicionar Tarefa"/>
        </div>
      </template>
      <template #content>
      <div class="table-container" v-if="tarefas.content">
        <DataTable :value="tarefas.content" :lazy="true" :paginator="true" :rows="10" ref="dt" dataKey="id" v-model:filters="filters"
          :totalRecords="tarefas.totalElements" @page="listarTarefas($event)" @sort="listarTarefas($event)"
          @filter="listarTarefas($event)" filterDisplay="row" responsiveLayout="scroll" :rowHover="true"
          :rowsPerPageOptions="[10,15,25]" :autoLayout="false">
          <Column field="id" header="Número" footer="Número" ref="numero" :sortable="true" :showFilterMatchModes="false"
            :showFilterMenu="false">
            <template #filter="{filterModel, filterCallback}">
              <InputText type="number" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter"
                placeholder="Digite um Numero"/>
            </template>
          </Column>
          <Column field="titulo" header="Título" footer="Título" ref="titulo" :sortable="true" :showFilterMatchModes="false"
            :showFilterMenu="false">
            <template #filter="{filterModel, filterCallback}">
              <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter"
                placeholder="Digite o Título"/>
            </template>
          </Column>
          <Column field="responsavel" filterField="tituloOuDescricao" header="Responsável" footer="Responsável" ref="responsavel"
            :showFilterMatchModes="false" :showFilterMenu="false">
            <template #filter="{filterModel, filterCallback}">
              <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter"
                placeholder="Digite o Responsável"/>
            </template>
          </Column>
          <Column field="descricao" filterField="tituloOuDescricao" header="Descrição" footer="Descrição" ref="descricao"
            :showFilterMatchModes="false" :showFilterMenu="false">
            <template #filter="{filterModel, filterCallback}">
              <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter"
                placeholder="Digite a Descrição"/>
            </template>
          </Column>
          <Column field="prioridade" header="Prioridade" footer="Prioridade" ref="prioridade" :sortable="true" />
          <Column field="status" header="Status" footer="Status" ref="status" :sortable="true" :showFilterMatchModes="false"
            :showFilterMenu="false">
            <template #filter="{filterModel, filterCallback}">
              <Dropdown :options="opcoesStatus" v-model="filterModel.value" @change="filterCallback()" placeholder="Selecione um status"/>
            </template>
            <template #body="{data}">
              <Tag :severity="STATUS_BADGES[data.status.toLowerCase()]">
                {{data.status}}
              </Tag>
            </template>
          </Column>
          <Column header="Ações" footer="Ações" :sortable="false" :showFilterMenu="false" :style="{'min-width': '180px'}">
            <template #body="{data, index}">
              <!-- <InputSwitch v-model="statusAtivos[index]" @click="ativarOuSuspenderPorId(data.id, index)"
                :disabled="![statusCredenciado.ATIVO, statusCredenciado.CANCELADO].includes(data.status)"/> -->
              <Button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-success
                p-button-text py-1" @click="editarTarefa(index)" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-text" @click="excluirTarefa(data.id)"/>
            </template>
          </Column>
        </DataTable>
      </div>
    </template>
    </Card>
  </div>
</template>

<script lang="ts">
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
</script>
