<template>
    <div id="app">
        <div id="wrapper">
            <Header/>
            <div class="divider"></div>
            <img src="@/assets/main-bg.jpg" id="bg" alt="">
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
                this.$store.dispatch('connect');
            }

            if(!this.$store.getters.SELF.logged) {
                router.push('/login');
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
    #bg{
        position: fixed;
        z-index: -999;
        min-width: 100%;
        min-height: 100%;
        top: 0;
        -webkit-filter: opacity(.85);
        filter: opacity(.85);
        object-fit: cover;
    }
    .divider{
        margin-top: 60px;
    }

</style>
