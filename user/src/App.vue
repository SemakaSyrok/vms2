<template>
    <div id="app">
        <div id="wrapper">
            <Header/>
            <div class="divider"></div>
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
        data() {
            return {
                io: null
            }
        },
        components: {Header, Footer},
        created: {

        },
        beforeCreate() {
            let token = localStorage.getItem('token') || null;
            let login = localStorage.getItem('login') || null;
            let id = localStorage.getItem('id') || null;

            if(token && login && id) {

                this.$store.dispatch('loginUserByStorage', {
                    login: login,
                    id: id,
                    token: token
                })
            }

            if(!this.$store.getters.SELF.logged) {
                router.push('/login');
            }
        },
        mounted() {
            if(this.$store.getters.SELF.logged) {
                this.$store.dispatch('connect');
            }
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
    .divider{
        margin-top: 60px;
    }

</style>
