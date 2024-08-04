<template>
    <main class="page-index">
        <!-- HERO SECTION -->
        <section class="page-index__hero">
            <div class="page-index__hero-content">
                <h1>
                    <span>Find your Tribe</span>
                    <span>Easily with Tribzy</span>
                </h1>
                <div class="page-index__hero-content-text">
                    Find the perfect place to live and connect with like minded people.
                </div>
                <CustomButton @click="scrollToHowItWorks()">Get Started</CustomButton>
                <div class="page-index__customers-review">
                    <ProfileCircles />
                    <div class="page-index__customers-review-rating">
                        <CustomRating :rating="4.5" />
                        <div><b>29</b> users already saved their time</div>
                    </div>
                </div>
            </div>
            <div class="page-index__hero-image">
                <img src="@/assets/images/hero-new.webp" alt="Hero Image for Tribzy" />
            </div>
        </section>

        <!-- How it works -->
        <section id="how-it-works" class="page-index__how-it-works">

            <h2>How It Works</h2>
            <p>Easily find your Home, Community, and Friends with Tribzy</p>

            <div class="page-index__how-it-works-tiles">
                <div v-for="(item, index) in howItWorks" :key="item.id" class="page-index__how-it-works-tile-item">
                    <template v-if="item.url">
                        <div class="page-index__how-it-works-tile-item-img">
                            <img :src="getHowItWorksImageUrl(item.url)" :alt="item.name" />
                        </div>
                        <p class="page-index__how-it-works-tile-item-text">{{ item.name }}</p>
                        <p class="page-index__how-it-works-tile-item-index">{{ item.id }}</p>
                    </template>

                    <img v-else class="page-index__connecting-dots" :class="{ 'z-rotation': index % 2 === 0 }"
                        src="@/assets/images/how-it-works/connecting-dots.svg" alt="Connecting Dots" />
                </div>
            </div>
        </section>

        <!-- Features -->
        <section id="features" class="page-index__features">

            <h2>Features</h2>
            <p>Discover the key features that make Tribzy your ultimate housing solution</p>

            <div class="page-index__features-cards">
                <div v-for="item in features" :key="item.id" class="page-index__features-card-item">
                    <div class="page-index__features-card-item-img">
                        <img :src="getFeaturesImageUrl(item.img_url_path)" :alt="item.title" />
                    </div>
                    <p class="title">{{ item.title }}</p>
                    <p class="description">{{ item.description }}</p>
                    <!--<ul class="points">
                        <li v-for="point in item.points">{{ point }}</li>
                    </ul>-->
                </div>
            </div>
        </section>

        <!-- Join us -->
        <section id="join-us" class="page-index__join-us">
            <div class="page-index__join-us-img">
                <img src="@/assets/images/join-us.webp" alt="Join US Image">
            </div>
            <div class="page-index__join-us-content">
                <h1>Ready to Join Our Tribe?</h1>
                <p>Join Tribzy Today and Start Your Journey to find the <span>Perfect Community.</span></p>
                <div v-if="!rootStore.formSubmitted && !isLoading" class="page-index__join-us-form">
                    <CustomInput v-model:value="email" type="email" placeholder="Enter your email"
                        :error="isEmailWrong ? 'Please enter a valid email' : undefined" @keydown="joinWaitlist()" />
                    <CustomButton @click="joinWaitlist()">Join waitlist</CustomButton>
                </div>
                <div v-else-if="isLoading" class="loader">
                </div>
                <div v-else-if="rootStore.formSubmitted && !isLoading" class="page-index__join-us-form-success-text">
                    <span v-if="responseString && responseString?.trim() !== ''">
                        {{ responseString }}
                    </span>
                    <span v-else>
                        🎉🎉🎉
                        <br>
                        You have successfully joined the waitlist. We will notify you once we are ready to launch.
                    </span>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
import { features, howItWorks } from '~/types';

const router = useRouter();

const rootStore = useRootStore();

const isLoading = ref<boolean>(false);

const responseString = ref<string>();

const goToCommunitiesListPage = () => {
    router.push("/communities")
}

const getHowItWorksImageUrl = (url: string) => getLocalDynamicImageUrl("images/how-it-works", url + '.webp')

const getFeaturesImageUrl = (url: string) => getLocalDynamicImageUrl("images/features", url + '.svg')

const scrollToHowItWorks = () => {
    navigateTo("https://tribzyco-demo.web.app/", { external: true })
    //    const section = document.querySelector("#how-it-works");
    // if (section) {
    //     section.scrollIntoView({ behavior: 'smooth' });
    // }
}

const email = ref<string>("");

const isEmailWrong = ref<boolean>(false);

watch(email, (newVal) => {
    if (!newVal) {
        isEmailWrong.value = false;
        return;
    }
    // regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    isEmailWrong.value = !emailRegex.test(newVal);
})

const joinWaitlist = async () => {
    if (!email.value || isEmailWrong.value) {
        return;
    }

    try {

        isLoading.value = true;

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const res = await $fetch('/api/subscribe', {
            method: 'POST',
            body: {
                email: email.value,
            },
        })

        isLoading.value = false;

        console.log("res: ", res)

        if (!res.success) {
            if ((res as any).data.errorResponse.code === 11000) {
                responseString.value = "🚨 You have already joined the waitlist.";
            } else {
                responseString.value = "🚨 Something went wrong. Please try again later or drop an email at tribzyco@gmail.com";
            }
        }

        rootStore.setFormSubmitted(true);

    } catch (error) {
        console.error('Error:', error)
    }
}

// const getSubscribersList = async () => {
//     try {
//         const data = await $fetch('/api/subscribers', {
//             method: 'GET',
//         })
//         console.log('Success:', data)
//     } catch (error) {
//         console.error('Error:', error)
//     }
// }

// onMounted(() => {
//     getSubscribersList();
// })

</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

.page-index {
    padding: 0;

    &__hero {
        // background-color: $color-primary-bg;
        // background-color: $color-primary-bg;
        padding-left: $padding;

        min-height: calc(100vh - $header-height);

        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        p {
            font-size: 1.25rem;
            font-weight: 600;
            text-align: center;

            br {
                display: none;
            }

            @include min-tablet {
                br {
                    display: block;
                }
            }
        }

        @include tablet {
            padding-left: calc($padding-desktop / 3);
            flex-direction: row;
        }

        @include desktop {
            padding-left: $padding-desktop;
            flex-direction: row;
        }
    }

    &__hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: $padding * 2.5;

        .custom-button {
            min-width: 12rem;
        }

        @include min-tablet {
            align-items: flex-start;
            flex: 1;

            h1 {
                display: flex;
                flex-direction: column;
            }
        }
    }

    &__hero-content-text {
        font-size: 1.5rem;
        text-align: center;
        color: $color-dark-grey;

        @include min-tablet {
            text-align: left;
        }
    }

    &__hero-image {
        min-width: 10rem;
        max-width: 30rem;
        // width: 50rem;
        margin: 0 1rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.5rem 0 0 0.5rem;
        }

        @include tablet {
            min-width: 20rem;
            max-width: 25rem;
        }

        @include desktop {
            min-width: 20rem;
            max-width: 30rem;
        }

        @include large-desktop {
            min-width: 25rem;
            max-width: 40rem;
        }
    }

    &__how-it-works,
    &__features {
        background-color: $color-primary-bg;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: $padding-desktop $padding * 4;

        p {
            color: $color-dark-grey;
        }
    }

    // &__how-it-works-tiles,
    // &__features-cards {
    &__how-it-works-tiles {
        margin-top: $padding * 3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.75rem;

        @include min-tablet {
            flex-direction: row;
        }
    }

    &__how-it-works-tile-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $padding;

        &-img {
            height: 12rem;
            max-height: 20rem;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                width: auto;
            }
        }


        &-text {
            font-size: 1.25rem;
            // font-weight: 500;
            color: $color-black !important;
            min-width: fit-content;
        }

        &-index {
            margin-top: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $color-white;
            color: $color-primary !important;

            font-size: 1.25rem;
            font-weight: bold;

            height: 4rem;
            width: 4rem;

            box-shadow: 0px 4px 16px 0px #0000001F;

            border-radius: 50%;
        }

        .page-index__connecting-dots {
            flex-shrink: 1;
            margin-top: 4rem;
            flex-basis: 1rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &:nth-last-child(2) .page-index__connecting-dots {
            margin-top: 8rem;
            transform: rotate3d(1, 0, 0, 180deg);
        }
    }

    &__features {
        background: transparent;
    }

    &__features-cards {
        margin-top: $padding * 2;
        display: flex;
        flex-direction: column;
        gap: $padding;

        @include min-tablet {
            display: grid;
            grid-template-columns: 1fr;
            column-gap: 1rem;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    &__features-card-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: $padding;
        box-shadow: 0px 4px 12px 0px #00000014;
        text-align: left;
        padding: 2rem;
        background-color: $color-white;

        border-radius: $padding;

        border: 1px solid transparent;
        transition: all 0.3s;

        min-width: 13rem;

        .title {
            font-size: 1.5rem;
            font-weight: 600;
            color: $color-black;
        }

        .description {
            color: $color-dark-grey;
            text-align: center;
            font-size: 0.875rem;
        }

        .points {
            color: $color-dark-grey;
        }

        &:hover {
            border: 1px solid $color-primary;
            cursor: default;
            transform: scale(1.01);
            box-shadow: 0px 4px 12px 0px $color-primary-bg;

            // background-color: $color-primary;

            // .title,
            // .points {
            //     color: $color-white !important;
            // }

            // img {
            //     color: $color-white;
            // }
        }

        @include min-tablet {
            height: 30rem;
            max-height: 30rem;
        }
    }

    &__join-us {
        padding-top: 0 !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        @include min-tablet {
            flex-direction: row;
        }
    }

    &__join-us-img {
        max-width: 36rem;

        img {
            height: 100%;
            width: 100%;
        }
    }

    &__join-us-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        p {
            color: $color-dark-grey;
            text-align: center;
        }

        // .custom-button {
        // min-width: 15rem;
        // }

        @include min-tablet {
            align-items: flex-start;

            p {
                text-align: left;
            }
        }
    }

    &__join-us-form {
        display: flex;
        gap: 1rem;
        max-height: 2.5rem;
        width: 100%;

        .custom-input {
            flex: 1;
        }
    }

    &__join-us-form-success-text {
        color: $color-green !important;
        text-align: center;

        @include min-tablet {
            text-align: left;
        }
    }
}

.page-index__customers-review {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    &-rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;

        .custom-rating .star {
            font-size: 1rem;
        }

        @include min-tablet {
            justify-content: flex-start;
            align-items: flex-start;
        }
    }

    @include min-tablet {
        justify-content: flex-start;
    }
}


h1 {
    @include min-tablet {
        font-size: 3rem;
        text-align: left;
    }
}

h2 {
    @include min-tablet {
        font-size: 2.5rem;
    }
}

#how-it-works,
#features,
#join-us {
    padding: $padding * 2 $padding;

    @include min-tablet {
        padding: $padding * 4 $padding-desktop;
    }
}

$loader-size: 5rem;

.loader {
    min-height: $loader-size;
    min-width: $loader-size;
    width: $loader-size;
    height: $loader-size;
    border-radius: 50%;

    border: 0.5rem solid $color-primary-bg;
    border-top: 0.5rem solid $color-primary;

    animation: spin 2s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

// .page-index__connecting-dots {
//     margin-top: 5rem;

//     &.z-rotation {
//         transform: rotate3d(1, 0, 0, 180deg);
//     }
// }
</style>
