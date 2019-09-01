<template>
    <div class="container">

        <div class="form pt-2">
            <form class="card p-2">
                
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" v-model="project.name">
                </div>

                <div class="form-group">
                    <label for="percents">Completed (percents)(from 0 to 100)</label>
                    <input type="number" class="form-control" name="percents" id="percents" v-model="project.percents">
                </div>

                <div class="form-group">
                    <label for="select">User</label>
                    <select 
                        class="form-control" 
                        id="select" 
                        v-model="project.user_id"
                    >
                        <option v-for="(user, idx) in $store.getters.SIMPLE_USERS"
                                v-bind:value="project.user_id">
                            {{ user.login }}
                        </option>
                    </select>
                </div>

                <hr class="my-2">

                <div class="form-group row">
                    <div class="col-8">
                        <input type="text" class="form-control" 
                        v-model="new_step" 
                        name="percents" 
                        id="percents" >
                    </div>
                    <div class="col-4">
                        <span class="btn btn-primary" @click="addStep()">Add step</span>
                    </div>
                </div>

                <div class="form-group my-4">
                    <div class="step  p-2" 
                    v-for="(step, idx) in project.steps.steps" 
                    :key="idx">
                        <div class="border p-1">

                            <div class="row">
                                <div class="col-6">
                                    <span>{{ step.name }}</span>
                                    <input type="checkbox" class="form-controll" v-model="step.completed">
                                </div>
                                <div class="col-3 d-flex flex-column">
                                    <span class="cursor" @click="go_top(step.number)">Top</span>
                                    <span class="cursor" @click="go_botoom(step.number)">Bottom</span>
                                </div>
                                <div class="col-3">
                                    <span class="cursor" @click="del_step(step.number)">Delete</span>
                                </div>
                            </div>              
                            
                        </div>
                    </div>
                </div>

                <span class="btn btn-primary mt-4" @click="updateProject()">
                    Update
                </span>

            </form>
        </div>

        <div class="form mt-2">
            
                <form enctype="multipart/form-data" class="card p-2" >

                        <div class="images p-2 row">
                            <div class="col-6 position-relative" v-for="(img, idx) in project.images" :key="idx" >
                                <div class="position-absolute delete-img" >
                                        <img src="@/assets/delete.png" 
                                        alt="удалить"
                                        @click="deleteImage(img.path)"
                                        >
                                </div>
                                
                                <img v-bind:src="$store.getters.API.url + '/steps/' + img.path" 
                                class="img-thumbnail m-1" 
                                alt="img" >
                                <p>{{ img.desc }}</p>
                            </div>
                        </div>

                        <div class="form-group row container-fluid">
                            <div class="col-12 p-1">
                                <input type="file"  id="img" name="img" class="">
                            </div>

                            <label for="description">Image description</label>
                            <input type="text" class="form-control" 
                                    name="description" 
                                    id="description" 
                                    v-model="description">

                            <div class="col-12 p-1">
                                <span class="btn btn-sm btn-primary mt-2" @click="uploadImage()" >Add image</span>
                            </div>      
                        </div>  
                </form>  

        </div>

        

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Project",
        data() {
            return {
                description: '',
                project_id: null,
                image: null,
                new_step: '',
                project: {}
            }
        },
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
        mounted() {
            this.project_id = this.$route.params.id;
            this.getProject();
        },
        computed: {
            steps_length() {
                return this.project.steps.steps.length;
            },
            // _steps() {
            //     return this.project.steps.steps.sort((a,b) => {
            //         if(a.number > b.number)
            //             return 1;
            //         else if (a.number < b.number)
            //             return -1;
            //         else 
            //             return 0;
            //     })
            // }
        },
        methods: {
            go_botoom(step) {
                if(step >= this.steps_length - 1) return;
                const num = this.project.steps.steps[step].number; 
                this.project.steps.steps[step].number = num + 1;
                this.project.steps.steps[step+1].number = num;
                this.sort_steps();
            },
            go_top(step) {
                if (step <= 0) return;
                const num = this.project.steps.steps[step].number; 
                this.project.steps.steps[step].number = num - 1;
                this.project.steps.steps[step-1].number = num;
                this.sort_steps();
            },
            del_step(num) {
                this.project.steps.steps = this.project.steps.steps.filter(step => 
                    step.number != num)
                this.renum_steps();
            },
            renum_steps(){
                for(let i = 0; i <= this.steps_length; i++) {
                    this.project.steps.steps[i].number = i;
                }
            },
            sort_steps() {
                this.project.steps.steps = this.project.steps.steps.sort((a,b) => {
                    if(a.number > b.number)
                        return 1;
                    else if (a.number < b.number)
                        return -1;
                    else 
                        return 0;
                })
            },
            addStep() {
                this.project.steps.steps.push({
                    name: this.new_step,
                    number: this.steps_length,
                    completed: false,
                    images: []
                })
                this.new_step = '';
            },
            async getProject() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(this.$store.getters.API.url + '/project/' + this.project_id, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.project = response.data;
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Error receiving project');
                    this.$store.commit('request_status', false);
                }
            },
            async updateProject() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.put(this.$store.getters.API.url + '/project/' + this.project_id,{
                        name: this.project.name,
                        user_id: this.project.user_id,
                        percents: this.project.percents,
                        steps: this.project.steps,
                    } ,{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.$store.commit('request_status', false);
                    alert('Success');
                    this.getProject();
                } catch (error) {
                    alert('Error');
                    this.$store.commit('request_status', false);
                }
            },
            async uploadImage() {
                let file = document.getElementById('img').files[0];
                let desc = this.description;
                if(file) {
                    let formData = new FormData();
                    formData.append('img', file);
                    formData.append('image_desc', desc);
                    this.$store.commit('request_status', true);
                    axios.post( `${this.$store.getters.API.url}/project/${this.project_id}/image`,formData,{
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': this.$store.getters.API.token
                        }
                        }).then((res) => {
                            alert('Success');
                            this.getProject();
                            this.$store.commit('request_status', false);
                        }).catch((err) => {
                            alert('Error');
                            this.$store.commit('request_status', false);
                        }).finally(() => this.image_desc = '');
                }
            },
            async deleteImage(img) {
                this.$store.commit('request_status', true);
                axios.delete(`${this.$store.getters.API.url}/project/
                              ${this.project_id}/delete-image/${img}`, {
                                 headers: {
                                    'Authorization': this.$store.getters.API.token
                                }
                             })
                .then(res => {
                    this.project.images = this.project.images.filter(image => image.path != img); 
                    this.$store.commit('request_status', false);
                    alert('Success');
                })
                .catch(err => {
                    alert('Error');
                    this.$store.commit('request_status', false);
                })
            }
        }    
    }
    
    /**
     * {
     *    Номер
     *    Название
     *    Выполнено ли да/нет
     *    картинки []
     * }
     */
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
.cursor{
    cursor: pointer;
}
</style>


