<template>
    <div class="custom-icon" :class="{ 'has-cursor': hasCursor }">
        <component :is="`Icon${toTitleCase(icon)}`">
        </component>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { IconColorType } from '~/types';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: false,
        default: 16,
    },
    color: {
        type: String as PropType<IconColorType>,
        required: false,
        default: "primary",
    },
    customColor: {
        type: String,
        required: false,
        default: undefined,
    },
    hasCursor: {
        type: Boolean,
        required: false,
        default: false,
    }
});

const iconSize = computed(() => `${props.size / 16}rem`)

const iconColor = computed(() => {
    if (props.customColor) return `${props.customColor}`;

    return `$color-${props.color}`;
})

</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

$icon-size: v-bind('iconSize');

.custom-icon {
    max-height: $icon-size;
    max-width: $icon-size;
    display: inline-flex;
    align-items: center;

    svg {
        height: $icon-size;
        width: $icon-size;

        path {
            fill: v-bind('iconColor');
        }
    }

    &.has-cursor {
        cursor: pointer;
    }
}
</style>
