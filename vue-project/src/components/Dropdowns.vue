<script setup>

</script>
<template>
    <div class="Title">
        <h3>Állítsd össze a bevásárlólistád!</h3>
    </div>
    <div class="Container">
        <!--Kategória-->
        <div class="dropdown">
            <button class="kategoria btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Kategória
            </button>
            <ul class="dropdown-menu">
                <!--v-for-->
                <li><a class="dropdown-item" >Valamilyen kategória</a></li>
            </ul>
        </div>

        <!--Terméknév-->
        <div class="dropdown">
            <button class="termeknev btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Terméknév
            </button>
            <ul class="dropdown-menu">
                <!--v-for-->
                <li><a class="dropdown-item" >Valamilyen terméknév</a></li>
            </ul>
        </div>
        <!--Mennyiség-->
        
        <input class="mennyiseg" type="number" placeholder="Mennyiség">
        
    
  
    </div>
</template>
<style>
    .Title{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        margin-bottom: 2%;
    }
    .Container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .kategoria{
        background-color: #6E85B7;
    }
    .kategoria:hover{
        background-color: #506183;
    }
    .termeknev{
        background-color: #6E85B7;
    }
    .termeknev:hover{
        background-color: #506183;
    }
    .mennyiseg{
        padding:0px 10px;
        border:#6E85B7 solid 5px;
        border-radius: 20px;
        outline:none;
    }
    .mennyiseg:focus, .mennyiseg:hover{
        border-color: #506183;
    }
              
    
</style>