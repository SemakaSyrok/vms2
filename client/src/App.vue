<template>
    <div id="app">
        
        <div id="wrapper" class="pt-5">
            <br>
            <Header/>
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {Header, Footer},
        data() {
            return {
                io: null
            }
        },
        beforeCreate() {
            let token = localStorage.getItem('_token') || null;
            let login = localStorage.getItem('_login') || null;
            let id = localStorage.getItem('_id') || null;

            if(token && login && id) {

                this.$store.dispatch('loginUserByStorage', {
                    login: login,
                    id: id,
                    token: token
                })
                this.$store.dispatch('connect');
            }
            if(!this.$store.getters.SELF.logged) {
                router.push('/login');
                return;
            }

        },
        mounted() {
            
        },
        methods: {

        },
        updated() {

        }
    }
</script>

<style>
    #app {
        max-width: 100%;
    }
    #wrapper{
        min-height: 95vh;
    }
       
</style>
