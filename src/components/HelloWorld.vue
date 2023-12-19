<template>
  <div class="hello">
    <h1>Bienvenid@: {{ $store.state.usuarioActivo }}</h1>
    <button @click="desloguearse">LOG-OUT</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'HelloWorld',
  methods:{
    ...mapMutations(['modificarUsuario']),
    desloguearse(){
      this.modificarUsuario(null);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
