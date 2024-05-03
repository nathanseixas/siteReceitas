import { createConnection } from 'mysql2';
import dotenv from "dotenv";
dotenv.config({path:'variaveis.env'});

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3000 //3306 padrao do mysql
});

connection.connect((error)=> {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`)



});

export default connection;