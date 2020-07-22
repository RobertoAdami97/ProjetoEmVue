<template>
    <div class="links">
        <div class="row col-12">
            <router-link to="/">
                <span class="inicio">inicio</span>
            </router-link>
            <router-link to="/">
                <span class="cadastro">Cadastre-se</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Paginas"
}
</script>

<style>
    .inicio {
        color: #000;
        text-decoration: none;
    }

    .inicio a:hover {
        text-decoration: none;
    }
    
    .cadastro {
        color: #000;
        text-decoration: none;
    }

    .inicio a:hover {
        text-decoration: none;
    }
</style>