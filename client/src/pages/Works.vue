<template>
    <div class="container">
        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="question">Название</label>
                    <input type="text" v-model="name" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="unswer">Описание</label>
                    <textarea type="text" v-model="desc" rows="5" id="unswer" name="unswer" class="form-control">

                    </textarea>
                </div>
                <div class="row">
                   <div class="form-group col-6">
                        <label for="shir">Широта</label>
                        <input type="text" v-model="shir"  id="shir" name="shir" class="form-control">
                    </div>
                    <div class="form-group col-6">
                        <label for="unswer">Долгота</label>
                        <input type="text" v-model="dolg" id="dolg" name="dolg" class="form-control">
                    </div> 
                </div>

                <span class="btn btn-primary" @click="addWork()">
                    Добавить Выполненную работу
                </span>
            </form>
        </div>

        <hr class="my-4">

        <div class="coasts">
            <button class="btn btn-primary" @click="getWorks()">Получить работы</button>

            <div class="coasts row my-2">
                <div class=" col-sm-12 col-md-6 col-lg-6 coast" v-for="(work, idx) in works">

                    <div class="" :key="idx">
                        <div class="p-1">
                            <form class="card p-2">
                                <div class="form-group">
                                    <label for="question">Название</label>
                                    <input type="text" v-model="work.name" name="question" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="unswer">Описание</label>
                                    <textarea type="text" v-model="work.desc" name="unswer" class="form-control">

                                    </textarea>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="btn btn-warning"
                                                  @click="openWork(work.id)">
                                                  Перейти к работе
                                            </span>
                                        </div>
                                        <div class="col-6">
                                            <span class="btn btn-danger" @click="deleteWork(work.id)">Удалить </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
                desc: '',
                shir: 0,
                dolg: 0,
                works: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            openWork(id) {
                this.$router.push({name: 'work', params: {id : id}});
            },
            async addWork() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.post(this.$store.getters.API.url + '/work', {
                        name: this.name,
                        desc: this.desc,
                        shir: this.shir,
                        dolg: this.dolg,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    alert('Работа добавлена');
                    this.works.push(response.data);
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка добавления работы');
                    console.log(error);
                    this.$store.commit('request_status', false);
                }
                this.name = '';
                this.desk = '';
                this.dolg = 0;
                this.shir = 0;
            },
            async getWorks() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/works', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.works = response.data;
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Ошибка получения работ')
                }
            },
            async deleteWork(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.delete(this.$store.getters.API.url + '/work/' + id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.works = this.works.filter(work => work.id !== id);
                    alert("Удалено");
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Ошибка удаления')
                }

            },
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
