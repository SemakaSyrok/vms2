<template>
    <div id="wrapper " class="container">
        <h1>Chats</h1>
        <button class="btn btn-primary" @click="updateUsers()">Update</button>
        <hr>
        <div class="chats row">
            <div class="user card shadow-sm m-2 p-2 col-sm-10 col-md-5 col-lg-4 col-xl-3" v-for="(user, idx) in users"
                 :key="idx">
                <h4>{{user.name}}</h4>
                <hr>
                <h5>Login: {{user.login}}</h5>
                <div class=" my-1">
                    <button class="btn btn-primary" @click="openChat(user.id)">Go to chat</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chats",
        data() {
            return {
                rooms: []
            }
        },
        computed: {
            users: function () {
                return this.$store.getters.SIMPLE_USERS;
            }
        },
        mounted() {

        },
        methods: {
            updatedUsers () {
                this.$store.dispatch('usersRequest');
            },
            openChat(id) {
                this.$router.push({name: 'chat', params: {id : id}});
            }
        }
    }
</script>

<style scoped>

</style>