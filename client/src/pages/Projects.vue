<template>
    <div class="container">

        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="question">Название</label>
                    <input type="text" v-model="name" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="select">Пользователь</label>
                    <select 
                        class="form-control" 
                        id="select"
                        v-model="user_id" 
                    >
                        <option v-for="(user, idx) in $store.getters.SIMPLE_USERS"
                                v-bind:value="user.id" :key="idx">
                            {{ user.login }}
                        </option>
                    </select>
                </div>
                

                <span class="btn btn-primary" @click="addProject()">
                    Добавить Проект
                </span>
            </form>
        </div>

        <hr class="my-4">

        <div class="coasts">
            <button class="btn btn-primary" @click="getProjects()">Получить проекты</button>

            <div class="coasts row my-2">
                <div class=" col-sm-12 col-md-6 col-lg-6 coast" v-for="(project, idx) in projects">

                    <div class="" :key="idx">
                        <div class="p-1">
                            <div class="card p-2">
                                <h5>{{project.name}}</h5>

                                
                                <div class="row">
                                    <div class="col-6">
                                        <span 
                                            class="btn btn-warning"
                                            @click="openProject(project.id)">
                                                Перейти к проекту
                                        </span>
                                    </div>
                                    <div class="col-6">
                                        <span class="btn btn-danger" @click="deleteProject(project.id)">Удалить </span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Benefit",
        data() {
            return {
                name: '',
                user_id: '',
                projects: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            openProject(id) {
                this.$router.push({name: 'project', params: {id : id}});
            },
            async addProject() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.post(this.$store.getters.API.url + '/project', {
                        name: this.name,
                        user_id: this.user_id,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    alert('Проект добавлена');
                    this.projects.push(response.data);
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка добавления проекта');
                    console.log(error);
                    this.$store.commit('request_status', false);
                }
                this.name = '';
                this.desk = '';
            },
            async getProjects() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/projects', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.projects = response.data;
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Ошибка получения проектов')
                }
            },
            async deleteProject(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.delete(this.$store.getters.API.url + '/project/' + id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.projects = this.projects.filter(project => project.id !== id);
                    alert("Удалено");
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Ошибка удаления')
                }

            },
        },
        mounted() {
            this.$store.dispatch('usersRequest')
        }
    }
</script>

<style>
.mapouter{position:relative;text-align:right;height:500px;width:600px;}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
</style>

// <div class="mapouter">
//             <div class="gmap_canvas">
//                 <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=55.05,82.91&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//                 <a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">wordpress</a>
//             </div> 
//         </div>
