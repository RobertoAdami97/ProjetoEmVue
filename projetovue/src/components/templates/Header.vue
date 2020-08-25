<template>
    <header class="header">
        <b-row class="mx-0 my-2">

            <!-- Logotipo, Titulo do Cabeçalho e Navbar -->
            <b-col xs="12" sm="12" md="12" lg="5" xl="4" class="logo">
                

                <!-- NavBar que aparece só com a largura definida em media query -->
                <div class="navMenu">
                    <b-navbar toggleable="lg" type="light" v-if="!menuVisivel">
                        <b-navbar-toggle target="nav-collapse" @click="estadoMenu"></b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav></b-collapse>
                    </b-navbar>
                </div>
                <div class="tituloEsvg">
                    <div class="logotipoSvg">
                        <router-link to="/">
                            <svg>

                                    <path style="fill:#ffffff; stroke:none;" d="M0 0L0 80L15 80C9.94724 68.2741 -0.242688 55.6999 2.52161 42C5.78859 25.8087 22.1934 17.1839 27 2L28 2C24.8777 20.1333 9 29.137 9 49L10 49C10.4336 28.6451 33.9434 19.7297 34 0L0 0z"/>
                                    <path style="fill:#bfbfbf; stroke:none;" d="M34 0L34 5L35 5L34 0z"/>
                                    <path style="fill:#ffffff; stroke:none;" d="M35 0C39.0447 8.70419 37.5019 14.3796 39.4336 23C40.1807 26.3339 43.0651 28.7253 43.7677 32C44.6334 36.0343 41.9566 52.5041 39.2577 55.6674C35.1582 60.4724 27.2819 54.1261 22.1443 55.3573C14.7445 57.1305 16 74.3886 16 80L46 80L46 0L35 0z"/>
                                    <path style="fill:#404040; stroke:none;" d="M27 2L27 6L28 6L27 2z"/>
                                    <path style="fill:#000000; stroke:none;" d="M35 2C30.8796 21.6478 8.21283 29.9267 11 52L10 52C5.62377 30.7862 23.6571 23.7416 27 5L26 5C19.2976 15.8999 8.25823 24.6932 3.96605 37C-0.953423 51.1054 7.69271 66.0251 14 78L15 78C15.004 71.9633 15.2205 56.6668 23.044 55.0671C27.4504 54.1662 35.4537 59.8102 38.9722 55.3966C41.2462 52.5442 44.9204 35.5246 44.0131 31.9606C42.9937 27.9564 39.3384 25.2631 38.8434 21C38.0255 13.9575 40.6164 7.62785 35 2z"/>
                                    <path style="fill:#939393; stroke:none;" d="M37 4L38 5L37 4z"/>
                                    <path style="fill:#838383; stroke:none;" d="M38 6L39 7L38 6z"/>
                                    <path style="fill:#959595; stroke:none;" d="M24 7L25 8L24 7z"/>
                                    <path style="fill:#585858; stroke:none;" d="M33 8L34 9L33 8z"/>
                                    <path style="fill:#878787; stroke:none;" d="M23 9L24 10L23 9z"/>
                                    <path style="fill:#7f7f7f; stroke:none;" d="M39 9L39 15L40 15L39 9z"/>
                                    <path style="fill:#7d7d7d; stroke:none;" d="M25 10L26 11L25 10z"/>
                                    <path style="fill:#606060; stroke:none;" d="M32 10L33 11L32 10z"/>
                                    <path style="fill:#9f9f9f; stroke:none;" d="M31 11L32 12L31 11z"/>
                                    <path style="fill:#5e5e5e; stroke:none;" d="M21 12L22 13L21 12z"/>
                                    <path style="fill:#9f9f9f; stroke:none;" d="M24 12L25 13L24 12z"/>
                                    <path style="fill:#7a7a7a; stroke:none;" d="M20 13L21 14L20 13z"/>
                                    <path style="fill:#5a5a5a; stroke:none;" d="M30 13L31 14L30 13z"/>
                                    <path style="fill:#969696; stroke:none;" d="M19 14L20 15L19 14z"/>
                                    <path style="fill:#787878; stroke:none;" d="M29 14L30 15L29 14z"/>
                                    <path style="fill:#969696; stroke:none;" d="M28 15L29 16L28 15z"/>
                                    <path style="fill:#c4c4c4; stroke:none;" d="M39 15L39 18L40 18L39 15z"/>
                                    <path style="fill:#888888; stroke:none;" d="M21 16L22 17L21 16z"/>
                                    <path style="fill:#5c5c5c; stroke:none;" d="M20 17L21 18L20 17z"/>
                                    <path style="fill:#6f6f6f; stroke:none;" d="M15 19L16 20L15 19z"/>
                                    <path style="fill:#a8a8a8; stroke:none;" d="M19 19L20 20L19 19z"/>
                                    <path style="fill:#5a5a5a; stroke:none;" d="M25 19L26 20L25 19z"/>
                                    <path style="fill:#8b8b8b; stroke:none;" d="M14 20L15 21L14 20z"/>
                                    <path style="fill:#6d6d6d; stroke:none;" d="M18 20L19 21L18 20z"/>
                                    <path style="fill:#757575; stroke:none;" d="M24 20L25 21L24 20z"/>
                                    <path style="fill:#404040; stroke:none;" d="M38 20L38 23L39 23L38 20z"/>
                                    <path style="fill:#a7a7a7; stroke:none;" d="M13 21L14 22L13 21z"/>
                                    <path style="fill:#919191; stroke:none;" d="M23 21L24 22L23 21z"/>
                                    <path style="fill:#7c7c7c; stroke:none;" d="M16 23L17 24L16 23z"/>
                                    <path style="fill:#7a7a7a; stroke:none;" d="M39 24L40 25L39 24z"/>
                                    <path style="fill:#636363; stroke:none;" d="M10 25L11 26L10 25z"/>
                                    <path style="fill:#7f7f7f; stroke:none;" d="M9 26L10 27L9 26z"/>
                                    <path style="fill:#8a8a8a; stroke:none;" d="M14 26L15 27L14 26z"/>
                                    <path style="fill:#707070; stroke:none;" d="M19 26L20 27L19 26z"/>
                                    <path style="fill:#999999; stroke:none;" d="M18 27L19 28L18 27z"/>
                                    <path style="fill:#828282; stroke:none;" d="M41 27L42 28L41 27z"/>
                                    <path style="fill:#6a6a6a; stroke:none;" d="M8 28L9 29L8 28z"/>
                                    <path style="fill:#575757; stroke:none;" d="M12 29L13 30L12 29z"/>
                                    <path style="fill:#5c5c5c; stroke:none;" d="M16 30L17 31L16 30z"/>
                                    <path style="fill:#717171; stroke:none;" d="M43 30L44 31L43 30z"/>
                                    <path style="fill:#606060; stroke:none;" d="M11 31L12 32L11 31z"/>
                                    <path style="fill:#858585; stroke:none;" d="M15 31L16 32L15 31z"/>
                                    <path style="fill:#a8a8a8; stroke:none;" d="M44 31L45 32L44 31z"/>
                                    <path style="fill:#9a9a9a; stroke:none;" d="M5 33L6 34L5 33z"/>
                                    <path style="fill:#959595; stroke:none;" d="M13 34L14 35L13 34z"/>
                                    <path style="fill:#858585; stroke:none;" d="M4 35L5 36L4 35z"/>
                                    <path style="fill:#353535; stroke:none;" d="M12.3333 36.6667L12.6667 37.3333L12.3333 36.6667z"/>
                                    <path style="fill:#a1a1a1; stroke:none;" d="M42 36L43 37L42 36z"/>
                                    <path style="fill:#707070; stroke:none;" d="M8.33333 38.6667L8.66667 39.3333L8.33333 38.6667z"/>
                                    <path style="fill:#666666; stroke:none;" d="M42 39L43 40L42 39z"/>
                                    <path style="fill:#bfbfbf; stroke:none;" d="M8 40L8 44L9 44L8 40z"/>
                                    <path style="fill:#7f7f7f; stroke:none;" d="M2 41L2 49L3 49L2 41M42 41L43 42L42 41M41 42L42 43L41 42z"/>
                                    <path style="fill:#5e5e5e; stroke:none;" d="M8.33333 44.6667L8.66667 45.3333L8.33333 44.6667z"/>
                                    <path style="fill:#bfbfbf; stroke:none;" d="M40 47L40 52L41 52L40 47z"/>
                                    <path style="fill:#606060; stroke:none;" d="M10 48L10 52L11 52L10 48z"/>
                                    <path style="fill:#575757; stroke:none;" d="M40 52L40 55L41 55L40 52z"/>
                                    <path style="fill:#838383; stroke:none;" d="M3 53L3 56L4 56L3 53z"/>
                                    <path style="fill:#bfbfbf; stroke:none;" d="M21 54L21 55L24 55L21 54z"/>
                                    <path style="fill:#787878; stroke:none;" d="M26.6667 55.3333L27.3333 55.6667L26.6667 55.3333z"/>
                                    <path style="fill:#6b6b6b; stroke:none;" d="M30.6667 56.3333L31.3333 56.6667L30.6667 56.3333z"/>
                                    <path style="fill:#606060; stroke:none;" d="M39 56L40 57L39 56z"/>
                                    <path style="fill:#9d9d9d; stroke:none;" d="M4.33333 57.6667L4.66667 58.3333L4.33333 57.6667z"/>
                                    <path style="fill:#7f7f7f; stroke:none;" d="M34 57L34 58L39 58L34 57z"/>
                                    <path style="fill:#bfbfbf; stroke:none;" d="M18.3333 58.6667L18.6667 59.3333L18.3333 58.6667z"/>
                                    <path style="fill:#575757; stroke:none;" d="M5 60L6 61L5 60z"/>
                                    <path style="fill:#c6c6c6; stroke:none;" d="M17.3333 61.6667L17.6667 62.3333L17.3333 61.6667z"/>
                                    <path style="fill:#8a8a8a; stroke:none;" d="M6 63L7 64L6 63z"/>
                                    <path style="fill:#808080; stroke:none;" d="M16 64L16 67L17 67L16 64z"/>
                                    <path style="fill:#666666; stroke:none;" d="M7 65L8 66L7 65z"/>
                                    <path style="fill:#696969; stroke:none;" d="M15 68L15 77L16 77L15 68z"/>
                                    <path style="fill:#6d6d6d; stroke:none;" d="M9 69L10 70L9 69z"/>
                                    <path style="fill:#868686; stroke:none;" d="M10 71L11 72L10 71z"/>
                                    <path style="fill:#a5a5a5; stroke:none;" d="M11 73L12 74L11 73z"/>
                                    <path style="fill:#686868; stroke:none;" d="M13 76L14 77L13 76z"/>
                                    <path style="fill:#3f3f3f; stroke:none;" d="M15 77L16 80L15 77z"/>
                                </svg>
                        
                        </router-link>
                    </div>
                    <div class="titulo">
                        <router-link to="/">{{ title }}</router-link>
                        <router-link class="subtitulo" to="/">{{ subtitle }}</router-link>
                    </div>
                </div>

                
            </b-col>


                <!-- Campo de Busca -->
            <b-col xs="12" sm="12" md="12" lg="4" xl="5" class="campoBusca">
                <div class="divFormulario">
                    <b-form class="d-flex">
                        <label class="sr-only" for="buscar"></label>
                        <b-input id="buscar" class="form-control-lg inputBusca" placeholder="Pesquise por tranças e penteados"></b-input>
                        <b-button variant="dark" class="botao">
                            <!-- icone de lupa svg no campo de busca -->                          
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 iconeLupa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        </b-button>
                    </b-form>
                </div>
            </b-col>


                <!-- Área de login -->
            <b-col lg="3" xl="3" class="areaLogin">
                <b-navbar toggleable="sm" type="dark">
                    <b-navbar-nav>
                        <b-nav-item-dropdown type="light" text="Acessar minha conta">
                            <b-dropdown-item>
                                <b-navbar-brand class="loginDropdown text-center" :to="{ name: 'login' }">
                                    <button type="button" class="btn btn-dark btn-md btn-block">Entrar</button>     
                                </b-navbar-brand>
                            </b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item variant="dark">Não tem conta? Cadastre-se</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-navbar>
            </b-col>
        

        </b-row>


        <!-- Links de navegação -->
        <div class="navegacao">
            <nav class="navbar navbar-expand-md navbar-light bg-dark">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Home <span class="sr-only">(página atual)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Desativado</a>
                    </li>
                </ul>
            </nav>    
        </div>
    </header>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: "Header",

    props:{ 
        title: String,
        subtitle: String    
    },
    methods: {
        estadoMenu() {
            this.$store.commit('estadoMenu')
        }
    },
    computed: mapState(['menuVisivel']),

}
</script>

<style>
    .header { 
        grid-area: header;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #fcfcfc;
        z-index: 3;
    }


  
    @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
    .titulo a {
        color: #000;
        text-decoration: none;
        font-size: 2.0rem;
        font-family: 'Playball', cursive;
    }

    .titulo a:hover {
        text-decoration: none;
        color: #141414a8;
    }


    .areaLogin a {
        color: #000 !important;
        text-decoration: none;
        font-size: 1rem;
        font-family: sans-serif;
    }
    .areaLogin a:hover {
        color: #d4cacaa8;
    }

    
    .loginDropdown {
        width: 100%;
    }

    .botao {
        border-top-left-radius: 0px!important;
        border-bottom-left-radius: 0px!important;
        width: 3.5rem;
        height: 3rem;
    }

    .inputBusca {
        border-bottom-right-radius: 0px!important;
        border-top-right-radius: 0px!important;
    }


    .divFormulario {
        width: 100%;
        align-self: center;
    }

    .campoBusca {
        display: flex;
        padding: 0px!important;
        margin: 0px!important;
    }


    ::-webkit-input-placeholder {
        font-size: 1.2rem;
    }

    .iconeLupa {
        height: 1em;
    }

    .logo {
        display: flex;
    }


    .logotipoSvg {
        margin: 0.7rem .3rem 0px .3rem;
        width: 3.5rem;
        height: 5rem;
    }


    .navMenu {
        display: flex;
    }

    .subtitulo {
        display: block;
    }

    .tituloEsvg {
        display: flex;
    }




    /* Abaixo são só media query */
    @media (max-width: 991px) { 
        .navegacao, .areaLogin { display: none; }
        .divFormulario { margin: 1rem 2rem 0 2rem }
    }

    @media (min-width: 550px) and (max-width: 991px) {
        .tituloEsvg  {
            width: 100%;
            justify-content: center;
        }
    }


    @media (min-width: 992px) {
        .navMenu {  display: none;  }
        .logo { justify-content: center; }
        .areaLogin { align-self: center; }
    }

    @media (max-width: 441px) {
        .titulo > a, .subtitulo {
            font-size: 1.5rem;
        }
    }
   
</style>