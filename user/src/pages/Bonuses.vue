<template>
    <p>Bonuses</p>
</template>

<script>
    export default {
        name: "Bonuses",
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
    }
</script>

<style scoped>

</style>