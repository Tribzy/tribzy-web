<template>
    <main class="page-login">
        <section class="page-login__soon">
            <h1>Work in progress...</h1>
            <CustomButton @click="goBack()" has-full-width>Go Back</CustomButton>
        </section>
    </main>
</template>

<script lang="ts" setup>
const router = useRouter();

const goBack = () => {
    router.go(-1);
}
</script>

<style lang="scss">
.page-login {
    text-align: center;

    &__soon {
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 80%;
        margin: auto;
    }
}
</style>
