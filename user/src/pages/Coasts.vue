<template>
    <div class="container pt-4"> 
        <h2>Расценки</h2>
        <hr>
        <div class="px-2" 
        v-for="(coast, idx) in coasts" 
        :key=idx>
            <div class="row my-2 px-2 justify-content-between">
                <h6 class="">{{ coast.name}} </h6>
                <h6 class="">{{ coast.coast}} $</h6>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Coasts",
        data() {
            return {
                coasts: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            getCoasts() {
                this.$store.commit('request_status', true);
                axios.get(`${this.$store.getters.API.url}/api/coasts`, {
                    headers: {
                        'Authorization': this.$store.getters.API.token
                    }
                })
                .then(res => {
                    this.coasts = res.data;
                    this.$store.commit('request_status', false);
                })
                .catch(err => {
                    alert('Ошибка получения расценок')
                    this.$store.commit('request_status', false);    
                })
            }
        },
        mounted() {
            this.getCoasts()
        }
    }
</script>

<style scoped>

</style>