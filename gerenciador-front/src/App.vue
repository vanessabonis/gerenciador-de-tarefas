<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/tarefas">Tarefas</router-link> | 
    <router-link to="/usuarios">Usuarios</router-link>
  </nav> -->
  <Toast
    position="top-right"
    :breakpoints="{ '524px': { width: '100%', right: '0', left: '0' } }"
  />
  <ConfirmDialog></ConfirmDialog>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
