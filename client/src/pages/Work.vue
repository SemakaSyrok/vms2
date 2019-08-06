<template>
    <div class="container">
        <div class="form pt-2">
            <form class="card p-2">
                <div class="form-group">
                    <label for="question">Название</label>
                    <input type="text" v-model="work.name" id="question" name="question" class="form-control">
                </div>
                <div class="form-group">
                    <label for="unswer">Описание</label>
                    <textarea type="text" v-model="work.desc" rows="5" id="unswer" name="unswer" class="form-control">

                    </textarea>
                </div>
                <div class="row">
                   <div class="form-group col-6">
                        <label for="shir">Широта</label>
                        <input type="number" v-model="work.shir"  id="shir" name="shir" class="form-control">
                    </div>
                    <div class="form-group col-6">
                        <label for="unswer">Долгота</label>
                        <input type="number" v-model="work.dolg" id="dolg" name="dolg" class="form-control">
                    </div> 
                </div>

                <span class="btn btn-primary" @click="updateWork()">
                    Обновить
                </span>
            </form>
        </div>

        <div class="form mt-2">
            <form enctype="multipart/form-data" class="card p-2" >
                <div class="images p-2 row">
                    <div class="col-6 position-relative" v-for="(img, idx) in work.images" :key="idx" >
                        <div class="position-absolute delete-img" >
                                <img src="@/assets/delete.png" 
                                alt="удалить"
                                @click="deleteImage(img)"
                                >
                        </div>
                        <img v-bind:src="$store.getters.API.url + '/uploads/' + img" 
                        class="img-thumbnail m-1" 
                        alt="img" >
                    </div>
                </div>  
                <div class="form-group">
                    <label for="img">Выбрать картинку</label>
                    <input type="file"  id="img" name="img" class="btn btn-primary form-control">
                    <span class="btn btn-primary mt-2" @click="uploadImage()" >Добавить картинку</span>
                </div>
            </form>
        </div>

        <hr class="my-2">

        <div class="map row justify-content-center">
            <div class="mapouter col-12">
                <div class="gmap_canvas">
                    <iframe width="100%" height="300" id="gmap_canvas" v-bind:src="'https://maps.google.com/maps?q='+work.shir+','+work.dolg+'&t=&z=13&ie=UTF8&iwloc=&output=embed'" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Work",
        data() {
            return {
                work_id: null,
                image: null,
                work: {}
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        mounted() {
            this.work_id = this.$route.params.id;
            this.getWork();
        },
        methods: {
            async getWork() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/work/' + this.work_id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.work = response.data[0];
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Ошибка получения работы');
                    console.log(error);
                    this.$store.commit('request_status', false);
                }
            },
            async updateWork() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.put(this.$store.getters.API.url + '/work/' + this.work_id,{
                        name: this.work.name,
                        desc: this.work.desc,
                        shir: this.work.shir,
                        dolg: this.work.dolg,
                    } ,{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.$store.commit('request_status', false);
                    alert('Работа обновленна');
                    this.getWork();
                } catch (error) {
                    alert('Ошибка обновления работы');
                    console.log(error);
                    this.$store.commit('request_status', false);
                }
            },
            async uploadImage() {
                let file = document.getElementById('img').files[0];
                if(file) {
                    let formData = new FormData();
                    formData.append('img', file);
                    this.$store.commit('request_status', true);
                    axios.post( `${this.$store.getters.API.url}/work/${this.work_id}/image`,formData,{
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': this.$store.getters.API.token
                        }
                        }).then((res) => {
                            alert('Картинка добавлена!');
                            this.getWork();
                            this.$store.commit('request_status', false);
                        }).catch((err) => {
                            alert('Ошибка добавления картинки');
                            this.$store.commit('request_status', false);
                        });
                }
            },
            async deleteImage(img) {
                this.$store.commit('request_status', true);
                axios.delete(`${this.$store.getters.API.url}/work/
                              ${this.work_id}/delete-image/${img}`, {
                                 headers: {
                                    'Authorization': this.$store.getters.API.token
                                }
                             })
                .then(res => {
                    this.work.images = this.work.images.filter(image => image != img); 
                    this.$store.commit('request_status', false);
                    alert('Картина удалена');
                })
                .catch(err => {
                    alert('Ошибка удаления');
                    this.$store.commit('request_status', false);
                })
            }
        }    
    }
    
    
</script>

<style>
.delete-img{
    top: 4px;
    right: 20px;
    width: 32px;
    height: 32px;
    opacity: .7;
    cursor: pointer;
}
.mapouter{position:relative;text-align:right;width:100%}
.gmap_canvas {
    max-width: 100%;
}
.map{
    box-sizing: border-box;
}
</style>


