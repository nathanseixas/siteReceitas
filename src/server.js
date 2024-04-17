require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routess');

const server = express();
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', routes);


server.listen(process.env.PORT, ()=> {
    console.log(`Servidor Rodando em: https://localhost:${process.env.PORT}`);
});

