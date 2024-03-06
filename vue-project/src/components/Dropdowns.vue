<script setup>
    
    import {ref} from "vue"
    

    const objects = [
  { id: 1, type: 'A' },
  { id: 2, type: 'B' },
  { id: 3, type: 'C' },
  { id: 4, type: 'A' },
  { id: 5, type: 'B' },
  { id: 6, type: 'D' },
  { id: 7, type: 'A' }
];

const uniqueElements = objects.reduce((acc, obj) => {
  if (!acc.includes(obj.type)) {
    acc.push(obj.type);
  }
  return acc;
}, []);
    
const click = (item) =>{
    alert(item)
}
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
                <li @click.prevemt="click(item)" v-for="item in uniqueElements" ><a class="dropdown-item" >{{item}}</a></li>
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
        
        <input class="mennyiseg" type="number" placeholder="Mennyiség" min="1">
        
        <!--Felvesz button-->
        <button class="btn felvesz btn-success" type="button">Felvesz +</button>
  
    </div>
    </div>
</template>
<style>
    .FullDropdown{
        
        background-color: #F4EEFF;
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
        border-style: none;
        background-color: #747DAB;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .kategoria:hover{
        background-color: #506183;
        
    }
    .termeknev{
        border-style: none;
        background-color: #747DAB;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .termeknev:hover{
        background-color: #506183;
    }
    .mennyiseg{
        border-style: none;
        padding:0px 10px;
        border:#747DAB solid 5px;
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