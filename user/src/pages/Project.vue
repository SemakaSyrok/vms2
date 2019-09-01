<template>
    <div class="wrapper container-fluid pt-4">

        <h2 class="mt-3">{{ project.name }}</h2>

        <div class="progress mt-4">
            <div class="progress-bar progress-bar-striped" role="progressbar" :style="{width: project.percents + '%'}" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">{{project.percents}}%</div>
        </div>

        <div class="steps mt-4">

            <div class="step my-2 alert " 
                v-for="(step, idx) in project.steps.steps"
                :key=idx
                :class="alertType(step.completed)">
                {{ step.name }} 
            </div>
            
        </div>

        <div class="images row  align-items-center justify-content-center">

            <div v-for="(img, idx) in project.images"  
                 class="p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                :key="idx">

                <div class="card shadow-sm ">
                    <img :src="$store.getters.API.url+'/steps/'+img.path" 
                    :alt="img.desc"
                    class="img-fluid">
                <p class="p-2">{{ img.desc }}</p>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Project",
        data() {
            return {
                project: {}
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        mounted() {
            this.getProject() 
        },
        computed: {
            width() {
                return this.project.percents
            },
        },
        methods: {
            alertType(type) {
                return type ? 'alert-success' : 'alert-light'
            },
            async getProject() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/api/project', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.project = response.data;
                } catch (err) {
                    alert('Error receiving project')
                } finally  {
                    this.$store.commit('request_status', false);
                }     
            }
        }
    }
</script>

<style scoped>
    .step{
        z-index: -3;
    }
</style>