export const useRootStore = defineStore("root", () => {

    const showSideNavbar = ref(false)

    const toggleSideNavbar = () => showSideNavbar.value = !showSideNavbar.value

    const formSubmitted = ref(false)

    const setFormSubmitted = (value: boolean) => formSubmitted.value = value

    return {
        showSideNavbar,
        toggleSideNavbar,
        formSubmitted,
        setFormSubmitted,
    }
});
