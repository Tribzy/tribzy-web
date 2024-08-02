<template>
    <main class="page-community">
        <section class="page-community__floor-plan">
            <h2>Floor Plan (Recommended)</h2>
            <div class="page-community__floor-plan-list">
                <FloorPlanCard v-for="plan in community.floor_plans" :key="plan.id" :plan="plan" />
            </div>
        </section>

        <section class="page-community__bus-numbers">
            <h2>Bus Numbers</h2>
            <div class="bus-number-card" v-for="(bus, index) in groupBusesByDestination()" :key="index">
                <CustomIcon icon="BusStop" :size="160" color="primary-2" />
                <p class="bus-number-card__details">
                    <b>{{ bus }}</b>
                    <br />
                    <span>{{ index }}</span>
                </p>
            </div>
        </section>

        <CustomButton class="page-community__join-btn">Join the Community</CustomButton>
    </main>
</template>

<script lang="ts" setup>
import { community, type BusNumber } from '~/types/single';

// I need the output to be in this format: {"from_the_campus": "12,31", "to_the_campus": "7"}
function groupBusesByDestination(): Record<string, string> {
    const busesByDestination: Record<string, string> = {};

    community.bus_numbers.forEach((bus: BusNumber) => {
        if (bus.destination in busesByDestination) {
            busesByDestination[bus.destination] += `, ${bus.route}`;
        } else {
            busesByDestination[bus.destination] = bus.route.toString();
        }
    });

    return busesByDestination;
}


</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

.page-community {
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h2 {
        margin-bottom: 1.5rem;
    }

    @include min-tablet {
        padding: calc($padding-desktop/2) $padding-desktop;
    }
}

.page-community__floor-plan-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1rem;

    @include min-tablet {
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }
}

.bus-number-card {
    background-color: $color-white;
    display: flex;

    height: 15rem;
    max-height: 15rem;
    min-height: 15rem;

    min-width: 30rem;

    border-radius: 0.5rem;

    padding: 1rem;
    padding-left: 0;

    text-align: center;

    display: flex;
    align-items: center;

    box-shadow: 0px 4px 12px 0px #00000014;

    @include min-tablet {
        max-width: 35rem;
    }
}

.bus-number-card__details {
    font-size: 2rem;

    span {
        color: $color-grey-2;
    }
}

.page-community__join-btn {
    align-self: center;
    min-width: 25rem;
}
</style>
