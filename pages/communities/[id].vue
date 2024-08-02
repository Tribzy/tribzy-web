<template>
    <main class="page-community">
        D
        <i class="fa fa-wifi"></i>
        <i class="fa fa-bedroom"></i>
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
</style>
