<template>
  <div id="app">
    <HelloWorld v-if="$store.getters.getUsuarioActivo"/>
    <LoginForm v-else/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginForm
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
