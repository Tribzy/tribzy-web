<template>
    <nuxt-link class="community-card" :to="`/communities/${item.id}`">
        <div class="community-card__image">
            <img :src="item.image_url" :alt="`Community image of ${item.name}`">
        </div>

        <div class="community-card__info">
            <p class="community-card__info-name">{{ item.name }}</p>
            <!-- <p class="community-card__info-address">{{ item.address }}</p> -->
            <p class="community-card__info-away">
                <i class="fa fa-location-dot" aria-hidden="true" />
                <span>{{ item.distance_from_UF }} miles away from UF</span>
            </p>
            <p class="community-card__info-type">Private | Furnished</p>
            <!-- <p class="community-card__info-learn-more">Learn More</p> -->
            <CustomRating :rating="item.rating" :size="1" />
        </div>
    </nuxt-link>
</template>

<script lang="ts" setup>
import type { Community } from '~/types/communitites';

defineProps({
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
    // max-height: 8.5rem;
    // height: 8.5rem;

    width: 100%;

    background-color: $color-white;
    box-shadow: 0px 0.25rem 0.75rem 0px #00000014;
    border-radius: 0.5rem;

    display: flex;

    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 0.5rem 1rem 0px #00000014;
    }


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

        flex: 1;
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

    &__info-away {
        @include truncate-with-ellipses(1);

        font-size: 0.875rem;
        flex: 1;
        color: $color-dark-grey;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    &__info-type {
        @include truncate-with-ellipses(1);

        color: $color-dark-grey;
    }

    &__info-learn-more {
        font-size: 0.75rem;
        color: $color-primary;
    }
}

@include min-tablet {
    .community-card {
        flex-direction: column;
        min-width: 10rem;
        // width: 20rem;
        height: fit-content;
        max-width: $max-card-width;

        &__image {
            flex: none;
            width: 100%;
            height: 12rem; // Adjust this value to control the height of the image

            &,
            img {
                border-radius: 0.5rem 0.5rem 0 0;
            }
        }

        &__info {
            max-width: 100%;
        }
    }
}
</style>
