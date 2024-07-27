<template>
    <main class="page-login">
        <h1>We are coming soon...</h1>
        <CustomButton @click="goBack()">Go Back</CustomButton>
    </main>
</template>

<script lang="ts" setup>
const router = useRouter();

const goBack = () => {
    router.go(-1);
}

onBeforeMount(() => {
    router.replace('/work-in-progress')
})
</script>

<style lang="scss">
.page-login {
    gap: 2rem;
    text-align: center;
    padding-top: 3rem;
}
</style>
