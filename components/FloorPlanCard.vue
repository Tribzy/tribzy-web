<template>
    <div class="floor-plan-card">
        <img src="" alt="">
        <p class="floor-plan-card__price">{{ plan.price }}</p>
        <p class="floor-plan-card__type">{{ plan.type }}</p>
        <p class="floor-plan-card__details">
            <CustomIcon icon="Bed" color="grey-2" />
            {{ plan.bedrooms }}
        </p>
        <p class="floor-plan-card__details">
            <CustomIcon icon="Bathtub" color="grey-2" />
            {{ plan.bathrooms }}
        </p>
        <p class="floor-plan-card__details">
            <CustomIcon icon="Measurement" color="grey-2" />
            {{ plan.sq_ft }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import type { FloorPlan } from '~/types/single';

defineProps({
    plan: {
        type: Object as PropType<FloorPlan>,
        required: true
    }
})
</script>

<style lang="scss">
.floor-plan-card {
    box-shadow: 0px 4px 12px 0px #00000014;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    padding: 1rem;

    min-width: 25rem;

    &__price {
        font-size: 1.5rem;
        font-weight: 600;
    }

    &__type {
        font-size: 1.25rem;
    }

    &__details {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-grey-2);
    }
}
</style>
