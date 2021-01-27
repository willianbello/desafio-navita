<template>
  <div class="sombra">
    <div v-if="arrayObjetos.length > 0">
      <div class="bg-card-header">
        <h5 class="titulo">{{ titulo }}</h5>
      </div>
      <div class="corpo-tabela">
        <hr class="hr">
        <h6><b>{{ nomeColuna }}</b></h6>
        
        <!-- Itens Tabela -->
        <div v-for="objeto in arrayObjetos" :key="objeto.id">
          <hr class="hr">
          <div class="row mt-2">
            <div class="col-md-5">
              <h6 class="subtitulo">{{ objeto.nome }}</h6>
            </div>
            <div class="col-md-7" v-if="verModelos">
              <button class="btn btn-ver-modelos" @click="emitirEscolha(objeto)">Ver modelos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h5 class="titulo">Não há modelos dessa marca para serem exibidos.</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabela',
  props: {
    titulo: String,
    nomeColuna: String,
    verModelos: Boolean,
    arrayObjetos: Array
  },
  data : function() {
    return {
      exibeModelos: this.verModelos,
    }
  },
  methods: {
    emitirEscolha(marca) {
      this.$emit('vermodelos', marca);
    }
  }
}
</script>

<style scoped>
.titulo {
  font-size: 1.5rem;
  padding: 15px 25px;
  margin: 0;
  color: var(--main-color);
  font-weight: bold;
}
.bg-card-header {
  background-color:var(--bg-header-card);
  border: var(--border-table);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.corpo-tabela {
  padding: 15px;
  background-color: white;
}
.subtitulo { 
  padding: 15px; 
}
h6 { 
  padding: 10px;
  margin: 0 
}
.btn-ver-modelos {
  color: var(--main-color)
}
.btn-ver-modelos:active {
  color: var(--main-color-active)
}
.sombra {
  box-shadow: 0 0 20px var(--shadow-design);
}
</style>
