<template>
    <div class="container pt-4"> 
        <h2>Pricing</h2>
        <hr>
        <div class="px-2" 
        v-for="(coast, idx) in coasts" 
        :key=idx>
            <div class="row my-2 px-2 justify-content-between">
                <div class="col-7">
                    <h6 class="">{{ coast.name}} </h6>
                </div>
                <div class="col-5 text-right">
                    <h6 class="text-right">{{ coast.coast}} $</h6>
                </div>
                <hr>
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
                    alert('Error reseiving prices')
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