<script setup>
    import Cart from "../components/Cart.vue"

</script>
<template>
    <div class="header">
        <h1>Shopping list web application</h1>
        <Cart class="cart"></Cart>
    </div>
</template>
<style>
    .header{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        width: 100%;
        margin-bottom: 2%;
        padding:2% 0%;
        background-color: #747DAB;
        color: white;
    }
    .cart{
        width: 3%;
        height: 3%;
        display: flex;
        align-self: center;
        justify-self: end;
        margin-left:2%;
    }
</style>