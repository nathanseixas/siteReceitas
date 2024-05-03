import connection from "../db.js";

function buscarTodas() {
    return new Promise((aceito, rejeitado) => {

        connection.query('SELECT * FROM receita', (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });

    });

}
function buscarUma(codigo) {
    return new Promise((aceito, rejeitado) => {

        connection.query('SELECT * FROM  WHERE = ?', [codigo], (error, results) => {
            if (error) { rejeitado(error); return; }
            if (results.lenght > 0) {
                aceito(results[0]);
            } else {
                aceito(false);
            }
        });
    });
}
function inserir(nome, categoria) {
    return new Promise((aceito, rejeitado) => {

        connection.query('INSERT INTO receita (nome, categoria) VALUES (?, ?)', [nome, categoria], (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results.insertCodigo);

        }
        );
    });
}
function alterar(codigo) {
    return new Promise((aceito, rejeitado)=> {
        connection.query('')
    })
}
function excluir(codigo) {
    return new Promise((aceito, rejeitado)=> {
        connection.query('')
    })
}

const receitaService = {
    buscarTodas,
    buscarUma,
    inserir,
    alterar,
    excluir
}
export default receitaService;