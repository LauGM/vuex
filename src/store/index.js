import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioActivo:null,
    listaUsuarios:[
      {
        nombre:'Lau',
        password:'1234'
      }
    ]
  },
  getters: {
    getUsuarioActivo(state){
      return state.usuarioActivo;
    },
    getListaUsuarios(state){
      return state.listaUsuarios;
    }
  },
  mutations: {
    modificarUsuario(state,nuevoUsuario){
      state.usuarioActivo=nuevoUsuario;
    },
    cargarListaApi(state, listaApi){
      state.listaUsuarios=listaApi;
    }
  },
  actions: {
    obtenerUsuariosApi:async function({commit}){
      const URL="https://my.api.mockaroo.com/users.json?key=140b4040";
      const data= await fetch(URL);
      const usuarios= await data.json();
      commit('cargarListaApi',usuarios);
    }
  },
  modules: {
  }
})
