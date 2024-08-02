<template>
    <main class="page-communities">
        <h1>Communities</h1>

        <div class="communities-list">
            <CommunityCard v-for="community in communitiesData.communities" :key="community.id" :item="community" />
        </div>
    </main>
</template>

<script lang="ts" setup>
import { communitiesData } from '~/types/communitites';

</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

.page-communities {
    padding: 1rem;

    h1 {
        margin-bottom: 1rem;
    }

    @include min-tablet {
        padding: calc($padding-desktop/2) $padding-desktop;
    }
}

.communities-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include tablet {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        // flex-direction: row;
        // flex-wrap: wrap;
        // gap: 1.5rem;
    }

    @include desktop {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        // flex-direction: row;
        // flex-wrap: wrap;
        // gap: 1.5rem;
    }
}
</style>
