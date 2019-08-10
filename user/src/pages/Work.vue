<template>
    <div class="container pt-4">
        
        <h2>Photos</h2>

        <hr>

        <div class="images">
            <img 
                v-bind:src="$store.getters.API.url + '/uploads/' + img"
                alt="img" 
                v-for="(img, idx) in work.images" 
                :key="idx" 
                class="img-fluid p-2 my-2 img-thumbnail"
            >
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
                    alert('Error reciving images');
                    console.log(error);
                    this.$store.commit('request_status', false);
                }
            },
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


