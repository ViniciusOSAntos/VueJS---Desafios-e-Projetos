<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->
        <nome-completo v-model="nomeCompleto"></nome-completo>
        <rotulo nome="E-mail">
          <input type="text" v-model.lazy.trim="usuario.email" />
        </rotulo>
        <rotulo nome="Senha">
          <input type="password" />
        </rotulo>
        <rotulo nome="Amazenar seus dados">
          <span
            ><input type="radio" value="Sim" v-model="armazenar" /> Sim</span
          >
          <span
            ><input type="radio" value="Nao" v-model="armazenar" /> Não</span
          >
        </rotulo>
        <rotulo nome="Primeira Reclamação?">
					<escolha v-model="escolha"/>
				</rotulo>
        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
        <button @click.prevent="enviar">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <rotulo nome="Nome">
          <span>{{ nomeCompleto.nome }}</span>
        </rotulo>
        <rotulo nome="Sobrenome">
          <span>{{ nomeCompleto.sobrenome }}</span>
        </rotulo>
        <rotulo nome="Email">
          <span>{{ usuario.email }}</span>
        </rotulo>
        <rotulo nome="Armazenar Dados">
          <span>{{ armazenar }}</span>
        </rotulo>
        <rotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
				</rotulo>
        <button @click.prevent="enviar">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto, Escolha },
  methods: {
    enviar() {
      this.enviado = !this.enviado;
      console.log(this.enviado);
    },
  },
  data() {
    return {
      escolha: false,
	  nomeCompleto: {
		  nome: 'Vinicius',
		  sobrenome: 'Oliveira'
	  },
      enviado: false,
      armazenar: "Sim",
      usuario: {
        email: '',
        senha: '',
        idade: '',
      },
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
#app div button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
