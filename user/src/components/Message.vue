<template>

    <div class="wrapper ">
            <p class="text " v-bind:class="myMessageSide">
                {{ text }}
                <br>
                <span class="text-muted mini">
                    {{ _createdAt }}
                </span>
            </p>
    </div>

</template>

<script>
    export default {
        name: "Message",
        props: ['text', 'room', 'user_id', 'createdAt', 'id', '_id'],
        data() {
            return {
                myMess: null,
            }
        },
        methods: {},
        computed: {
            myMessageSide() {
                return this.myMess ? 'myMessage' : 'noMyMessage';
            },
            _createdAt() {
                return this.createdAt.split('T')[0];
            }
        },
        created() {
            this.myMess = ~~this.user_id === ~~this._id;
        }

    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
    }

    .text {
        font-size: 18px;
        min-width: 30%;
        max-width: 70%;
    }

    .mini {
        font-size: 14px;
    }

    .myMessage {
        float: right;
        padding: 1px 6px 1px 6px;
        background: #78aeff;
        border-radius: 6px 0 6px 6px;
    }

    .noMyMessage {
        float: left;
        padding: 1px 6px 1px 6px;
        background: #cdcdcd;
        border-radius: 0 6px 6px 6px;
    }

</style>