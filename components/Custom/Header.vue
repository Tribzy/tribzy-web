<template>
    <header :class="{ 'header-shadow-on-scroll': isScrolled }" ref="headerRef">
        <Logo />

        <div class="desktop-navbar">
            <div v-for="item in navbarItems" :key="item.route" @click="scrollToSection(item.route)"
                :class="{ 'active': activeSection === item.route }" class="desktop-navbar__item">
                {{ item.name }}
            </div>
        </div>

        <CustomButton @click="goToLoginPage()">Login</CustomButton>
        <CustomIcon icon="menu" class="header-menu-icon" has-cursor @click="toggleSideNavbar" :size="20" />
    </header>
</template>

<script lang="ts" setup>
import { navbarItems } from '~/types';
import { ref, onMounted, onUnmounted } from 'vue';

const router = useRouter();
const rootStore = useRootStore();

const isScrolled = ref(false);
const activeSection = ref<string | null>('');
const headerRef = ref(null);

const sectionIds = navbarItems.map(item => item.route).filter(Boolean);

const goToLoginPage = () => {
    router.push("/login")
}

const isNotHomePage = computed(() => router.currentRoute.value.fullPath !== '/');

watch(isNotHomePage, () => {
    updateActiveSection();
})

const toggleSideNavbar = () => rootStore.toggleSideNavbar();

const handleScroll = () => {
    if (window.scrollY > 0) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
    updateActiveSection();
};

const scrollToSection = async (sectionId: string) => {
    if (isNotHomePage.value) {
        await router.replace("/")
        return;
    }


    if (!sectionId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        activeSection.value = sectionId ?? '';
    } else {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            activeSection.value = sectionId;
        }
    }
};

const updateActiveSection = () => {
    let currentSection = null;
    for (const id of sectionIds) {
        if (!id) continue;
        const section = document.querySelector(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = id;
                break;
            }
        }
    }

    activeSection.value = isNotHomePage.value ? null : currentSection ?? '';
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    updateActiveSection(); // Update active section on initial load
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

header {
    padding: 1rem;
}

header {
    height: $header-height;
    display: flex;
    align-items: center;
    gap: $padding;
    background-color: $color-white;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    .tribzy-logo {
        display: flex;
        align-items: center;
        width: 100%;

        @include desktop {
            width: fit-content;
        }
    }

    .custom-button {
        padding: calc($padding / 2) $padding !important;
    }

    @include desktop {
        justify-content: space-between;
        padding-left: $padding-desktop;
        padding-right: $padding-desktop;
    }
}

.header-shadow-on-scroll {
    box-shadow: 0px 4px 12px 0px $color-grey;
}

.header-menu-icon {
    @include desktop {
        display: none;
    }
}

.desktop-navbar {
    display: none;

    @include desktop {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        gap: $padding * 2.5;

        &__item {
            color: $color-black;
            cursor: pointer;

            &.active {
                color: $color-primary-hover;
            }

            &:hover {
                color: $color-primary-hover;
            }
        }
    }
}
</style>
