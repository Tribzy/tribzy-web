<template>
    <div class="custom-rating">
        <span v-for="index in 5" :key="index" class="star">
            <i v-if="index <= fullStars" class="fas fa-star"></i>
            <i v-else-if="index === fullStars + 1 && halfStar" class="fas fa-star-half-alt"></i>
            <i v-else class="far fa-star"></i>
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    rating: {
        type: Number,
        required: true,
        validator: (value: number) => value >= 0 && value <= 5 && value % 0.5 === 0
    },

    size: {
        type: Number,
        default: 2,
    }
});

const fullStars = computed(() => Math.floor(props.rating));

const halfStar = computed(() => props.rating % 1 !== 0);

const computedFontSize = computed(() => `${props.size}rem`);

</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

.custom-rating {
    display: flex;
}

.star {
    color: $color-primary;
    margin-right: 0.25rem;
    font-size: v-bind('computedFontSize');
}
</style>
