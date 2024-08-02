<template>
    <div class="community-card">
        <div class="community-card__image">
            <img :src="item.image_url" :alt="`Community image of ${item.name}`">
        </div>

        <div class="community-card__info">
            <p class="community-card__info-name">{{ item.name }}</p>
            <p class="community-card__info-address">{{ item.address }}</p>
            <p class="community-card__info-learn-more">Learn More</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Community } from '~/types';

const props = defineProps({
    item: {
        type: Object as PropType<Community>,
        required: true,
    }
});
</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

$max-card-width: 40rem;
$max-card-image-width: 8rem;
$max-card-info-width: calc($max-card-width - $max-card-image-width);

.community-card {
    max-width: $max-card-width;
    max-height: 8.5rem;
    height: 8.5rem;

    width: 100%;

    background-color: $color-white;
    box-shadow: 0px 0.25rem 0.75rem 0px #00000014;
    border-radius: 0.5rem;

    display: flex;

    &__image {
        min-width: $max-card-image-width;
        width: $max-card-image-width;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.5rem 0 0 0.5rem;
        }
    }

    &__info {
        padding: $padding;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: $max-card-info-width;
    }

    &__info-name {
        @include truncate-with-ellipses(1);

        font-size: 1rem;
        font-weight: 500;
        color: $color-black;
    }

    &__info-address {
        @include truncate-with-ellipses(2);

        font-size: 0.875rem;
        flex: 1;
    }

    &__info-learn-more {
        font-size: 0.75rem;
        color: $color-primary;
    }
}
</style>
