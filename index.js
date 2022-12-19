const path = require('path')
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5500;

const app = express();

//Recebendo dados da requisição
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Definindo pasta static
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`Servidor aberto na porta ${port}`))