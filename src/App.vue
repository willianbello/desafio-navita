<template>
  <div id="app">
    <header-app></header-app>
    <router-view></router-view>
    <footer-app></footer-app>
  </div>
</template>

<script>
import headerApp from './components/shared/Header';
import footerApp from './components/shared/Footer';

export default {
  name: 'App',
  components: {
    headerApp,
    footerApp
  }
}
</script>

<style>
/* Variáveis de estilo */
:root {
  --main-color-active: #1CC88A;
  --main-color: #4E73DF;
  --shadow-design: rgba(58,59,69,.15);
  --border-table: #E3E6F0;
  --bg-app: #F7F8FB;
  --color-app: #5A5C69;
  --bg-header-card: #F8F9FC;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: var(--color-app);
  background-color: var(--bg-app);

}
body { margin: 0; padding: 0; }
.hr { margin: 0 }
</style>
