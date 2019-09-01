<template>
    <span>

<nav class="nav" :class="is_noone()">
        <div class="brand">
            <img src="@/assets/logo.png" class="img" width="38" height="34" alt="logo">
        </div>
        <div class="menu-wrap">
        <input type="checkbox" id="toggler" class="toggler">
        <div class="hamburger"><div></div></div>
        <div class="menu">
            <div>
                <div style="overflow:auto">
                    <ul style="padding-left: 0px;">
                        <li>
                            <p class="nav-link"
                                         @click="goto('')"
                                         :class=" activeLink('/')"
                            >Main</p>
                        </li>
                        <li>
                            <p class="nav-link"
                                         @click="goto('project')"
                                         :class=" activeLink('/project')"
                            >My project</p>
                        </li>
                        <li>
                            <p class="nav-link"
                               @click="goto('chat/' + id())"
                               :class=" activeLink('/chat')"
                            >Chat</p>
                        </li>
                        <li>
                            <p class="nav-link"
                               @click="goto('coasts')"
                               :class=" activeLink('/coasts')"
                            >Coasts</p>
                        </li>
                        <li>
                            <p class="nav-link"
                               @click="goto('benefit')"
                               :class=" activeLink('/benefit')"
                            >Useful</p>
                        </li>
                        <li>
                            <p class="nav-link"
                               @click="goto('unswers')"
                               :class=" activeLink('/unswers')"
                            >FAQ</p>
                        </li>
                        <li>
                            <p class="nav-link"
                               @click="goto('works')"
                               :class=" activeLink('/works')"
                            >Our works</p>
                        </li>
                        <li>
                            <p class="nav-link"
                               @click="goto('news')"
                               :class=" activeLink('/news')"
                            >New</p>
                        </li>
                        <li>
                            <p class="nav-link"
                               @click="goto('bonuses')"
                               :class=" activeLink('/bonuses')"
                            >Bonuses</p>
                        </li>
                        <li>
                            <p class="nav-link pointer p-2" @click="logout()">Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="loading-bar" v-if="this.$store.getters.REQUEST">
            <div class="loading-elem"></div>
    </div>
</nav>

        
    </span>
</template>

<script>
    export default {
        name: "Header"
        ,
        computed: {},
        methods: {
            activeLink(path) {
                return path === this.$route.path ? 'active' : '';
            },
            is_noone() {
                return this.$route.path === '/login' ? 'none' : '';
            },
            logout() {
                this.$store.dispatch('logout');
            },
            goto(path) {
                let el = document.getElementById('toggler');
                el.checked = false;
                this.$router.push('/'+path);
            },
            id() {
                return this.$store.getters.SELF.id;
            }
        }
    }
</script>

<style scoped>

    .none {
        display: none;  
    }

    .nav-link {
        color: #d0d6d3;
    }

    .active{
        color: #ffffff;
    }

    .loading-bar {
        height: 3px;
        width: 100%;
        background: #3bd931;
    }

    .loading-elem {
        width: 30%;
        height: 3px;
        background: linear-gradient(0.45turn, #14ff04, #ffef00, #14ff04);
        animation-name: example;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }


    @keyframes example {
        0% {
            margin-left: 0%
        }
        100% {
            margin-left: 70%
        }
    }

    .menu-wrap {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 3;
    }


    .menu-wrap .toggler {
        position: absolute;
        top: 0;
        right: 12px;
        z-index: 4;
        cursor: pointer;
        width: 50px;
        height: 50px;
        opacity: 0;
    }

    .nav-link{
        cursor: pointer;
    }

    .menu-wrap .hamburger {
        position: absolute;
        top: 0;
        right: 12px;
        z-index: 3;
        width: 60px;
        height: 60px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-wrap .hamburger > div {
        position: relative;
        flex: none;
        width: 100%;
        height: 2px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
    }

    .menu-wrap .hamburger > div::before,
    .menu-wrap .hamburger > div::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 2px;
        background: inherit;
    }

    .menu-wrap .hamburger > div::after {
        top: 10px;
    }

    /* Toggler Animation */
    .menu-wrap .toggler:checked + .hamburger > div {
        transform: rotate(135deg);
    }

    /* Turns Lines Into X */
    .menu-wrap .toggler:checked + .hamburger > div:before,
    .menu-wrap .toggler:checked + .hamburger > div:after {
        top: 0;
        transform: rotate(90deg);
    }

    /* Rotate On Hover When Checked */
    .menu-wrap .toggler:checked:hover + .hamburger > div {
        transform: rotate(225deg);
    }

    /* Show Menu */
    .menu-wrap .toggler:checked ~ .menu {
        visibility: visible;
    }

    .menu-wrap .toggler:checked ~ .menu > div {
        transform: scale(1);
        transition-duration: .7s;
    }

    .menu-wrap .toggler:checked ~ .menu > div > div {
        opacity: 1;
        transition: opacity 0.4s ease 0.4s;
    }

    .menu-wrap .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-wrap .menu > div {
        background: rgba(52, 58, 64, 0.91);
        border-radius: 50%;
        width: 220vw;
        height: 220vw;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;
        z-index: 2;
    }

    .menu-wrap .menu > div > div {
        text-align: center;
        max-width: 90vw;
        max-height: 100vh;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    .menu-wrap .menu > div > div > ul > li {
        list-style: none;
        color: #fff;
        font-size: 1.5rem;
        padding: 1rem;
    }

    .menu-wrap .menu > div > div > ul > li > a {
        color: inherit;
        text-decoration: none;
        transition: color 0.4s ease;
    }

    .nav {
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        background: #343a40;
        z-index: 99;
    }

    .brand {
        width: 72px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    .pointer{
        cursor: pointer;
    }

    .menu-wrap .menu > div > div > ul > li {
        padding: 0rem;
    }

    .nav-link {
        padding: 0 0 0 0;
    }
</style>