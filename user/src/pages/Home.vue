<template>
    <div class="wrapper container-fluid">
        <button class="btn btn-primary mt-2 mb-1" @click="getCameras()">Получить данные с камер</button>
        <span v-if="camera()">
            <h3> {{ camera().name }}</h3>
            <img :src="camera().connection_string"
                 id="camera"
                 class="d-block mx-auto img-fluid"
                 alt="">
            <div class="row d-flex justify-content-center">
                <button class="btn btn-primary m-1" @click="before()"> &#8592; </button>
                <button class="btn btn-primary m-1" @click="next()"> &#8594; </button>
            </div>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                current_camera: 0,
                width: 300,
                height: 300,
            }
        },
        computed: {},
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        methods: {
            cameras_amount() {
                return this.$store.getters.CAMERAS.length;
            },
            camera() {
                const CAMERAS = this.$store.getters.CAMERAS;
                const camera = CAMERAS[this.current_camera];
                return camera;
            },
            next() {
                if (this.current_camera + 1 >= this.cameras_amount()) {
                    this.current_camera = 0;
                } else {
                    this.current_camera++;
                }
            },
            before() {
                if (this.current_camera - 1 < 0) {
                    this.current_camera = this.cameras_amount() - 1;
                } else {
                    this.current_camera--;
                }
            },
            getCameras() {
                this.$store.dispatch('camerasRequest');
            }
        }
    }
</script>

<style scoped>

</style>