import express from 'express';
import cors from 'cors';
import pkg from 'body-parser';
const { urlencoded } = pkg;
import router from './routes.js';

const server = express();

server.use(cors({origin: '*'}));
server.use(urlencoded({extended: false}));
server.use(express.json({limit: '10mb'}));
server.use('/api', router);

server.listen(process.env.PORT, ()=> {
    console.log(`Servidor Rodando em: https://localhost:${process.env.PORT}`);
});

