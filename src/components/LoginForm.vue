<template>
    <div>
        <form @submit.prevent="loguear">
            <label>
                Usuario:
                <input type="text" v-model="user">
            </label>
            <label>
                Contraseña:
                <input type="password" v-model="pass">
            </label>
            <input type="submit" value="LOG-IN">
        </form>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
    name: 'LoginForm',

    data() {
        return {
           user:'',
           pass:'',
        };
    },
    created(){
        this.obtenerUsuariosApi();
    },  
    methods:{
        ...mapMutations(['modificarUsuario']),
        ...mapActions(['obtenerUsuariosApi']),
        loguear(){
            const encontrado=this.$store.getters.getListaUsuarios.find(usuario => usuario.nombre == this.user && usuario.password == this.pass);
            console.log(encontrado)
            if(encontrado){
                //acceder al store y con una mutacion modificar el usuarioActivo.
                this.modificarUsuario(encontrado.nombre);
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>