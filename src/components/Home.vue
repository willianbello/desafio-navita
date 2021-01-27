<template>
  <div>
    <div class="container-fluid">
      <h3 class="titulo">Veículos</h3>
      <div class="row">
        <div class="col-md-12 mt-4 mb-4">
          <tabela titulo="Marcas" nomeColuna="Marca" :arrayObjetos="marcas" :verModelos="true" @vermodelos="abrirModelos"></tabela>
        </div>

        <div class="col-md-12 mt-4 mb-4">
          <b-modal id="modal-modelos" title="" size="xl">
            <tabela titulo="Modelos" nomeColuna="Modelo" :arrayObjetos="modelos"></tabela>

            <template #modal-footer>
              <div class="w-100">
                <button class="float-right btn btn-fechar-modal" @click="fecharModal()">Fechar</button>
              </div>
            </template>
          </b-modal>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import Tabela from './Tabela';
import marcaService from '../services/marcas-service';
import modelosService from '../services/modelos-service';

export default {
  name: 'Home',
  components: {
    Tabela
  },
  data: function () {
    return {
      marcas: new Array(),
      modelos: new Array(),
    }
  },
  created() {
    marcaService.obterTodos()
      .then(resp => {
        if (resp && resp.length > 0) {
          this.marcas = resp;
        }
      });
  },
  methods: {
    abrirModelos(marca) {
      this.modelos = new Array();
      
      modelosService.obterModelosMarca(marca.codigo)
        .then(resp => {
          console.log(resp);
          if (resp && resp.modelos.length > 0) {
            this.modelos = resp.modelos;
            this.$bvModal.show('modal-modelos');
          }
        }).catch(error => {
          console.error(error);
        });
    },
    fecharModal() {
      this.$bvModal.hide('modal-modelos');
    }
  }
}
</script>

<style scoped>
.titulo {
  font-size: 1.5rem;
  padding: 15px 0;
}
.btn-fechar-modal {
  background-color: var(--main-color);
  color: white;
}
</style>
