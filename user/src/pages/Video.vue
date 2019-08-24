<template>
    <div class="container pt-4">

        <div class="" id="block">
            <iframe  :src="`https://www.youtube.com/embed/${path}`"
                style="width:100%"
                :style="{height: youtube_height + 'px'}"
                class="img-fluid"
                frameborder="0" 
                allow="accelerometer; autoplay; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
        

    </div>
</template>

<script>

    export default {
        name: "Video",
        data() {
            return {
                path: '',
                windowWidth: 0
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        computed:{
            youtube_height() {
                return this.windowWidth / 16 * 9;
            },
        },
        watch: {

        },
        methods: { 
            getWindowWidth(event) {
                let www = document.getElementById('block');
                this.windowWidth = www.clientWidth;
            },
        },
        mounted() {
            this.path = this.$route.params.path;
            window.addEventListener('resize', this.getWindowWidth);

            this.getWindowWidth()
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>

<style scoped>

</style>