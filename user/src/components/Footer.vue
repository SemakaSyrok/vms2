<template>
    <span>
        <footer class="bg-dark mt-2" :class="is_noone()" >
        <h3 class="text-center text-light  p-3" style="margin-bottom: 0px">ДомЛес</h3>
    </footer>
    </span>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            is_noone() {
                return this.$route.path === '/login' ? 'none' : '';
            },
        }
    }
</script>

<style scoped>
    footer {
        width: 100%;
        bottom: 0px;
        margin-bottom: -12px;
    }
    .none {
        display: none;
    }
</style>