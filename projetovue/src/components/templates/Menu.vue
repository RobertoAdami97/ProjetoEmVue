<template>
    <aside class="menu" v-show="menuVisivel">
        <b-navbar class="toggleMenu" toggleable="lg" type="light" v-if="menuVisivel">
            <b-navbar-toggle target="nav-collapse" @click="estadoMenu"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav></b-collapse>
            <div class="fechaMenu" @click="fechaMenu"></div>
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
        },
        fechaMenu() {
            document.querySelector('.toggleMenu').addEventListener('click', () => {
                document.querySelector('.fechaMenu').classList.toggle('isClose');
                this.$store.commit('estadoMenu')
            });
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
        width: 17rem;
        position: fixed;

        z-index: 10;
    }

    .fechaMenu {
        width: 50rem;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        position: fixed;
        left: 17rem;
        top: 0;
        

        z-index: 1;
    }
    .toggleMenu {
        position: relative;
        z-index: 10;
    }

    .isClose {
        display: none;
    }

    .menu.isOpen {
        display: visible;
    }   
    @media(min-width: 991px) {
        .menu {
            display: none;
        }
    }
</style>