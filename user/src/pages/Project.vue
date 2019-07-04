<template>
    <div class="wrapper container-fluid ">

        <h2 class="mt-3">Сосновая избушка</h2>

        <div class="progress mt-4">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
        </div>

        <div class="steps mt-4">
            <div class="step my-1 alert alert-success">Заливка бетона</div>
            <div class="step my-1 alert alert-success">Возведение стен</div>
            <div class="step my-1 alert alert-success">Укладка крыши</div>
            <div class="step my-1 alert alert-light">Что-то там...</div>
            <div class="step my-1 alert alert-light">Шаг05</div>
            <div class="step my-1 alert alert-light">Шаг06</div>
            <div class="step my-1 alert alert-light">Шаг07</div>
            <div class="step my-1 alert alert-light">Шаг08</div>
            <div class="step my-1 alert alert-light">Шаг09</div>
            <div class="step my-1 alert alert-light">Шаг10</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Project",
        beforeCreate: function () {
            if (this.$store.getters.SELF.logged === false) this.$router.push('login');
        },
    }
</script>

<style scoped>
    .step{
        z-index: -3;
    }
</style>