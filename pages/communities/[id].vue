<template>
    <main class="page-community">
        <section class="page-community__details-card">
            <div class="page-community__details-card-head">
                <CustomButton icon-left="ArrowLeft"></CustomButton>

                <h2>{{ community.name }}</h2>

                <CustomButton class="page-community__join-btn page-community__join-btn--mobile">
                    Join <span class="hide-text">the Community</span>
                </CustomButton>
            </div>

            <div class="page-community__details-card-icons">
                <CustomIcon icon="Bedroom" :size="44" color="black-2" label="Private Bed, Bath" />
                <CustomIcon icon="Sofa" :size="44" color="black-2" label="Fully Furnished" />
                <CustomIcon icon="Wifi" :size="44" color="black-2" label="Free Wifi" />
                <CustomIcon icon="Parking" :size="44" color="black-2" label="Parking" />
                <CustomIcon icon="Kitchen" :size="44" color="black-2" label="Kitchen" />
                <CustomIcon icon="Washer" :size="44" color="black-2" label="Washer" />
                <CustomIcon icon="Pet" :size="44" color="black-2" label="Pet Friendly" />
                <CustomIcon icon="More" :size="44" color="black-2" label="More" />
            </div>

            <div class="page-community__details-card-data">
                <div class="page-community__details-card-data-image">
                    <img :src="community.image_url" alt="Community Image" />
                </div>

                <div class="page-community__details-card-data-details">

                    <p class="page-community__details-card-data-title">Description</p>

                    <p class="page-community__details-card-data-description">
                        {{ community.description }}
                    </p>

                    <p class="page-community__details-card-data-title">Community Surroundings</p>

                    <div class="page-community__details-card-data-surroundings">
                        <p v-for="(item, index) in community.community_surroundings" :key="item">
                            <span>{{ index }}</span>
                            <span>{{ item }}</span>
                        </p>
                    </div>
                </div>
            </div>


        </section>

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

.page-community__details-card {
    background-color: $color-white;
    padding: 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 12px 0px #00000014;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-head {
        display: flex;
        align-items: center;
        gap: 1rem;

        h2 {
            font-size: 2.5rem;
            font-weight: bold;
            flex: 1;
            margin-bottom: 0;
        }

        .custom-button {
            height: fit-content;
        }
    }

    &-icons {
        display: flex;
        gap: 1.75rem;
        flex-wrap: wrap;
        margin: 1rem 0;
    }

    &-data {
        display: flex;
        display: flex;
        gap: rem(40);
    }

    &-data-image {

        img {
            width: rem(440);
            height: rem(440);
            border-radius: rem(8);
        }
    }

    &-data-title {
        font-size: rem(20);
        font-weight: bold;
        color: black;
        margin-bottom: 0.75rem;
    }

    &-data-description {
        font-size: rem(16);
        color: $color-grey-2;
        margin-bottom: 1.5rem;
    }

    &-data-surroundings {
        font-size: rem(16);
        color: $color-grey-2;

        display: flex;
        flex-direction: column;
        gap: rem(20);

        p {
            display: flex;
            gap: rem(10);

            span:first-child {
                width: 11rem;
            }
        }
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

    min-width: 15rem;

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
    width: 100%;

    @include min-tablet {
        width: 25rem;
    }

    &--mobile {
        width: 5rem;
        height: fit-content;

        .hide-text {
            display: none;

        }

        @include min-tablet {
            width: fit-content;
            height: 100%;

            .hide-text {
                display: inline;
            }
        }
    }
}
</style>
