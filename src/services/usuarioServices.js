import connection from "../db.js";

function buscarUm(nome) {
    return new Promise((aceito, rejeitado) => {

        connection.query('SELECT * FROM usuarios WHERE nome = ?', [nome], (error, results) => {
            if (error) { rejeitado(error); return; }
            if (results.length > 0) {
                aceito(results[0]);
            } else {
                aceito(false);
            }
        });
    });
}

function criarUsuarios(nome, cpf, sexo, endereco, telefone, data_nascimento) {
    return new Promise((aceito, rejeitado)=> {
        connection.query('INSERT INTO usuarios (nome, cpf, sexo, endereco, telefone, data_nascimento) VALUES (?,?,?,?,?,?)', 
        [nome, cpf, sexo, endereco, telefone, data_nascimento], (error, results)=>{
            if(error) {rejeitado(error); return;}
            aceito(results);


    });
    });

}

const usuarioServices = {
    buscarUm,
    criarUsuarios
}
export default usuarioServices;