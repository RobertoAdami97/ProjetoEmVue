<template>
    <div class="footer">
        <span class="text-muted text-center">Rodapé</span>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer {
        grid-area: footer;

        border: solid 1px #e3e3;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>