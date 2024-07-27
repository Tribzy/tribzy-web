<template>
    <CustomHeader />
    <main class="page-error">
        <section class="page-error__section">
            <template v-if="(error as any)?.statusCode === 404">
                <h1>Page Not Found.</h1>
            </template>

            <template v-else>
                <h1>Something went wrong.</h1>
            </template>

            <p class="page-error__message">
                {{ error?.message }}
            </p>
            <CustomButton @click="handleError()" has-full-width>Go Home</CustomButton>
        </section>
    </main>
    <CustomFooter />
</template>

<script lang="ts" setup>
const error = useError() as Ref<Error | null>;

const router = useRouter();

const handleError = () => {

    clearError()

    router.replace("/")

};

</script>

<style lang="scss">
.page-error {
    text-align: center;

    &__section {
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 80%;
        margin: auto;
    }
}
</style>
