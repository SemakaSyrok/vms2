<template>
    <div id="wprapper">
        <div class="full-page d-flex justify-content-center align-items-center flex-column">
            <form  class="col-sm-9 col-md-8 col-lg-7 col-xl-6">
                <div class="form-group">
                    <label class="h3" for="exampleInputEmail1 ">Login</label>
                    <input v-model="login" type="text" class="form-control" id="exampleInputEmail1"  placeholder="example@mail.ru">
                </div>
                <div class="form-group">
                    <label class="h3" for="exampleInputPassword1 ">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="123456">
                </div>

            </form>
            <button type="submit" @click="submit()" class="btn btn-primary ">
                <p class="h5">
                    <span v-if="this.$store.getters.REQUEST">Sending...</span>
                    <span v-else>Login</span>
                </p>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => {
            return {
                login: '',
                password: ''
            }
        },
        beforeCreate() {

        },
        methods:  {
            submit() {
                this.$store.dispatch('login', {
                    login: this.login,
                    password: this.password
                })
            }
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