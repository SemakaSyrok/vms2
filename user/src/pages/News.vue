<template>
    <p>News</p>
</template>

<script>
    export default {
        name: "News",
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
    }
</script>

<style scoped>

</style>