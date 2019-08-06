<template>
    <div class="container">
        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="question">Вопрос</label>
                    <input type="text" v-model="question" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="unswer">Ответ</label>
                    <textarea type="text" v-model="unswer" rows="3" id="unswer" name="unswer" class="form-control">

                    </textarea>
                </div>

                <span class="btn btn-primary" @click="addQuestion()">
                    Добавить вопрос/ответ
                </span>
            </form>
        </div>

        <hr class="my-4">

        <div class="coasts">
            <button class="btn btn-primary" @click="getQuestions()">Получить вопросы</button>

            <div class="coasts row my-2">
                <div class=" col-sm-12 col-md-6 col-lg-6 coast" v-for="(question, idx) in questions">

                    <div class="" :key="idx">
                        <div class="p-1">
                            <form class="card p-2">
                                <div class="form-group">
                                    <label for="name">Вопрос</label>
                                    <input type="text" v-model="question.question" name="question" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="coast">Ответ</label>
                                    <textarea type="text" v-model="question.unswer" name="unswer" class="form-control">

                                    </textarea>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="btn btn-warning"
                                                  @click="updateQuestions(question.id)">Изменить</span>
                                        </div>
                                        <div class="col-6">
                                            <span class="btn btn-danger" @click="deleteQuestions(question.id)">Удалить </span>
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
        name: "Questions",
        data() {
            return {
                question: '',
                unswer: '',
                questions: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            async addQuestion() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.post(this.$store.getters.API.url + '/questions', {
                        question: this.question,
                        unswer: this.unswer
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    alert('Вопрос добавлен');
                    this.questions.push(response.data);
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка добавления вопроса');
                    this.$store.commit('request_status', true);
                }
                this.question = '';
                this.unswer = '';
            },
            async getQuestions() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/questions', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.questions = response.data;
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Ошибка получения вопросов')
                }
            },
            async deleteQuestions(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.delete(this.$store.getters.API.url + '/questions/' + id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.questions = this.questions.filter(question => question.id !== id);
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
                    const response = await axios.put(this.$store.getters.API.url + '/questions/' + id, {
                        question: this.questions.find(coast => coast.id === id).question,
                        unswer: this.questions.find(coast => coast.id === id).unswer
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