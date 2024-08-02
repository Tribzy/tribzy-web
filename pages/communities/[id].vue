<template>
    <main class="page-community">
        <h2>Floor Plan</h2>
        <div class="page-community__floor-plan-list">
            <FloorPlanCard v-for="plan in community.floor_plans" :key="plan.id" :plan="plan" />
        </div>
        <h2>Bus Numbers</h2>
        <div class="bus-number-card">
            <CustomIcon icon="BusStop" :size="160" color="primary-2" />
            <p class="bus-number-card__details">
                <b>12, 37</b>
                <br />
                <span>to the campus</span>
            </p>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { community } from '~/types/single';

</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

.page-community {
    padding: 1rem;

    @include min-tablet {
        padding: calc($padding-desktop/2) $padding-desktop;
    }
}

.page-community__floor-plan-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1rem;
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

    box-shadow: 0px 4px 12px 0px #00000014;
}

.bus-number-card__details {
    font-size: 2rem;

    span {
        color: $color-grey-2;
    }
}
</style>
