<script setup>
    import Trash from "./Trash.vue"
    import TrashActive from "./TrashActive.vue"
    import { inject } from "vue";
    
   
    const NewRow = inject('NewRow')

</script>
<template>
    <div class="container">
        
        <ul class="head">
            <li>kategoria</li>
            <li>termeknev</li>
            <li>mennyiseg</li>
            <Trash class="headTrash"></Trash>
        </ul>
        <ul class="context">
            <li>kategoria</li>
            <li>termeknev</li>
            <li>mennyiseg</li>
            <TrashActive class="ActiveTrash"></TrashActive>
            
        </ul>
        <ul v-for="row in NewRow" :key="ID">
            <li>{{row.Category}}</li>
            <li>{{row.Productname}}</li>
            <li>{{row.Amount}}</li>
        </ul>

    </div>
</template>
<style>
    *{
        margin: 0;
        padding: 0;
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
        background-color: #A6B1E1;
        padding: 1%;
        border-radius: 20px;
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    }
    .ActiveTrash{
        width: 2%;
        height: 2%;
    }
    .ActiveTrash:hover{
        background-color: white;
        border-radius: 100%;
        padding:2px;
        box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
    }

</style>