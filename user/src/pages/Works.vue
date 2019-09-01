<template>
    <div class="container pt-4">
        <h2>Our works</h2>

        <hr>

        <div class="row justify-content-center">
            <div class="work col-12 p-2" 
                v-for="(work, idx) in works" :key="idx"
            >
                <div class="card ">

                    <div class="card-title border-bottom px-3 pt-1">
                        <h4>{{work.name}}</h4>
                    </div>

                    <p class="px-3 pt-1 my-3" >
                        {{ work.desc }}
                    </p>

                    <router-link 
                        class="btn btn-primary m-2"
                        v-bind:to="'/work/'+work.id" >
                        Photos
                    </router-link>
                    
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Works",
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        data() {
            return {
                works: []
            }
        },
        methods: {
            getWorks() {
                this.$store.commit('request_status', true);
                axios.get(`${this.$store.getters.API.url}/api/works`, {
                    headers: {
                        'Authorization': this.$store.getters.API.token
                    }
                })
                .then(res => {
                    this.works = res.data;
                    this.$store.commit('request_status', false);
                })
                .catch(err => {
                    alert('Error receiving works')
                    this.$store.commit('request_status', false);    
                })
                
            }
        },
        mounted() {
            this.getWorks()
        }
    }
</script>

<style scoped>

</style>