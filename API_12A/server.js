require('dotenv').config();
const express = require('express');
const cors = require('cors');
var mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DBHOST,
    user            : process.env.DBUSER,
    password        : process.env.DBPASS,
    database        : process.env.DBNAME
});

// MIDDLEWARES 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:5173")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
})
app.get('/', function (req, res) {
    res.send('Backend API from BSZC Türr István Technikum - 12.A szoftverfejlesztő');
});

app.get('/termekek', (req, res)=>{
    pool.query(`SELECT * FROM termekek`, (error, results) => {
        if (error) res.status(500).send(error);
        res.status(200).send(results);
    });
});
app.post('/shoppingList', (req, res) => {
    const { category, productname, amount, price } = req.body;
  
    
    pool.query('INSERT INTO shoppingList (category, productname, amount, price) VALUES (?, ?, ?, ?)', [category, productname, amount, price], (error, results, fields) => {
      if (error) {
        console.error("Error adding row to shopping list:", error);
        res.status(500).send(error);
      } else {
        console.log("Row added to shopping list successfully");
        res.status(201).send("Row added to shopping list successfully");
      }
    });
  });

app.get('/shoppingList', (req, res) =>{
    pool.query(`SELECT * FROM shoppingList`, (error, results) =>{
        if(error) res.status(500).send(error);
        res.status(200).send(results)
    })
})
app.delete('/shoppingList/:itemId',(req,res)=>{
    const itemId = req.params.itemId;
    
    pool.query('DELETE FROM shoppingList WHERE id = ?', [itemId], (error, results, fields) => {
        if (error) {
            console.error("Error deleting item:", error);
            res.status(500).send(error);
        } else {
            console.log("Item deleted successfully:", itemId);
            res.status(200).send(`Item with ID ${itemId} deleted successfully`);
        }
    });
})
app.put('/shoppingList/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const { amount, price } = req.body;

    pool.query('UPDATE shoppingList SET amount = ?, price = ? WHERE id = ?', [amount, price, itemId], (error, results, fields) => {
        if (error) {
            console.error("Error updating shopping list entry:", error);
            res.status(500).send(error);
        } else {
            console.log("Shopping list entry updated successfully:", itemId);
            res.status(200).send("Shopping list entry updated successfully");
        }
    });
});



app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}...`);
});