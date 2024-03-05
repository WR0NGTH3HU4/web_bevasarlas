<script setup>

</script>
<template>
    <div class="FullDropdown">
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
        
        <!--Felvesz button-->
        <button class="btn felvesz btn-success" type="button">Felvesz +</button>
  
    </div>
    </div>
</template>
<style>
    .FullDropdown{
        
        background-color: #F8F9D7;
        padding:1%;
        margin:0 10% 2% 10%;
        width: 80%;
        border-radius: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
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
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .kategoria:hover{
        background-color: #506183;
        
    }
    .termeknev{
        background-color: #6E85B7;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .termeknev:hover{
        background-color: #506183;
    }
    .mennyiseg{
        padding:0px 10px;
        border:#6E85B7 solid 5px;
        border-radius: 20px;
        outline:none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .mennyiseg:focus, .mennyiseg:hover{
        border-color: #506183;
    }
    .felvesz{
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
              
    
</style>