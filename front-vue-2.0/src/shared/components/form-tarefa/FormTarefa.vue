<template>
  <form @submit.prevent="salvarTarefa()">
    <div class="grid">
      <div class="col-12 sm:col-6 md:col-4 xl:col-3">
        <label for="">Título</label> <span class="c-vermelho">*</span>
        <InputText v-model="tarefa.titulo" class="w-full mb-3" required/>
      </div>
      <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3">
        <label for="">Descrição</label> <span class="c-vermelho">*</span>
        <InputText v-model="tarefa.descricao" class="w-full mb-3" required/>
      </div>
      <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-2">
        <label for="">Responsável</label> <span class="c-vermelho">*</span>
        <AutoComplete placeholder="Selecione o Responsável" v-model="usuarioSelecionado" @complete="buscarUsuarioPorNome($event.query)"
          @item-select="setIdUsuarioResponsavel()" :suggestions="opcoesUsuarios" :minLength="3" :dropdown="true" :delay="300" field="label"  />
      </div>
      <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-2">
        <label for="">Deadline</label> <span class="c-vermelho">*</span>
        <Calendar class="w-full" v-model="tarefa.deadline" dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy" :showButtonBar="true" />
      </div>
      <div class="col-12 sm:col-5 md:col-4 xl:col-2">
        <label for="">Prioridade</label> <span class="c-vermelho">*</span>
        <Dropdown v-model="tarefa.prioridade" :options="opcoesPrioridade" class="w-full mb-3"
          placeholder="Selecione a Prioridade" />
      </div>

      <div class="grid col-12 justify-content-end">
        <Button class="spacing p-button border-transparent bg-azul c-branca" type="submit">SALVAR</Button>
      </div>
    </div>
  </form>
</template>

<script src="./FormTarefa.ts" lang="ts"></script>