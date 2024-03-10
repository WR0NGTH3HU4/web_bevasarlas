<script setup>
import axios from 'axios'
import {ref} from "vue"
import { onMounted } from 'vue';


let Termekek =ref(null) 
let Kategoriak = ref([])
let Termeknev = ref([])
let Amount = ref('')

let NewCategory = ref(null)
let NewProduct = ref(null)
let NewAmount = ref(null)
let NewPrice = ref(null)




onMounted(async() => {
    axios.get('http://localhost:3000/termekek',{
        timeout: 5000
    })
    const res = await axios.get('http://localhost:3000/termekek');
    Termekek.value = res.data;
    console.log(res.data);
    Termekek.value.forEach((termek) => {    
        if(!Kategoriak.value.includes(termek.category)){
            Kategoriak.value.push(termek.category)
        }
    });
})
const clickCat = (item) => {
    Termeknev.value = [];

    Termekek.value.forEach((termek) => {
        if (termek.category === item) {
            Termeknev.value.push(termek.productname);
        }
    });
    NewCategory.value= item
    
}
const clickPro = (element) =>{
    
    NewProduct.value = element

}
const OnEnter = (Amount) =>{
    NewAmount.value = Amount;

    Termekek.value.forEach((termek) => {
        if (termek.category === NewCategory.value && termek.productname === NewProduct.value) {
            NewPrice.value = termek.price * Amount;
            console.log(NewPrice.value);
        }
    });


}
const AddRow = async () => {
    try {
        const response = await axios.post('http://localhost:3000/shoppingList', {
            category: NewCategory.value, 
            productname: NewProduct.value,
            amount: NewAmount.value,
            price: NewPrice.value
        });
        
        window.location.reload();
    } catch (error) {
        console.error("An error occurred while adding row:", error);
    }
};


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
                <li @click.prevent="clickCat(item)" v-for="item in Kategoriak" ><a class="dropdown-item" >{{item}}</a></li>
            </ul>
        </div>

        <!--Terméknév-->
        <div class="dropdown">
            <button class="termeknev btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Terméknév
            </button>
            <ul class="dropdown-menu">
                <!--v-for-->
                <li @click.prevent="clickPro(element)" v-for="element in Termeknev"><a class="dropdown-item" >{{element}}</a></li>
            </ul>
        </div>
        <!--Mennyiség-->
        
        <input @keydown.enter="OnEnter(Amount)" v-model="Amount" class="mennyiseg" type="number" placeholder="Mennyiség" min="1">
        
        <!--Felvesz button-->
        <button @click.prevent="AddRow" class="btn felvesz btn-success" type="button">Felvesz +</button>
  
    </div>
    <div class="ChosenStuff">
        <h5>Kategória: {{NewCategory}}</h5>
        <h5>Terméknév: {{NewProduct}}</h5>
        <h5>Mennyiség: {{NewAmount}}</h5>
    </div>
    </div>
</template>
<style>
    .ChosenStuff{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        justify-items: center ;
        align-content: center;
        align-items: center;
        background-color: #506183;
        color: white;
        margin-top: 2%;
        border-radius: 20px;
    }
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