<template>
    <div class="container">
        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="question">Новинка</label>
                    <input type="text" v-model="newest" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="description">Описание</label>
                    <textarea type="text" v-model="description" rows="3" id="description" name="description" class="form-control">

                    </textarea>
                </div>

                <span class="btn btn-primary" @click="addQuestion()">
                    Добавить новинку
                </span>
            </form>
        </div>

        <hr class="my-4">

        <div class="coasts">
            <button class="btn btn-primary" @click="getQuestions()">Получить Новинки</button>

            <div class="coasts row my-2">
                <div class=" col-sm-12 col-md-6 col-lg-6 coast" v-for="(ne, idx) in news">

                    <div class="" :key="idx">
                        <div class="p-1">
                            <form class="card p-2">
                                <div class="form-group">
                                    <label for="name">Вопрос</label>
                                    <input type="text" v-model="ne.news" name="question" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="coast">Ответ</label>
                                    <textarea type="text" v-model="ne.description" name="description" class="form-control">

                                    </textarea>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="btn btn-warning"
                                                  @click="updateQuestions(ne.id)">Изменить</span>
                                        </div>
                                        <div class="col-6">
                                            <span class="btn btn-danger" @click="deleteQuestions(ne.id)">Удалить</span>
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
        name: "News",
        data() {
            return {
                newest: '',
                description: '',
                news: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            async addQuestion() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.post(this.$store.getters.API.url + '/news', {
                        news: this.newest,
                        description: this.description
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    alert('Новинка добавлена');
                    this.news.push(response.data);
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка добавления новинки');
                    this.$store.commit('request_status', true);
                }
                this.newest = '';
                this.description = '';
            },
            async getQuestions() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/news', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.news = response.data;
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Ошибка получения вопросов')
                }
            },
            async deleteQuestions(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.delete(this.$store.getters.API.url + '/news/' + id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.news = this.news.filter(news => news.id !== id);
                    alert("Удалено");
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Ошибка удаления')
                }

            },
            async updateQuestions(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.put(this.$store.getters.API.url + '/news/' + id, {
                        news: this.news.find(news => news.id === id).news,
                        description: this.news.find(news => news.id === id).description
                    },{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.getQuestions();
                    this.$store.commit('request_status', false);
                    alert('Данные обновлены')
                } catch (error) {
                    alert('Ошибка изменения')
                    this.$store.commit('request_status', false);
                }

            },
        }
    }
</script>

<style scoped>

</style>