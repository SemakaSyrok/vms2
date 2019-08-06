<template>
    <div class="container pt-4">
        <h2>Наши работы</h2>

        <hr>

        <div class="row justify-content-center">
            <div class="work col-12 p-2" 
                v-for="(work, idx) in works" :key="idx"
            >
                <div class="card ">

                    <div class="card-title border-bottom px-3 pt-1">
                        <h4>{{work.name}}</h4>
                    </div>

                    <div class="map">
                        <div class="mapouter col-12">
                            <div class="gmap_canvas">
                                <iframe width="100%" height="300" id="gmap_canvas" 
                                v-bind:src="'https://maps.google.com/maps?q='+work.shir+','+work.dolg+'&t=&z=13&ie=UTF8&iwloc=&output=embed'" 
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div> 
                        </div>
                    </div>

                    <p class="px-3 pt-1 my-3" >
                        {{ work.desc }}
                    </p>

                    <router-link 
                        class="btn btn-primary m-2"
                        v-bind:to="'/work/'+work.id" >
                        Фотографии
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
                    this.$store.commit('request_status', true);
                })
                .catch(err => {
                    alert('Ошибка получения работ')
                    this.$store.commit('request_status', true);    
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