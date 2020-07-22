<template>
    <header class="header bg-dark ">
        <div class="container conteudoCabecalho">
            <div class="row mt-3 my-2">

                <!-- Logotipo e o Titulo do Cabeçalho -->
                <div class="logoAndTitle col-xs-12 col-sm-12 col-md-12 col-lg-5 d-flex justify-flex-start">
                    <div class="logotipo">
                        <router-link to="/">
                            <img class="mr-2 img-fluid img-thumbnail" src="@/assets/img/logotipo.jpg" alt="Tranças e Penteados" />
                        </router-link>
                    </div>
                    <div class="titulo mt-2 col-xs-6">
                        <router-link to="/">{{ title }}</router-link> 
                    </div>
                </div>

                <!-- Campo de Busca -->
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 d-flex mt-2">
                    <form class="d-flex">
                        <div class="formSearch form-group mb-0">   
                            <input class="form-control" type="search" placeholder="Pesquise por tranças e penteados">
                        </div>
                        <button class="btn btn-success" type="submit">&#128269;</button>
                    </form>
                </div>

                <!-- Área de login com modal -->
                <div class="cadastro d-flex justify-content-flex-start col-xs-12 col-sm-12 col-md-12 col-lg-2 p-0">
                    <b-navbar toggleable="lg" type="dark">
                        <b-container>
                            <b-navbar-nav>
                                <b-nav-item-dropdown type="light" text="Acessar minha conta">
                                    <b-dropdown-item>
                                        <b-navbar-brand :to="{ name: 'login' }">
                                            <button block class="btn btn-secondary">Login</button>     
                                        </b-navbar-brand>
                                    </b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item>Não tem conta? Cadastre-se</b-dropdown-item>
                                </b-nav-item-dropdown>
                            </b-navbar-nav>
                        </b-container>
                    </b-navbar>
                </div>
            </div>
        </div>


        <!-- Links de navegação -->
        <div v-show="pageTop()"  id="scrollNavHide" class="container-fluid p-0 navegacao position-fixed">
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
       pageTop: function() {
        //    window.scroll = scroll;
           if(window.scrollY > 100) {
               document.getElementById('scrollNavHide').style.display = "none";
           } else {
               document.getElementById('scrollNavHide').style.display = "visible";
           }
       },
        mounted() {
             document.onreadystatechange = () => { 
            if (document.readyState == true) {
                    this.pageTop()
                } 
            }
        }
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

    .cadastro a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        font-family: sans-serif;
    }
    .cadastro a:hover {
        color: #fff;
        text-decoration: none;
        visibility: hidden;
    }

    form {
        width: 100%;
    }

    .formSearch {
        width: 80%;
        height: 70%;
    }

    button {
        height: 2.4rem;
    }

    .logoAndTitle a:hover {
        color: #d4cacaa8;
    }
    .cadastro a:hover {
        color: #d4cacaa8;
    }

    /* Abaixo são só media query */
    @media (max-width: 991px) { 
        .navegacao { display: none; }
    }

    @media (min-width: 361px) and (max-width: 743px), (orientation: portrait) {
        .conteudoCabecalho { border: solid #ab2eb2 1px;  }
    }

</style>