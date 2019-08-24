<template>
    <div class="container pt-4">

        <h2>Бонусы</h2>

        <hr>

        <div class="row d-flex flex-column justify-content-between px-2 align-items-center"  >
            <div class="col-sm-12 col-md-8 col-lg-6 col-xl-6 p-2"
                v-for="(question, idx) in questions" :key="idx" >
                <div class="card">
                    <div class="card-title border-bottom">
                        <h4 class=" px-2 pt-2">{{ question.bonuses }}</h4>
                    </div>
                    <p class="px-2 pt-2">{{ question.unswer }}</p>
                    <a :href="question.link" class="px-2 pt-2 mb-1">Узнать больше</a>
                    

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Bonuses",
        data() {
            return {
                questions: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            getQuestions() {
                this.$store.commit('request_status', true);
                axios.get(`${this.$store.getters.API.url}/api/bonuses`, {
                    headers: {
                        'Authorization': this.$store.getters.API.token
                    }
                })
                .then(res => {
                    this.questions = res.data;
                    this.$store.commit('request_status', false);
                })
                .catch(err => {
                    alert('Ошибка получения бонусов')
                    this.$store.commit('request_status', false);    
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