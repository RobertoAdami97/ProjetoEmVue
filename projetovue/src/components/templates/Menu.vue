<template>
    <aside class="menu" v-show="menuVisivel">
        <b-row class="menu-header" v-if="menuVisivel">
            <b-col class="seta-svg" xs="3" md="3">
                <svg @click="estadoMenu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class="seta-meu">
                    <g>
                        <path xmlns="http://www.w3.org/2000/svg" d="m54 30h-39.892l15.272-14.552c.799-.762.83-2.028.068-2.828-.762-.798-2.027-.831-2.828-.068l-17.445 16.625c-.758.758-1.175 1.761-1.175 2.823s.417 2.063 1.21 2.858l17.41 16.59c.387.369.884.552 1.38.552.528 0 1.055-.208 1.448-.62.762-.8.731-2.065-.068-2.828l-15.341-14.552h39.961c1.104 0 2-.896 2-2s-.896-2-2-2z" fill="#ffffff" data-original="#012e52" />
                    </g>
                </svg>
            </b-col>
            <b-col class="minha-conta">
                <b-row>
                    <span class="texto-visitante">Olá Visitante</span>
                </b-row>
                <b-row>
                    <router-link class="link-login" :to="{ name: 'login' }"><b>MINHA CONTA <span class="icone-direita">&#65515;</span></b></router-link>
                    <div class="fechaMenu" @click="fechaMenu"></div>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <ul class="ul-menu">
                <li class="li-menu">
                    <router-link :to="{ name: 'tranças' }">
                        <div v-b-toggle.tranca-tipo class="menu-trancas">
                            Tranças
                            <span>
                                <svg class="seta-baixo" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
                                xml:space="preserve">
                                <g>
                                    <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                </svg>
                            </span>
                            <b-collapse id="tranca-tipo">
                                <div class="link-tipo-tranca">Tipos de Tranças</div>
                            </b-collapse>
                            
                        </div>
                    </router-link>
                </li>
            </ul>
        </b-row>
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
        height: 5rem;
        width: 17.98rem;
    }

    .seta-meu {
        cursor: pointer;
        width: 3rem;
        height: 3rem;
    }

    .seta-svg {
        margin: 1rem 0 0 .5rem;
    }

    .texto-visitante {
        font-size: 1rem;
        color: #fff;
        margin: 1rem 0 0 0;
    }

    .minha-conta {
        font-size: 1.1rem;
        color: #fff;
    }

    .seta-baixo {
        width: 1rem;
        height: 1rem;
        float: right;
        margin-top: .5rem;
    }

    .ul-menu {
        list-style-type: none;
        width: 100%;
        margin: 1rem 0 2rem 2rem;
        padding: 0;
    }

    .li-menu {
        width: 90%;
    }

    .li-menu > a {
        color: #000!important;
        text-decoration: none!important;
    }

    .menu-trancas {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.3rem;
        width: 15rem;
    }

    .link-tipo-tranca {
        font-size: 1rem;
        margin-left: 1rem;
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