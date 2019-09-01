<template>
    <div class="wrapper container">
        <h1>Cameras</h1>
        <button class="btn btn-primary" @click="openCamera()">Add camera</button>
        <hr class="mb-1">

        <div class="users d-flex justify-content-start flex-wrap">
            <div class="user   p-2 col-sm-12 col-md-5 col-lg-4 col-xl-3"
                 v-for="(camera, idx) in cameras" :key="idx">
                <div class="card shadow-sm p-1">
                    <h3>{{camera.name}}</h3>
                    <hr>
                    <h4>Url: <span class="bg-light">{{camera.connection_string}}</span></h4>
                    <h4>ID Пользователя: {{ camera.owner_id }}</h4>
                    <div class=" my-1">
                        <button class="btn btn-warning" @click="openUpdateCamera(camera.id)">Change</button>
                        <button class="btn btn-danger" @click="deleteCamera(camera.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="cameraModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add camera</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="url">Connect string</label>
                                <input type="text" id="url"  v-model="newCamera.connection_string" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="port">Name</label>
                                <input type="text" id="port"  v-model="newCamera.name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="select">User</label>
                                <select 
                                    class="form-control" 
                                    id="select" 
                                    v-model="newCamera.owner_id"
                                >
                                    <option v-for="(user, idx) in $store.getters.SIMPLE_USERS"
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
                        <button type="button" class="btn btn-primary" @click="saveCamera()">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="updateCamera" tabindex="-1" role="dialog" aria-labelledby="updateLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateLabel">Update camera</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="url_">Connection string</label>
                                <input type="text" id="url_" v-model="updatedCamera.connection_string"
                                       class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="port_">Name</label>
                                <input type="text" id="port_" v-model="updatedCamera.name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="select_">User</label>
                                <select class="form-control" id="select_" v-model="updatedCamera.owner_id">
                                    <option v-for="(user, idx) in $store.getters.SIMPLE_USERS"
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
                        <button type="button" class="btn btn-primary" @click="updateCamera()">Update</button>
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
                this.validate_camera();

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
            validate_camera() {
                let error = null;

                if(this.newCamera.connection_string.length <= 4) error = 'Connection string to small';
                if(this.newCamera.name.length <= 4) error = 'Name to small';
                if(!this.newCamera.owner_id) error = 'User not chosen';

                this.newCamera.error = error;
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