<template>
    <div id="wrapper" class="p-1">
        <h1>Пользователи</h1>
        <button class="btn btn-primary" id="btn" data-toggle="modal" @click="openModal()">
            Добавить пользователя
        </button>

        <hr>

        <div class="users d-flex justify-content-start flex-wrap">
            <div class="user card shadow-sm m-2 p-2 col-sm-12 col-md-5 col-lg-4 col-xl-3" v-for="(user, idx) in users"
                 :key="idx">
                <h3>{{user.name}}</h3>
                <hr>
                <h4>Логин: {{user.login}}</h4>
                <h4>Пароль: {{user.pass}}</h4>
                <h4>ID: {{user.id}}</h4>
                <h4>{{user.is_admin ? 'Админ' : 'Не админ'}}</h4>
                <div class=" my-1">
                    <button class="btn btn-warning" @click="openUpdate(user.id)">Изменить</button>
                    <button class="btn btn-danger" @click="deleteUser(user.id)">Удалить</button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Создать пользователя</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="log">Логин</label>
                                <input type="text" id="log" v-model="newUser.login" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="name">Имя</label>
                                <input type="text" id="name" v-model="newUser.name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="pass">Пароль</label>
                                <input type="text" id="pass" v-model="newUser.password" class="form-control">
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" v-model="newUser.is_admin"
                                       id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">
                                    Это администратор?
                                </label>
                            </div>
                            <div class="alert alert-danger my-2" v-if="newUser.error">
                                {{ newUser.error }}
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="saveUser()">Создать</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Обновить пользователя</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="log">Логин</label>
                                <input type="text" id="log1" v-model="updatedUser.login" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="name">Имя</label>
                                <input type="text" id="name1" v-model="updatedUser.name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="pass1">Пароль</label>
                                <input type="text" id="pass1" v-model="updatedUser.password" class="form-control">
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" v-model="updatedUser.is_admin"
                                       id="customCheck12">
                                <label class="custom-control-label" for="customCheck12">
                                    Это администратор?
                                </label>
                            </div>
                            <div class="alert alert-danger my-2" v-if="updatedUser.error">
                                {{ updatedUser.error }}
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="updateUser(updatedUser.id)">Обновить</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import $ from 'jquery';
    import 'bootstrap/dist/js/bootstrap.min.js';
    import ValidateService from '../services/ValidateService'

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
                    error: ''
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
                this.newUser.error = '';
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
                this.newUser.error = null;
                const validateMessage = ValidateService.validateNewUser(this.newUser);

                if (validateMessage) {
                    this.newUser.error = validateMessage;
                    return;
                } else {
                    const res = await this.$store.dispatch('createUser', {
                        login: this.newUser.login,
                        password: this.newUser.password,
                        is_admin: this.newUser.is_admin,
                        name: this.newUser.name
                    })
                    console.log('asdasd');
                    console.log();
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

                const error = ValidateService.validateUser(this.updatedUser);
                console.log(error);

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
            }

        }
    }
</script>

<style scoped>

</style>