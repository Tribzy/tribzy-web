export const useRootStore = defineStore("root", () => {

    const showSideNavbar = ref(false)

    const toggleSideNavbar = () => showSideNavbar.value = !showSideNavbar.value

    return {
        showSideNavbar,
        toggleSideNavbar,
    }
});
