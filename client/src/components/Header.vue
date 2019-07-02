<template>
    <span>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar" :class="is_noone()">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" width="38" height="34" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link"
                                     to="/"
                                     :class=" activeLink('/')"
                        >Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link"
                                     to="cameras"
                                     :class=" activeLink('/cameras')"
                        >Камеры</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link"
                                     to="users"
                                     :class=" activeLink('/users')"
                        >Пользователи</router-link>
                    </li>
<!--                    <li class="nav-item">-->
<!--                        <router-link class="nav-link"-->
<!--                                     to="chats"-->
<!--                                     :class=" activeLink('/chats')"-->
<!--                        >Чаты</router-link>-->
<!--                    </li>-->
                    <li class="nav-item">
                        <button class="btn btn-primary nav-link ml-lg-4 p-2" @click="logout()">Выйти</button>
                    </li>
                </ul>

            </div>
        </nav>
        <div class="loading-bar" v-if="this.$store.getters.REQUEST">
            <div class="loading-elem"></div>
        </div>
    </span>
</template>

<script>
    export default {
        name: "Header"
        ,
        computed: {
            
            
        },
        methods: {
            activeLink(path) {
                return path === this.$route.path ? 'active' : '';
            },
            is_noone() {
                return this.$route.path === '/login' ? 'none' : '';
            },
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style scoped>
    .none {
        display: none;
    }
    .loading-bar{
        height: 3px;
        width: 100%;
        background: #3bd931;
    }
    .loading-elem{
        width: 30%;
        height: 3px;
        background: linear-gradient(0.45turn, #14ff04, #ffef00, #14ff04);
        animation-name: example;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    @keyframes example {
        0%{margin-left: 0%}
        100%{margin-left: 70%}
    }

</style>