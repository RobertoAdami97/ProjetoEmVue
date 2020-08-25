<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'Content',
}
</script>

<style>
    .content {
        grid-area: content;

        display: flex;
        margin: 1.2rem 0 1.2rem 0.5rem;
        top: 10rem;
        position: absolute;
        z-index: 0;
    }
</style>