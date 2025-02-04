const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json()); 

app.set('view engine','ejs');

app.get('/lista', (req, res) =>{
  let  compras = ["Maçã","Compal","Batata"];
    res.render('lista', {mensagem: "A minha lista", lista: compras});
})

app.get('/', (req, res) =>{
   res.render('main');
}) 

app.get('/contacts', (req, res) =>{
    res.render('contacts')
}); 

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })