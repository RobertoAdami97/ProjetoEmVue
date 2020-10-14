<template>
    <aside class="menu" v-show="menuVisivel">
        <div class="menu-header" v-if="menuVisivel">
            <div class="seta-svg">
                <svg @click="estadoMenu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class="seta-meu">
                    <g>
                        <path xmlns="http://www.w3.org/2000/svg" d="m54 30h-39.892l15.272-14.552c.799-.762.83-2.028.068-2.828-.762-.798-2.027-.831-2.828-.068l-17.445 16.625c-.758.758-1.175 1.761-1.175 2.823s.417 2.063 1.21 2.858l17.41 16.59c.387.369.884.552 1.38.552.528 0 1.055-.208 1.448-.62.762-.8.731-2.065-.068-2.828l-15.341-14.552h39.961c1.104 0 2-.896 2-2s-.896-2-2-2z" fill="#ffffff" data-original="#012e52" />
                    </g>
                </svg>
                <span class="texto-visitante">
                    <a>Olá Visitante</a>
                </span>
                <div class="minha-conta">
                    <router-link class="link-login" :to="{ name: 'login' }"><b>MINHA CONTA <span class="icone-direita">&#65515;</span></b></router-link>
                </div>
            </div>
            <div class="fechaMenu" @click="fechaMenu"></div>
        </div>
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
            document.querySelector('.menu-header').addEventListener('click', () => {
                document.querySelector('.menu-header').classList.toggle('isClose');
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
        background-color: #fff;
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
    .menu-header {
        background-color: #080808;
    }

    .seta-meu {
        cursor: pointer;
        width: 3rem;
        height: 3rem;
        margin: 1.5rem .5rem 0 .5rem;
    }

    .seta-svg {
        height: 7rem;
    }

    .texto-visitante {
        font-size: 2rem;
        color: #fff;
    }

    .minha-conta {
        margin: 0 0 0 4rem;
        font-size: 1.3rem;
        color: #fff;
    }

    .link-login {
        text-decoration: none!important;
        color: #fff!important;
    }

    .icone-direita {
        color: #fff;
        height: 1rem;
        width: 1rem;
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