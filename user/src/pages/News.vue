<template>
    <div class="container pt-4">

        <h2>New</h2>

        <hr>

        <div class="row d-flex flex-column align-items-center justify-content-between px-2" v-for="(question, idx) in questions" :key="idx" >
            <div class="col-sm-12 col-md-8 col-lg-6 col-xl-6 p-2">
                <div class="card">
                    <div class="card-title border-bottom">
                        <h4 class=" px-2 pt-2">{{ question.news }}</h4>
                    </div>
                    <p class="px-2 pt-2">{{ question.description }}</p>
                    <div class="p-1 ">
                        
                    <button class="btn btn-primary mb-1"
                        @click="goToVideo(question.link)">Video</button> 
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "News",
        data() {
            return {
                questions: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        computed:{
            
        },
        methods: {
            goToVideo(link) {
                this.$router.push('/video/' + link);
            },
            getQuestions() {
                this.$store.commit('request_status', true);
                axios.get(`${this.$store.getters.API.url}/api/news`, {
                    headers: {
                        'Authorization': this.$store.getters.API.token
                    }
                })
                .then(res => {
                    this.questions = res.data;
                    this.$store.commit('request_status', false);
                })
                .catch(err => {
                    alert('Error receiving new')
                    this.$store.commit('request_status', false);    
                })
            },
            youtube_height(el) {
                console.log(el);
            }
        },
        mounted() {
            this.getQuestions();
        }
    }
</script>

<style scoped>

</style>