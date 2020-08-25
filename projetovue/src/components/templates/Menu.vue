<template>
    <aside class="menu" v-show="menuVisivel">
        <b-navbar class="toggleMenu" toggleable="lg" type="light" v-if="menuVisivel">
            <b-navbar-toggle target="nav-collapse" @click="estadoMenu"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav></b-collapse>
        </b-navbar>
    </aside>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: "Menu",
    computed: mapState(['menuVisivel']),
     methods: {
        estadoMenu() {
            this.$store.commit('estadoMenu')
        }
    }
}
</script>

<style>
    .menu {
        grid-area: menu;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        height: 100%;
        background-color: #3f3a3a;
        width: 18rem;
        position: fixed;
        z-index: 5;
    }

    .toggleMenu {
        position: relative;
    }

    @media(min-width: 991px) {
        .menu {
            display: none;
        }
    }

</style>