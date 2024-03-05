<script>

</script>
<template>
    <div class="container">
        
        <ul class="head">
            <li>kategoria</li>
            <li>termeknev</li>
            <li>mennyiseg</li>
        </ul>
        <ul class="context">
            <li>kategoria</li>
            <li>termeknev</li>
            <li>mennyiseg</li>
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
        background-color: #F8F9D7;
        
        padding: 1%;
        border-radius: 20px;
    }
    .head{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #B2C8DF;
        padding: 1%;
        border-radius: 20px;
    }
    .context{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #C4D7E0;
        padding: 1%;
        border-radius: 20px;
    }


</style>