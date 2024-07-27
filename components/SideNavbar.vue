<template>
    <div v-show="isVisible" class="side-navbar-wrapper">
        <div class="overlay" v-show="isVisible" @click="toggleVisibility"></div>
        <aside class="side-navbar" :class="{ 'side-navbar--visible': isVisible }">
            <div class="side-navbar__menu-icon">
                <CustomIcon icon="menu" @click="toggleVisibility" :size="20" has-cursor />
            </div>

            <div v-for="item in navbarItems" :key="item.route" @click="scrollToSection(item.route)"
                :class="{ 'is-active': activeSection === item.route }" class="side-navbar__item">
                {{ item.name }}
            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { navbarItems } from '~/types';

const rootStore = useRootStore();

const isVisible = computed({
    get: () => rootStore.showSideNavbar,
    set: (val: boolean) => rootStore.showSideNavbar = val,
})

const toggleVisibility = () => rootStore.toggleSideNavbar();

watch(isVisible, (newValue) => {
    if (newValue) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

const router = useRouter();

const isScrolled = ref(false);
const activeSection = ref<string>('');

const sectionIds = navbarItems.map(item => item.route).filter(Boolean);

const goToLoginPage = () => {
    router.push("/login")
}

const toggleSideNavbar = () => rootStore.toggleSideNavbar();

const handleScroll = () => {
    if (window.scrollY > 0) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
    updateActiveSection();
};

const scrollToSection = (sectionId: string) => {
    if (!sectionId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        activeSection.value = '';
    } else {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            activeSection.value = sectionId;
        }
    }

    isVisible.value = false;
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
    activeSection.value = currentSection ?? '';
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

$side-navbar-width: 13rem;

.side-navbar {
    background-color: $color-white;
    z-index: 20;
    box-shadow: 0px 0.25rem 0.75rem 0px #00000014;

    position: fixed;
    top: 0;
    right: -$side-navbar-width;
    height: 100vh;
    width: $side-navbar-width;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: $padding;
    padding: $padding;
    text-align: right;

    transition: right 0.3s ease-in-out;
    /* Smooth transition */

    &__menu-icon {
        padding-top: 0.36rem;
        justify-self: center;
    }

    &--visible {
        right: 0;
        /* Slide in when visible */
    }

    &__item {

        &.is-active,
        &:hover {
            color: $color-primary;
        }
    }

    @include desktop {
        display: none;
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 5;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    pointer-events: auto;
}

.overlay[style*="display: none"] {
    opacity: 0;
    pointer-events: none;
}
</style>
