<template>
  <div id="app">
      <Header title="Thay Penteados & Tranças"/>
      <Content />
      <Footer />
  </div>
</template>

<script>
import Header from "./components/templates/Header";
import Content from "./components/templates/Content";
import Footer from "./components/templates/Footer";

export default {
  name: 'App',
  components: {Header, Content, Footer}
}
</script>

<style>
  #app {
    height: 100vh;

    display: grid;
    grid-template-rows: 9.5rem 1fr 10rem;
    grid-template-areas:
       "header header"
       "content content"
       "footer footer";
  }

</style>
