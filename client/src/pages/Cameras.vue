<template>
    <div class="wrapper p-1">
        <h1>Камеры</h1>
        <button class="btn btn-primary" @click="openCamera()">Добавить камеру</button>
        <hr class="mb-1">

        <div class="users d-flex justify-content-start flex-wrap">
            <div class="user card shadow-sm m-2 p-2 col-sm-12 col-md-5 col-lg-4 col-xl-3"
                 v-for="(camera, idx) in cameras" :key="idx">
                <h3>{{camera.name}}</h3>
                <hr>
                <h4>Url: <span class="bg-light">{{camera.connection_string}}</span></h4>
                <h4>ID Пользователя: {{ camera.owner_id }}</h4>
                <div class=" my-1">
                    <button class="btn btn-warning" @click="openUpdateCamera(camera.id)">Изменить</button>
                    <button class="btn btn-danger" @click="deleteCamera(camera.id)">Удалить</button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="cameraModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Добавить камеру</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="url">Строка подключения</label>
                                <input type="text" id="url" v-model="newCamera.connection_string" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="port">Имя</label>
                                <input type="text" id="port" v-model="newCamera.name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="select">Пользователь</label>
                                <select class="form-control" id="select" v-model="newCamera.owner_id">
                                    <option v-for="(user, idx) in this.$store.getters.SIMPLE_USERS"
                                            v-bind:value="user.id">
                                        {{ user.login }}
                                    </option>
                                </select>
                            </div>

                            <div class="alert alert-danger my-2" v-if="newCamera.error">
                                {{ newCamera.error }}
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="saveCamera()">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="updateCamera" tabindex="-1" role="dialog" aria-labelledby="updateLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateLabel">Обновить камеру</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="url_">Строка подключения</label>
                                <input type="text" id="url_" v-model="updatedCamera.connection_string"
                                       class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="port_">Имя</label>
                                <input type="text" id="port_" v-model="updatedCamera.name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="select_">Пользователь</label>
                                <select class="form-control" id="select_" v-model="updatedCamera.owner_id">
                                    <option v-for="(user, idx) in this.$store.getters.SIMPLE_USERS"
                                            v-bind:value="user.id">
                                        {{ user.login }}
                                    </option>
                                </select>
                            </div>

                            <div class="alert alert-danger my-2" v-if="updatedCamera.error">
                                {{ updatedCamera.error }}
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="updateCamera()">Обновить</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import $ from 'jquery';
    import 'bootstrap/dist/js/bootstrap.min.js';
    import ValidateService from '../services/ValidateService';

    export default {
        name: "Cameras",
        data() {
            return {
                newCamera: {
                    connection_string: '',
                    name: '',
                    owner_id: null,
                    error: ''
                },
                updatedCamera: {
                    id: null,
                    connection_string: '',
                    name: '',
                    owner_id: null,
                    error: ''
                }

            }
        },
        beforeCreate: function () {
            if(this.$store.getters.SELF.logged === false) this.$router.push('/login');
            this.$store.dispatch('usersRequest')
            this.$store.dispatch('camerasRequest')
        },
        computed: {
            cameras() {
                return this.$store.getters.CAMERAS
            },
        },
        methods: {
            camera(id) {
                return this.$store.getters.CAMERAS.find(user => user.id === id);
            },
            openCamera: function () {
                $('#cameraModal').modal('toggle');
                this.newCamera.error = '';
            },
            openUpdateCamera: function (id) {
                $('#updateCamera').modal('toggle');
                const camera = this.camera(id);
                this.updatedCamera.connection_string = camera.connection_string;
                this.updatedCamera.name = camera.name;
                this.updatedCamera.id = camera.id;
                this.updatedCamera.owner_id = camera.owner_id;
                this.updatedCamera.error = '';
            },
            async saveCamera() {
                this.newCamera.error = '';

                if (this.newCamera.error)
                    return;
                else {
                    const res = await this.$store.dispatch('createCamera', {
                        name: this.newCamera.name,
                        connection_string: this.newCamera.connection_string,
                        owner_id: this.newCamera.owner_id
                    });
                    await this.$store.dispatch('camerasRequest')
                }
            },
            async updateCamera(id) {
                this.updatedCamera.error = ValidateService.validateCamera(this.updatedCamera);

                if (this.updatedCamera.error)
                    return;
                else {
                    const res = await this.$store.dispatch('updateCamera', {
                        id: this.updatedCamera.id,
                        connection_string : this.updatedCamera.connection_string,
                        name : this.updatedCamera.name,
                        owner_id : this.updatedCamera.owner_id,
                    });

                    await this.$store.dispatch('camerasRequest')
                }
            },
            async deleteCamera(id) {
                const res = await this.$store.dispatch('deleteCamera', id);
                await this.$store.dispatch('camerasRequest')
            },
            owner_name(id) {
                return this.$store.getters.USERS.find(user => user.id === id)
            },
        }

    }
</script>

<style scoped>

</style>