<template>
    <div class="custom-icon" :class="{ 'has-cursor': hasCursor }">
        <!-- {{ iconColor }} -->
        <component :is="`Icon${icon}`">
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
    console.log("here", `$color-${props.color}`)
    if (props.customColor) return `${props.customColor}`;

    // return `$color-${props.color}`;
    return `var(--color-${props.color})`;
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
            stroke: v-bind('iconColor');
            fill: v-bind('iconColor');
        }
    }

    &.has-cursor {
        cursor: pointer;
    }
}
</style>
