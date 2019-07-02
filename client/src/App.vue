<template>
    <div id="app">
        <div id="wrapper">
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
        created: {
        },
        beforeCreate: {
            start() {
                if(!this.$store.getters.SELF.logged) router.push('/login');
            }
        },
        methods: {

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
