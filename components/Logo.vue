<template>
    <nuxt-link class="tribzy-logo" :to="'/'">
        <img src="@/assets/images/logo.webp" alt="Tribzy Logo" />
    </nuxt-link>
</template>

<style lang="scss">
.tribzy-logo {
    cursor: pointer;

    img {
        max-height: 3rem;
    }
}
</style>
