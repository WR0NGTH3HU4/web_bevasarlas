<script setup>
    import axios from "axios";
    import Trash from "./Trash.vue"
    import TrashActive from "./TrashActive.vue"

    import { onMounted } from "vue";
    import { ref } from "vue";
    
    const shoppingList = ref()
    const FinalPrice = ref(0)
    onMounted(async () => {
        await fetchData();
        calculateFinalPrice();
    });

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/shoppingList');
            shoppingList.value = response.data;
        } catch (error) {
            console.error("Error fetching shopping list:", error);
        }
    };

    const calculateFinalPrice = () => {
        FinalPrice.value = shoppingList.value.reduce((acc, item) => acc + item.price, 0);
    };

    const deleteRow = async (itemId) => {
        try {
            const response = await axios.delete(`http://localhost:3000/shoppingList/${itemId}`);

            
            if (response.status === 200) {
                console.log("Item deleted successfully:", itemId);
                
                await fetchData();
                calculateFinalPrice();
            } else {
                console.error("Failed to delete item:", response.statusText);
            }
        } catch (error) {
            console.error("An error occurred while deleting item:", error);
        }
    };

    const updateAmount = async (item, value) => {
    const newAmount = parseInt(value);

    try {
        
        const response = await axios.get(`http://localhost:3000/shoppingList/${item.id}`);
        
        if (response.status !== 200) {
            console.error("Failed to fetch item details:", response.statusText);
            return;
        }

        const unitPrice = response.data.price;
        const totalPrice = unitPrice * newAmount; 

        
        const updateResponse = await axios.put(`http://localhost:3000/shoppingList/${item.id}`, { amount: newAmount, price: totalPrice }, {
    timeout: 5000 
});

        if (updateResponse.status !== 200) {
            console.error("Failed to update item amount and total price:", updateResponse.statusText);
        } else {
            
            item.amount = newAmount;
            item.price = totalPrice;
            console.log("Item updated successfully:", item.id);
            calculateFinalPrice(); 
        }
    } catch (error) {
        console.error("An error occurred while updating item amount and total price:", error);
    }
    await fetchData(); 
};
</script>
<template>
    <div class="container">
        
        <ul class="head">
            <li>kategoria</li>
            <li>termeknev</li>
            <li>mennyiseg</li>
            <Trash class="headTrash"></Trash>
        </ul>
        <ul class="context" v-for="item in shoppingList" :key="item.id">
            <li>{{item.category}}</li>
            <li>{{item.productname}}</li>
            <li>{{item.amount}}</li>
            <input @input="updateAmount(item, $event.target.value)" @keydown.enter="updateAmount(item, $event.target.value)" v-model="item.amount" class="mennyiseg" type="number" placeholder="Mennyiség" min="1">
            <TrashActive @click.prevent="deleteRow(item.id)" class="ActiveTrash"></TrashActive>
        </ul>
        <div class="final">
            <div class="finalPrice">
                <h5>Végösszeg: {{FinalPrice}}</h5>
            </div>
        </div>
    </div>
</template>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .final{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-content: center;
        width: 100%;
        
    }
    .finalPrice{
        background-color: #506183;
        padding: 0.5rem;
        border-radius: 10px;
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        background-color: #F4EEFF;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1%;
        border-radius: 20px;
        font-weight: 500;
        font-size: 120%;
    }
    .head{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #8D97C6;
        padding: 1%;
        border-radius: 20px;
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .headTrash{
        width: 2%;
        height: 2%;
        
    }
    .context{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #8D97C6;
        padding: 1%;
        border-radius: 20px;
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    }
    .context:nth-child(even){
        background-color:  #A6B1E1;
    }
    .ActiveTrash{
        width: 2rem;
        height: 2rem;
    }
    .ActiveTrash:hover{
        background-color: white;
        border-radius: 100%;
        padding:2px;
        box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
    }

</style>