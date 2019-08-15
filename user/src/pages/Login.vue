<template>
    <div id="wprapper">
        <div class="full-page d-flex justify-content-center align-items-center flex-column">
            <form  class="col-sm-9 col-md-8 col-lg-7 col-xl-6">
                <div class="form-group">
                    <label class="h3" for="exampleInputEmail1 ">Логин</label>
                    <input v-model="login" type="text" class="form-control" id="exampleInputEmail1"  placeholder="example@mail.ru">
                </div>
                <div class="form-group">
                    <label class="h3" for="exampleInputPassword1 ">Пароль</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="123456">
                </div>

            </form>
            <br>
            <button @click="submit()" type="submit" class="btn btn-primary ">
                <p class="h5">
                    <span v-if="this.$store.getters.REQUEST">Отправка...</span>
                    <span v-else>Войти</span>
                </p>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                login: '',
                password: ''
            }
        },
        methods:  {
            submit() {
                this.$store.dispatch('login', {
                    login: this.login,
                    password: this.password
                })
            }
        },
        beforeCreate() {

        }
    }
</script>

<style scoped>
    .full-page{
        min-height: 75vh;
    }
    input{
        border-top: 0px solid #000;
        border-right: 0px;
        border-left: 0px;
    }
</style>