<template>
  <div>
    <Dialog class="col-10 p-0" :header="formHeader" v-model:visible="exibeForm" :modal="true">
      <FormTarefa @onSalvarTarefa="adicionarTarefaNaLista($event)" :tarefaProps="tarefa"  />
    </Dialog>
  </div>

  <div>
    <GerenciadorTemplate>
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
              </Column>
              <Column field="titulo" filterField="tituloOuDescricao" header="Título" footer="Título" ref="titulo" :sortable="true" :showFilterMatchModes="false"
                :showFilterMenu="false">
                <template #filter="{filterModel, filterCallback}">
                  <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter"
                    placeholder="Digite o Título"/>
                </template>
              </Column>
              <Column field="responsavel" header="Responsável" footer="Responsável" ref="responsavel"
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
              <Column field="prioridade" header="Prioridade" footer="Prioridade" ref="prioridade" :sortable="true" >
                <template #body="{data}">
                  <Tag :severity="PRIORIDADE_BADGES[data.prioridade.toLowerCase()]">
                    {{data.prioridade}}
                  </Tag>
                </template>
              </Column>
              <Column field="status" header="Status" footer="Status" ref="status" :showFilterMatchModes="false"
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
                <template #body="{data}">
                  <Button v-if="data.status == 'EM_ANDAMENTO'" label="CONCLUIR" class="p-button-rounded p-button-success 
                    p-button-outlined p-button-sm" @click="concluirTarefa(data.id)" />
                  <Button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-success
                    p-button-text py-1" @click="editarTarefa(data.id)" />
                  <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-text" @click="excluirTarefa(data.id)"/>
                </template>
              </Column>
            </DataTable>
          </div>
        </template>
      </Card>
    </GerenciadorTemplate>
  </div>
</template>

<script src="./TarefaListagem.ts" lang="ts"></script>
