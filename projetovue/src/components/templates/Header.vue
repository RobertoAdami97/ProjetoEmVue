<template>
    <header class="header bg-dark fixed-top">
        <!-- <b-container-fluid> -->
            <b-row class="mx-5 my-4">


                <!-- Logotipo e o Titulo do Cabeçalho -->
                <b-col xs="12" sm="12" md="12" lg="5" xl="4" class="logoAndTitle d-flex m-0 p-0">
                    <router-link to="/">
                        <img class="mr-2 ml-0 img-fluid img-thumbnail" src="@/assets/img/logotipo.jpg" alt="Tranças e Penteados" />
                    </router-link>
                    <div class="titulo mt-2 pl-1">
                        <router-link to="/">{{ title }}</router-link>
                    </div> 
                </b-col>


                <!-- Campo de Busca -->
                <b-col xs="12" sm="12" md="12" lg="5" xl="6" class="campoBusca d-flex mr-0 ml-0 mb-0 pl-0">
                    <form class="d-flex">
                        <div class="formSearch form-group mb-0">   
                            <input class="form-control" type="search" placeholder="Pesquise por tranças e penteados">
                        </div>
                        <button class="btn btn-success btnSearch" type="submit">&#128269;</button>
                    </form>
                </b-col>


                <!-- Área de login -->
                <b-col xs="12" sm="12" md="12" lg="2" xl="2" class="register m-0 p-0">
                    <b-navbar toggleable="sm" type="dark" class="p-0 m-0">
                        <b-navbar-nav>
                            <b-nav-item-dropdown type="light" text="Acessar minha conta">
                                <b-dropdown-item>
                                    <b-navbar-brand class="loginNavBar text-center" :to="{ name: 'login' }">
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
        <!-- </b-container-fluid> -->


        <!-- Links de navegação -->
        <div class="container-fluid p-0 navegacao">
            <nav class="navbar navbar-expand-md navbar-light bg-primary">
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

export default {
    name: "Header",
    props:{ 
        title: String,
    },
    methods: {
       
    }
}
</script>

<style>
    .header { 
        grid-area: header;
    }


    .titulo a {
        color: #fff;
        text-decoration: none;
        font-size: 1.4rem;
        font-family: sans-serif;
    }
    .titulo a:hover {
        color: #fff;
        text-decoration: none;
    }


    .register a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        font-family: sans-serif;
    }
    .register a:hover {
        color: #d4cacaa8;
    }



    form {
        width: 100%;
    }
    .formSearch {
        width: 80%;
        height: 70%;
    }
    .btnSearch {
        height: 2.4rem;
    }


    .logoAndTitle a:hover {
        color: #d4cacaa8;
    }
    

    .loginNavBar {
        width: 100%;
        height: 100%;
    }





    /* Abaixo são só media query */
    @media (max-width: 991px) { 
        .navegacao { display: none; }
    }

    @media (max-width: 991px) {
        .campoBusca { margin-top: 1rem; }
    }

    @media (max-width: 360px) {
        .titulo { margin-left: 1rem; }
    }

    /* @media (min-width: 576px) {
        .register { padding: px; }
    } */

   
</style>