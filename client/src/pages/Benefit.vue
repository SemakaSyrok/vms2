<template>
    <div class="container">
        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="question">Question</label>
                    <input type="text" v-model="question" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="unswer">Benefit unswer</label>
                    <textarea type="text" v-model="unswer" rows="3" id="unswer" name="unswer" class="form-control">

                    </textarea>
                </div>

                <span class="btn btn-primary" @click="addBenefit()">
                    Add
                </span>
            </form>
        </div>

        <hr class="my-4">

        <div class="coasts">
            <button class="btn btn-primary" @click="getBenefit()">Get benrfit questions</button>

            <div class="coasts row my-2">
                <div class=" col-sm-12 col-md-6 col-lg-6 coast" v-for="(benefit, idx) in benefits">

                    <div class="" :key="idx">
                        <div class="p-1">
                            <form class="card p-2">
                                <div class="form-group">
                                    <label for="question">Question</label>
                                    <input type="text" v-model="benefit.question" name="question" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="unswer">Unswer</label>
                                    <textarea type="text" v-model="benefit.unswer" name="unswer" class="form-control">

                                    </textarea>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="btn btn-warning"
                                                  @click="updateBenefit(benefit.id)">Change</span>
                                        </div>
                                        <div class="col-6">
                                            <span class="btn btn-danger" @click="deleteBenefit(benefit.id)">Delete</span>
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
                question: '',
                unswer: '',
                benefits: []
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            async addBenefit() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.post(this.$store.getters.API.url + '/benefit', {
                        question: this.question,
                        unswer: this.unswer
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    alert('Success');
                    this.benefits.push(response.data);
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Error to add benefit question');
                    console.log(error);
                    this.$store.commit('request_status', false);
                }
                this.question = '';
                this.unswer = '';
            },
            async getBenefit() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/benefit', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.benefits = response.data;
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Error receiving benefit questions')
                }
            },
            async deleteBenefit(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.delete(this.$store.getters.API.url + '/benefit/' + id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.benefits = this.benefits.filter(benefit => benefit.id !== id);
                    alert("Success");
                    this.$store.commit('request_status', false);
                } catch (error) {
                    this.$store.commit('request_status', false);
                    alert('Error')
                }

            },
            async updateBenefit(id) {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.put(this.$store.getters.API.url + '/benefit/' + id, {
                        question: this.benefits.find(coast => coast.id === id).question,
                        unswer: this.benefits.find(coast => coast.id === id).unswer
                    },{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.getBenefit();
                    this.$store.commit('request_status', false);
                    alert('Success')
                } catch (error) {
                    alert('Error');
                    this.$store.commit('request_status', false);
                }

            },
        }
    }
</script>

<style scoped>

</style>