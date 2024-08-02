<template>
    <main class="page-community">
        <h1>Bus Numbers</h1>
        <div class="bus-number-card">
            <CustomIcon icon="BusStop" :size="160" color="primary-bg" />
            12, 37
            <br>
            to the campus
        </div>
    </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

.page-community {
    padding: 1rem;

    @include min-tablet {
        padding: calc($padding-desktop/2) $padding-desktop;
    }
}

.bus-number-card {
    background-color: $color-white;
    display: flex;

    height: 15rem;
    max-height: 15rem;
    min-height: 15rem;

    width: 35rem;
    max-width: 35rem;
    min-width: 35rem;

    border-radius: 0.5rem;

    padding: 1rem;
    padding-left: 0;

    text-align: center;

    display: flex;
    align-items: center;
}
</style>
