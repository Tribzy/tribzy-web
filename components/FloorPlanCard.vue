<template>
    <div class="floor-plan-card">
        <div class="floor-plan-card__image">
            <img src="@/assets/images/floor-plan-placeholder.webp" alt="Floor Plan Placeholder">
        </div>
        <p class="floor-plan-card__price">{{ plan.price }}</p>
        <p class="floor-plan-card__type">{{ plan.type }}</p>
        <p class="floor-plan-card__details">
            <CustomIcon icon="Bed" color="grey-2" />
            {{ plan.bedrooms }} {{ pluralize(plan.bedrooms, 'Bedroom', 'Bedrooms') }}
        </p>
        <p class="floor-plan-card__details">
            <CustomIcon icon="Bathtub" color="grey-2" />
            {{ plan.bathrooms }} {{ pluralize(plan.bathrooms, 'Bathroom', 'Bathrooms') }}
        </p>
        <p class="floor-plan-card__details">
            <CustomIcon icon="Measurement" color="grey-2" />
            {{ plan.sq_ft }} Sq. Ft.
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
    background-color: var(--color-white);
    box-shadow: 0px 4px 12px 0px #00000014;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;

    padding: 1.5rem;

    min-width: 25rem;

    &__image {
        height: 10rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
        }
    }

    &__price {
        font-size: 1.5rem;
        font-weight: 600;
    }

    &__type {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    &__details {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        color: var(--color-grey-2);

        margin-bottom: 0.5rem;
    }
}
</style>
