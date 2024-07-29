<template>
    <div class="custom-input">
        <label :class="{ 'active': isFocused || value, 'is-error': error }" for="custom-input__inner">
            {{ label ?? placeholder }}
        </label>
        <input v-model="value" id="custom-input__inner" class="custom-input__inner" :class="{ 'is-error': error }"
            :placeholder="placeholder" :type="type" @focus="isFocused = true" @blur="isFocused = false"
            @keypress.enter="$emit('keydown', $event)" />
        <p v-if="error" class="custom-input__error">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = defineModel('value', {
    type: String,
    default: ''
});

const isFocused = ref(false);

defineProps({
    label: {
        type: String,
        default: undefined,
    },
    error: {
        type: String,
        default: undefined,
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
});

const emits = defineEmits(['keydown']);

</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

.custom-input {
    position: relative;

    label {
        background-color: white;
        position: absolute;
        top: 0;
        top: -0.5rem;
        left: 0.3rem;
        opacity: 0;

        transition: all 0.2s ease-in-out;

        font-size: 0.75rem;
        padding: 0 0.25rem;

        &.active {
            font-size: 0.6rem;
            opacity: 1;
            color: $color-primary;
        }

        &.is-error {
            color: $color-red;
        }
    }

    input {
        height: 100%;
        width: 100%;
        border: 1px solid $color-dark-grey !important;
        background-color: white !important;
        border-radius: 0.25rem !important;
        padding: 0.5rem;

        &:active,
        &:focus {
            border: 1px solid $color-primary !important;
        }

        &.is-error {
            border: 1px solid $color-red !important;

        }
    }

    &__error {
        position: absolute;
        bottom: -1.3rem;
        left: 0.25rem;

        color: $color-red !important;
        font-size: 0.7rem;
    }
}
</style>
