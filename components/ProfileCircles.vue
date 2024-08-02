<template>
    <div class="profile-circles">
        <div v-for="(profile, index) in profiles" :key="index" class="profile-circle"
            :style="{ left: `${index * 30}px` }">
            <img :src="profile.image" :alt="`Profile ${index + 1}`" />
        </div>
    </div>
</template>

<script setup lang="ts">

const profiles = ref([
    { image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ3MDB8MHwxfGFsbHwxfHx8fHx8fHwxNjEyNTc1MTQ1&ixlib=rb-1.2.1&q=80&w=400' },
    { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ3MDB8MHwxfGFsbHwxfHx8fHx8fHwxNjEyNTc1MTQ1&ixlib=rb-1.2.1&q=80&w=400' },
    { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ3MDB8MHwxfGFsbHwxfHx8fHx8fHwxNjEyNTc1MTQ1&ixlib=rb-1.2.1&q=80&w=400' },
    { image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ3MDB8MHwxfGFsbHwxfHx8fHx8fHwxNjEyNTc1MTQ1&ixlib=rb-1.2.1&q=80&w=400' },
    { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQ3MDB8MHwxfGFsbHwxfHx8fHx8fHwxNjEyNTc1MTQ1&ixlib=rb-1.2.1&q=80&w=400' },
]);

</script>

<style lang="scss">
$profile-icon-size: 3rem;

.profile-circles {
    position: relative;
    min-width: 11rem;
    height: $profile-icon-size;
    /* Ensures container adjusts to the content width */
    display: flex;
    align-items: center;
}

.profile-circle {
    width: $profile-icon-size;
    height: $profile-icon-size;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
    /* Optional: Adds a white border */
    background-color: #fff;
    /* Optional: Ensures the border is visible */
    box-shadow: 0 0 0 2px #fff;
    /* Optional: Adds extra border for visibility */
    position: absolute;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
