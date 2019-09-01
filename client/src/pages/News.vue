<template>
    <div class="container">
        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="question">New</label>
                    <input type="text" v-model="newest" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="question">Link</label>
                    <input type="text" v-model="link" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea type="text" v-model="description" rows="3" id="description" name="description" class="form-control">

                    </textarea>
                </div>

                <span class="btn btn-primary" @click="addQuestion()">
                    Add
                </span>
            </form>
        </div>

        <hr class="my-4">

        <div class="coasts">
            <button class="btn btn-primary" @click="getQuestions()">Get new</button>

            <div class="coasts row my-2">
                <div class=" col-sm-12 col-md-6 col-lg-6 coast" v-for="(ne, idx) in news">

                    <div class="" :key="idx">
                        <div class="p-1">
                            <form class="card p-2">
                                <div class="form-group">
                                    <label for="name">New</label>
                                    <input type="text" v-model="ne.news" name="question" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="name">Link</label>
                                    <input type="text" v-model="ne.link" name="question" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="coast">Description</label>
                                    <textarea type="text" v-model="ne.description" name="description" class="form-control">

                                    </textarea>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="btn btn-warning"
                                                  @click="updateQuestions(ne.id)">Change</span>
                                        </div>
                                        <div class="col-6">
                                            <span class="btn btn-danger" @click="deleteQuestions(ne.id)">Delete</span>
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
                link: '',
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
                        description: this.description,
                        link: this.link
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    alert('Success');
                    this.news.push(response.data);
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Error');
                    this.$store.commit('request_status', false);
                }
                this.newest = '';
                this.description = '';
                this.link = '';
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
                    alert('Error')
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
                    const response = await axios.put(this.$store.getters.API.url + '/news/' + id, {
                        news: this.news.find(news => news.id === id).news,
                        description: this.news.find(news => news.id === id).description,
                        link: this.news.find(news => news.id === id).link
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