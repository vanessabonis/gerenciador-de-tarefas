<template>
  <nav class="navbar sticky z-5 top-0 navbar-top horizontal bg-black-alpha-90">
    <div class="navbar grid pt-1 px-2">
      <div class="col-3 md:col-6 xl:col-8 hidden md:flex justify-content-start">
        <div>
          <Button class="p-button-sm c-branca bg-laranja border-transparent mr-2 text-xs px-2" icon="pi pi-bars" @click="toggleMenuLateral()"/>
        </div>
      </div>
      <div class="col-3 md:col-6 xl:col-8 md:hidden flex justify-content-end">
        <div>
          <Button class="p-button-sm bg-laranja mr-2 text-xs px-2" icon="pi pi-bars" @click="toggleMenuLateral()"/>
        </div>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-left vertical">
    <div>
      <Sidebar v-model:visible="exibeMenuLateral" :modal="false" :showCloseIcon="false" class="shadow-4 bg-black-alpha-90 z-4">
        <PanelMenu :model="items"/>
        <!-- <div class="div-logout">
          <Button id="btn-logout" class="p-button-sm text-xs bg-azul c-branca border-none fixed" label="Sair" icon="pi pi-sign-out"
            @click="logout()"/>
        </div> -->
      </Sidebar>
    </div>
  </nav>
  <main>
    <div id="gerenciador-content" class="gerenciador-content">
      <slot/>
    </div>
  </main>

</template>

<script src="./GerenciadorTemplate.ts" lang="ts" />
<style src="./GerenciadorTemplate.css"/>

