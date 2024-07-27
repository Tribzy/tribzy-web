<template>
    <button class="custom-button" :class="computedClasses">

        <CustomIcon v-if="iconLeft" :icon="iconLeft" :size="12" :color="iconColor" />

        <slot />

        <CustomIcon v-if="iconRight" :icon="iconRight" :size="12" :color="iconColor" />

    </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { ButtonType } from '~/types';

const props = defineProps({
    type: {
        type: String as PropType<ButtonType>,
        required: false,
        default: 'primary',
    },
    iconLeft: {
        type: String,
        required: false,
        default: undefined,
    },
    iconRight: {
        type: String,
        required: false,
        default: undefined,
    },
    hasFullWidth: {
        type: Boolean,
        required: false,
        default: false,
    },
    textAlign: {
        type: String as PropType<"left" | "center" | "right">,
        required: false,
        default: "center",
    }
})

const computedClasses = computed(() => {
    return {
        'is-text': props.type === 'text',
        'has-full-width': props.hasFullWidth,
        'text-left-aligned': props.textAlign === 'left',
        'text-right-aligned': props.textAlign === 'right',
    };
})

const iconColor = computed(() => props.type === 'primary' ? 'white' : 'primary')

</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

$font-size: 1rem;

button {
    background-color: $color-primary;
    color: $color-white;
    width: fit-content;

    font-size: $font-size;
    padding: $padding;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    &.has-full-width {
        width: 100%;
    }

    &.is-text {
        background-color: transparent;
        color: $color-primary;
        padding: calc($padding / 2) $padding;

        &:hover {
            background-color: transparent;
            cursor: pointer;
            color: $color-primary-hover;
        }
    }

    &.text-left-aligned {
        padding-left: 0;
    }

    &.text-right-aligned {
        padding-right: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: $color-primary-hover;
    }
}
</style>
