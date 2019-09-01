<template>
    <div id="wrapper" class="container">
        <h1>Users</h1>
        <button class="btn btn-primary" id="btn" data-toggle="modal" @click="openModal()">
            Add user
        </button>

        <hr>

        <div class="users d-flex justify-content-start flex-wrap">
            <div class="user p-1 col-sm-12 col-md-5 col-lg-4 col-xl-3" v-for="(user, idx) in users"
                 :key="idx">
                <div class="p-1 card shadow-sm">
                    <h3>{{user.name}}</h3>
                    <hr>
                    <h4>Login: {{user.login}}</h4>
                    <h4>Password: {{user.pass}}</h4>
                    <h4>ID: {{user.id}}</h4>
                    <h4>{{user.is_admin ? 'Админ' : 'Не админ'}}</h4>
                    <div class=" my-1">
                        <button class="btn btn-warning" @click="openUpdate(user.id)">Change</button>
                        <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New user</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="log">Login</label>
                                <input type="text" id="log" 
                                    v-model="newUser.login" 
                                    class="form-control"
                                    @input="validate_user()"
                                >
                            </div>
                            <div class="form-group">
                                <label for="name">User</label>
                                <input type="text" id="name" 
                                    v-model="newUser.name" 
                                    class="form-control"
                                    @input="validate_user()"
                                >
                            </div>
                            <div class="form-group">
                                <label for="pass">Password</label>
                                <input type="text" id="pass" 
                                    v-model="newUser.password" 
                                    class="form-control"
                                    @input="validate_user()"    
                                >
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" v-model="newUser.is_admin"
                                       id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">
                                    Admin?
                                </label>
                            </div>
                            <div class="alert alert-danger my-2" v-show="newUser.error">
                                {{ newUser.error }}
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="saveUser()">Create</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Update user</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="log">Login</label>
                                <input type="text" id="log1" v-model="updatedUser.login" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name1" v-model="updatedUser.name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="pass1">Password</label>
                                <input type="text" id="pass1" v-model="updatedUser.password" class="form-control">
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" v-model="updatedUser.is_admin"
                                       id="customCheck12">
                                <label class="custom-control-label" for="customCheck12">
                                    Admin?
                                </label>
                            </div>
                            <div class="alert alert-danger my-2" v-if="updatedUser.error">
                                {{ updatedUser.error }}
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="updateUser(updatedUser.id)">Update</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import $ from 'jquery';
    import 'bootstrap/dist/js/bootstrap.min.js';
import { setTimeout } from 'timers';

    export default {
        name: "Users",
        data: function () {
            return {

                newUser: {
                    login: '',
                    password: '',
                    name: '',
                    is_admin: false,
                },
                updatedUser: {
                    id: null,
                    login: '',
                    password: 'a',
                    name: '',
                    is_admin: false,
                    error: null
                }
            }
        },
        computed: {
            users: function () {
                return this.$store.getters.USERS;
            }
        },
        beforeCreate: function () {
            if(this.$store.getters.SELF.logged === false) this.$router.push('/login');
            this.$store.dispatch('usersRequest')
        },
        methods: {
            openModal: function () {
                $('#exampleModal').modal('toggle');
                this.newUser.error = null;
            },
            openUpdate(id) {
                $('#updateModal').modal('toggle');
                this.updatedUser.error = null;
                let User = this.users.find(user => user.id === id);
                let is_admin;
                is_admin = !!User.is_admin;
                this.updatedUser.id = User.id;
                this.updatedUser.login = User.login;
                this.updatedUser.password = User.pass;
                this.updatedUser.name = User.name;
                this.updatedUser.is_admin = is_admin;
            },
            saveUser: async function () {
                this.validate_user();

                if (!this.newUser.error) {
                    const res = await this.$store.dispatch('createUser', {
                        login: this.newUser.login,
                        password: this.newUser.password,
                        is_admin: this.newUser.is_admin,
                        name: this.newUser.name
                    })
                    
                    await this.$store.dispatch('usersRequest')
                }
            },
            usersRequest: function () {
                this.$store.dispatch('usersRequest')
            },
            async deleteUser(id) {
                const res = await this.$store.dispatch('deleteUser', id)
                await this.$store.dispatch('usersRequest')
            },
            async updateUser(id) {

                const error = this.validateUser(this.updatedUser);

                if (error) {
                    this.updatedUser.error = error;
                    return;
                } else {
                    const res = await this.$store.dispatch('updateUser', {
                        id: id,
                        login: this.updatedUser.login,
                        password: this.updatedUser.password,
                        is_admin: this.updatedUser.is_admin,
                        name: this.updatedUser.name
                    });
                    await this.$store.dispatch('usersRequest')
                }
            },
            validateNewUser(payload) {
                let error = null;
                const regular = /^[a-zA-Z][a-zA-Z0-9]+$/ig;
                const regular1 = /^[a-zA-Z0-9]+$/ig;

                if (payload.login.length <= 6) error = 'Login to short';
                if (payload.login.length >= 32) error = 'Login to long';
                if (payload.password.length <= 6) error = 'Password to short';
                if (payload.password.length >= 32) error = 'Password to long';
                if (!regular.test(payload.login)) error = 'Invalid charecters at login';
                if (!regular1.test(payload.password)) error = 'Invalid charecters at password';

                return error;
            },
            validateUser(payload) {
                let error = null;
                const regular = /^[a-zA-Z][a-zA-Z0-9]+$/ig;
                const regular1 = /^[a-zA-Z0-9]+$/ig;

                if (payload.login.length <= 6) error = 'Login to short';

                if (payload.login.length >= 32) error = 'Login to long';
                if (payload.password.length <= 6) error = 'Password to short';

                if (payload.password.length >= 32) error = 'Password to long';
                if (!regular.test(payload.login)) error = 'Invalid charecters at login';
                if (!regular1.test(payload.password)) error = 'Invalid charecters at password';

                if (this.newUser.name.length <= 3) {error = 'Name to short';  }
                if (this.newUser.name.length >= 32) {error = 'Name to long';  }


                return error;
            },
            validateCamera(payload) {
                let error = null;

                if(payload.connection_string.length <= 4) error = 'Connection string to short';
                if(payload.name.length <= 4) error = 'Nmae to short';

                return error;
            },
            validate_user() {
                let error = null;
                const regular = /^[a-zA-Z][a-zA-Z0-9]+$/ig;
                const regular1 = /^[a-zA-Z0-9]+$/ig;

                if (this.newUser.login.length <= 6) {error = 'Login to short';  }
                if (this.newUser.login.length >= 32) {error = 'Login to long';  }
                if (this.newUser.password.length <= 6) {error = 'Password to short';  }
                if (this.newUser.password.length >= 32) {error = 'Password to long';  }
                if (!regular.test(this.newUser.login)) {error = 'Invalid charecters at login';  }
                if (!regular1.test(this.newUser.password)) {error = 'Invalid charecters at password';  }
                if (this.newUser.name.length <= 3) {error = 'Name to short';  }
                if (this.newUser.name.length >= 32) {error = 'Name to short';  }


                if(error)  
                    this.newUser.error = error;
                else
                    this.newUser.error = null;

            }

        }
    }
</script>

<style scoped>

</style>