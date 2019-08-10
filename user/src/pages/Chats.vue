<template>
    <div id="wrapper">
        <p>Chat</p>
        <div class="bottom-panel">
            <input type="text" class="bottom-input">
            <button class="bottom-btn">Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chats"
    }
</script>

<style scoped>
    .bottom-panel {
        z-index: 1;
        position: fixed;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 2px;
        min-height: 42px;
    }
    .bottom-input{
        width: 80%;
        min-height: 40px;
        margin: 0;
        padding: 0;
    }
    .bottom-btn {
        width: 18%;
        min-height: 42px;
        margin: 0;
        padding: 0;
        border: 0px solid silver;
        background: #0044ff;
        color: white;
    }
</style>