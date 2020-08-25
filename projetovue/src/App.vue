<template>
    <div id="app" :class="{'esconde-menu': !menuVisivel}">
        <Header title="Thay" subtitle="Tranças & Penteados" />
        <Menu />
        <Content />
        <Footer />
    </div>
</template>

<script>
import { mapState } from 'vuex';


import Header from "./components/templates/Header";
import Menu from "./components/templates/Menu";
import Content from "./components/templates/Content";
import Footer from "./components/templates/Footer";

export default {
    name: 'App',
    components: {Header, Menu, Content, Footer},
    computed: mapState(['menuVisivel']),
    
}
</script>

<style>


    @media(max-width: 991px) {
        #app {
            height: 100vh;

            display: grid;
            grid-template-rows: 9.5rem 1fr 10rem;
            grid-template-columns: 18rem 1fr;
            grid-template-areas:
                "menu header"
                "menu content"
                "menu footer";
        }
    }

    
      #app.esconde-menu {
        height: 100vh;
       
        
        display: grid;
        grid-template-rows: 9.5rem 1fr 10rem;
        grid-template-areas:
            "header header"
            "content content"
            "footer footer";
      }

</style>
