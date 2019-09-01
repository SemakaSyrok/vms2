<template>
    <div >
        <div class="container-fluid ">
            <div class="row justify-content-center">
                <div class="col-sm-12 messages-box pt-72">
                    <div class="">
                        <transition-group name="message" class="messages row p-2 mb-1">
                            <message v-for="(msg) in messages"
                                     :key="msg.id"
                                     v-bind="msg"
                                     v-bind:_id="id"
                                     class="col-sm-12 col-md-12 col-lg-12"
                            ></message>
                        </transition-group>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-panel">
            <div class="pos-rel">
                <input type="text" class="bottom-input" v-model="message" >
                <span class="words-amount">{{message_length}}/254</span>
            </div>
            
            <div class="btn-block">
                <button class="bottom-btn" @click="sendMessage()">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from '../components/Message';
    import axios from 'axios';
import { log } from 'util';

    //Получение данных при прокрутке вверх
    // не свапать вниз если вверху

    export default {
        name: "Chat",
        components: {
            'message' : Message
        },
        data() {
            return {
                message: '',
                room_id: null,
            }
        },
        computed: {
            message_length() {
                return this.message.length;
            },
            messages() {
                return this.$store.getters.MESSAGES;
            },
            id() {
                return this.$store.getters.SELF.id;
            },
            offset() {
                return this.$store.getters.MESSAGES.length;
            }
        },
        methods: {
            sendMessage() {
                if(this.message.length > 254) {
                    alert('Massage to long')
                    return;
                }

                this.$store.dispatch('sendMessage', this.message);
                this.message = '';
            },
            async getMessages() {
                this.$store.commit('request_status', true);
                try {
                    const response = await axios.get(`${this.$store.getters.API.url}/messages/${this.room_id}/${this.offset}`,{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': this.$store.getters.API.token
                        }
                    });
                    this.$store.dispatch('getMessages', response);
                    this.$store.commit('request_status', false);
                } catch (error) {
                    alert('Error');
                    this.$store.commit('request_status', false);
                    console.log(error);
                }
            },
            TopScroll() {
                if(!this.$store.getters.REQUEST && (window.scrollY === 0)) {
                    this.getMessages();
                }
            }
        },
        created () {
            window.addEventListener('scroll', this.TopScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.TopScroll);
        },
        watch: {

        },
        mounted() {
            this.$store.getters.IO.emit('createRoom', this.$route.params.id);
            if(this.$store.getters.IO.listeners('message').length === 0) {
                this.$store.getters.IO.on('message', msg => {
                    this.$store.dispatch('getMessage', msg);
                });

            }
            this.room_id = this.$route.params.id;
            this.getMessages();
        },
        beforeDestroy() {
            this.$store.getters.IO.emit('leaveRoom', this.room_id);
            this.$store.dispatch('clearMessages');
        }
    }
</script>

<style scoped>
    .words-amount{
        position: absolute;
        right: 37%;
        top: 5px;
    }   
    .pos-rel{
        width: 65%;
        float:left;
    }
    .btn-block{
        width: 35%;
        float:left;
    }
    .pt-72{
        padding-top: 72px;
    }
    .bottom-panel {
        z-index: 1;
        position: fixed;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 2px;
        min-height: 72px;
        background: #fff;
        display: inline;
    }
    .bottom-input{
        width: 100%;
        min-height: 50px;
        margin: 0;
        padding: 0;
    }
    .bottom-btn {
        width: 100%;
        min-height: 50px;
        margin: 0;
        padding: 0;
        border: 0px solid silver;
        background: #0044ff;
        color: white;
    }
    .border-messages {
        border: 1px solid silver;
    }
    .messages-box{
        min-height: 75vh;
    }
    .w-100 {
        width: 100%;
    }
    .message-enter-active, .message-leave-active {
        transition: opacity .8s;
    }
    .message-enter, .message-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>