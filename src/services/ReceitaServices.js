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

        connection.query('SELECT * FROM receita WHERE id = ?', [codigo], (error, results) => {
            if (error) { rejeitado(error); return; }
            if (results.length > 0) {
                aceito(results[0]);
            } else {
                aceito(false);
            }
        });
    });
}
function inserir(nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario) {
    return new Promise((aceito, rejeitado) => {

        connection.query('INSERT INTO receita (nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario) VALUES (?, ?, ?, ?, ?, ?)',
            [nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario], (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        }
        );
    });
}
function receita_usuario(codigo) {
    return new Promise((aceito, rejeitado) => {

        connection.query('SELECT * FROM receita WHERE id_usuario = ?', [codigo], (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });

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
    receita_usuario,
    alterar,
    excluir
}
export default receitaService;