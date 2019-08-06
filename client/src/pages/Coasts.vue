<template>
    <div class="container">
        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="name">Название работы</label>
                    <input type="text" v-model="name" id="name" name="name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="coast">Цена работы</label>
                    <input type="number" v-model="coast" id="coast" name="coast" class="form-control">
                </div>

                <span class="btn btn-primary" @click="addCoasts()">
                    Добавить расценку
                </span>
            </form>
        </div>

        <hr class="my-4">

        <div class="coasts">
            <button class="btn btn-primary" @click="getCoasts()">Получить цены</button>

            <div class="coasts row my-2">
                <div class=" col-sm-12 col-md-6 col-lg-6 coast" v-for="(coast, idx) in coasts">

                    <div class="" :key="idx">
                        <div class="p-1">
                            <form class="card p-2">
                                <div class="form-group">
                                    <label for="name">Название работы</label>
                                    <input type="text" v-model="coast.name" name="name" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="coast">Цена работы</label>
                                    <input type="number" v-model="coast.coast" name="coast" class="form-control">
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="btn btn-warning"
                                                  @click="updateCoasts(coast.id)">Изменить</span>
                                        </div>
                                        <div class="col-6">
                                            <span class="btn btn-danger" @click="deleteCoasts(coast.id)">Удалить </span>
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

        name: "Coasts",
        data() {
            return {
                coast: 1,
                name: '',
                coasts: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            async addCoasts() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.post(this.$store.getters.API.url + '/coasts', {
                        name: this.name,
                        coast: this.coast
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    })
                    alert('Цена добавлена')
                    this.coasts.push(response.data)
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка добавления')
                    this.$store.commit('request_status', false);
                }
                this.coast = 0;
                this.name = '';
            },
            async getCoasts() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/coasts', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    console.log(response.data);
                    this.coasts = response.data;
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка получения расценок')
                    this.$store.commit('request_status', false);
                }
            },
            async deleteCoasts(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.delete(this.$store.getters.API.url + '/coasts/' + id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.coasts = this.coasts.filter(coast => coast.id !== id);
                    alert("Удалено");
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка удаления')
                    this.$store.commit('request_status', false);
                }

            },
            async updateCoasts(id) {
                try {
                    this.$store.commit('request_status', true);
                    const response = await axios.put(this.$store.getters.API.url + '/coasts/' + id, {
                        name: this.coasts.find(coast => coast.id === id).name,
                        coast: this.coasts.find(coast => coast.id === id).coast
                    },{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.getCoasts();
                    alert('Данные обновлены');
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка изменения');
                    this.$store.commit('request_status', false);
                }

            },
        }
    }
</script>

<style scoped>

</style>