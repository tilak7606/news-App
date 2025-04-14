const express = require('express');
const app = express();
require('dotenv').config();
// console.log("hey from backend")
const cors = require('cors');
app.use(cors());

console.log("hey")
app.get('/', (req, res) => {
    res.send('API is running ✅');
  });

app.get('/api/news',async function(req,res){    
    const {q} = req.query;
    const response = await fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${process.env.API_KEY}`);
    const jsonData = await response.json();
    // console.log(jsonData.articles,"from app.js")
    res.send(jsonData.articles);
})


app.listen(3000);