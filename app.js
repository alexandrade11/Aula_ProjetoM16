const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json()); 

app.set('view engine','ejs');

app.get('/', (res, req) =>{
    res.render('index', {mensagem: "Olá"});
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })