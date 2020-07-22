<template>
  <div class="titulo-pagina">
      <div><span v-if="icon" :class="icon"></span>{{ main }}</div>
  </div>
</template>

<script>
export default {
    name: "tituloPagina",
    props: ['icon', 'titulo']
}
</script>

<style>

</style>