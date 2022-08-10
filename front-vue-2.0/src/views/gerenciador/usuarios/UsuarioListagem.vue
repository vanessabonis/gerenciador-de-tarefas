<template>
  <div>
    <!-- <Dialog class="col-10 p-0" :header="formHeader" v-model:visible="exibeForm" :modal="true">
      
    </Dialog> -->
  </div>
  <div>
    <GerenciadorTemplate>
      <Card class="shadow-4 lg:m-3">
        <template #title>
          <div class="flex justify-content-between">
            <span>Usuários</span>
            <!-- <Button class="uppercase p-button p-button-outlined c-laranja" type="button" @click="exibirForm()"
              label="Cadastrar Usuário"/> -->
          </div>
        </template>
        <template #content>
          <div class="table-container" v-if="usuarios">
            <DataTable :value="usuarios" :lazy="true" ref="dt" dataKey="id"
              responsiveLayout="scroll" >
              <Column field="nome" header="Nome" footer="Nome" :sortable="true" :showFilterMatchModes="false"
                :showFilterMenu="false" />
              
              <Column header="Ações" footer="Ações" :sortable="false" :showFilterMenu="false" :style="{'min-width': '180px'}">
                <template #body="{data}">
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

<script src="./UsuarioListagem.ts" lang="ts" />