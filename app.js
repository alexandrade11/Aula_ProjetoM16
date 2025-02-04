const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json()); 

app.set('view engine','ejs');

app.get('/', (req, res) =>{
  let  compras = ["Maçã","Compal","Batata"];
    res.render('index', {mensagem: "A minha lista", lista: compras});
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })