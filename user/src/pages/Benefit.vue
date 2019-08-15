<template>
    <div class="container pt-4">

        <h2>Полезное</h2>

        <hr>

        <div class="row justify-content-between px-2" v-for="(benefit, idx) in benefits" :key="idx" >
            <div class="col-sm-12 col-md-8 col-lg-6 col-xl-6 p-2">
                <div class="card">
                    <div class="card-title border-bottom">
                        <h4 class=" px-2 pt-2">{{ benefit.question }}</h4>
                    </div>
                    <p class="px-2 pt-2">{{ benefit.unswer }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "benefit",
        data() {
            return {
                benefits: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            getQuestions() {
                this.$store.commit('request_status', true);
                axios.get(`${this.$store.getters.API.url}/api/benefits`, {
                    headers: {
                        'Authorization': this.$store.getters.API.token
                    }
                })
                .then(res => {
                    this.benefits = res.data;
                    this.$store.commit('request_status', true);
                })
                .catch(err => {
                    alert('Ошибка получения полезной информации')
                    this.$store.commit('request_status', true);    
                })
            }
        },
        mounted() {
            this.getQuestions();
        }
    }
</script>

<style scoped>

</style>