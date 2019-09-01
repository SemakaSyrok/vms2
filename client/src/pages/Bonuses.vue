<template>
    <div class="container">
        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="question">Bonus</label>
                    <input type="text" v-model="bonuses" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="question">Link</label>
                    <input type="text" v-model="link" id="link" name="link" class="form-control">
                </div>
                <div class="form-group">
                    <label for="unswer">Descriotion</label>
                    <textarea type="text" v-model="unswer" rows="3" id="unswer" name="unswer" class="form-control">

                    </textarea>
                </div>

                <span class="btn btn-primary" @click="addQuestion()">
                    Add
                </span>
            </form>
        </div>

        <hr class="my-4">

        <div class="coasts">
            <button class="btn btn-primary" @click="getQuestions()">Get bonuses</button>

            <div class="coasts row my-2">
                <div class=" col-sm-12 col-md-6 col-lg-6 coast" v-for="(question, idx) in questions">

                    <div class="" :key="idx">
                        <div class="p-1">
                            <form class="card p-2">
                                <div class="form-group">
                                    <label for="name">Bonus</label>
                                    <input type="text" v-model="question.bonuses" name="question" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="name">Link</label>
                                    <input type="text" v-model="question.link" name="question" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="coast">Description</label>
                                    <textarea type="text" v-model="question.unswer" name="unswer" class="form-control">

                                    </textarea>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="btn btn-warning"
                                                  @click="updateQuestions(question.id)">Change</span>
                                        </div>
                                        <div class="col-6">
                                            <span class="btn btn-danger" @click="deleteQuestions(question.id)">Delete</span>
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
        name: "Bonuses",
        data() {
            return {
                bonuses: '',
                unswer: '',
                link: '',
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
                    const response = await axios.post(this.$store.getters.API.url + '/bonuses', {
                        bonuses: this.bonuses,
                        unswer: this.unswer,
                        link: this.link
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    alert('Success');
                    this.questions.push(response.data);
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Error');
                    this.$store.commit('request_status', true);
                }
                this.question = '';
                this.unswer = '';
            },
            async getQuestions() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/bonuses', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.questions = response.data;
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Error receiving bonuses')
                }
            },
            async deleteQuestions(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.delete(this.$store.getters.API.url + '/bonuses/' + id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.questions = this.questions.filter(question => question.id !== id);
                    alert("Success");
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Error')
                }

            },
            async updateQuestions(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.put(this.$store.getters.API.url + '/bonuses/' + id, {
                        bonuses: this.questions.find(coast => coast.id === id).bonuses,
                        unswer: this.questions.find(coast => coast.id === id).unswer,
                        link: this.questions.find(coast => coast.id === id).link
                    },{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.getQuestions();
                    this.$store.commit('request_status', false);
                    alert('Success')
                } catch (error) {
                    alert('Error')
                    this.$store.commit('request_status', false);
                }

            },
        }
    }
</script>

<style scoped>

</style>