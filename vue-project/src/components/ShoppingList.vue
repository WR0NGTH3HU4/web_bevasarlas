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
        console.log("Shopping list fetched:", shoppingList.value);
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

    const calculateFinalPrice = (currentPrice) => {
    try {
        // Calculate the final price by summing up the prices of all items in the shopping list
        FinalPrice.value = shoppingList.value.reduce((acc, item) => {
            const itemPrice = parseFloat(item.price); // Convert the item price to a number
            return acc + itemPrice;
        }, 0);

        // If the current price was passed, subtract it from the final price and add the new price
        if (currentPrice !== undefined) {
            FinalPrice.value += (parseFloat(item.price) - currentPrice);
        }
    } catch (error) {
        console.error("An error occurred while calculating final price:", error);
    }
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
        try {
            const originalTotalPrice = item.price / item.amount;
            console.log("Original total price:", originalTotalPrice);

            item.amount = value;
            console.log("Updated item amount:", item.amount);

            const newPrice = originalTotalPrice * value;
            console.log("New calculated price:", newPrice);

            item.price = newPrice;

            await axios.put(`http://localhost:3000/shoppingList/${item.id}`, {
                amount: item.amount,
                price: item.price
            });

            console.log("Shopping list item updated:", item);

            await fetchData();
            calculateFinalPrice();
        } catch (error) {
            console.error("An error occurred while updating amount:", error);
        }
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