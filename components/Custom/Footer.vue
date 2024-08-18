<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="quick-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div class="quick-links">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i> Linkedin</a></li>
                    <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                </ul>
            </div>
            <div class="quick-links">
                <h4>Other Links</h4>
                <ul class="footer-links">
                    <li><a href="#">Community Standards</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2024 Tribzy. All rights reserved.</p>
            <ul class="footer-links">
                <li><a href="#">Community Standards</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Cookie Policy</a></li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
// No specific script needed for this component
</script>

<style lang="scss">
@use '@/assets/scss/abstracts/index.scss' as *;

.footer {
    background-color: $color-black;
    color: $color-white;
    padding: $padding * 2 $padding;
    font-weight: 300;

    &-content {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        h4 {
            margin-bottom: 10px;
        }

        ul {
            list-style-type: none;
            padding: 0;

            li {
                margin-bottom: 10px;

                a {
                    color: $color-grey;
                    text-decoration: none;

                    &:hover {
                        color: $color-white;
                    }
                }
            }
        }
    }

    &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid $color-dark-grey;

        text-align: center;

        p {
            padding-top: 1rem;
            margin: auto;
        }

        .footer-links {
            display: none;
            list-style-type: none;
            padding: 0;

            li {
                margin-left: 10px;

                a {
                    color: $color-grey;
                    text-decoration: none;

                    &:hover {
                        color: $color-white;
                    }
                }

                &:not(:last-child)::after {
                    content: "|";
                    color: $color-dark-grey;
                    margin-left: 0.5rem;
                }
            }

        }

        @include desktop {
            p {
                margin: 0;
            }

            .footer-links {
                display: flex;
            }
        }
    }

    .social-media {
        align-self: flex-end;

        ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-direction: column;

            li {
                margin-right: 1rem;

                a {
                    color: $color-grey;
                    text-decoration: none;

                    &:hover {
                        color: $color-white;
                    }
                }
            }
        }
    }

    @include min-tablet {
        padding: $padding * 4 $padding-desktop;
    }
}

.quick-links {
    flex: 1;
}

.other-links {
    @include desktop {
        display: flex;
    }
}
</style>
