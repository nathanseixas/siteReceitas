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

const usuarioServices = {
    buscarUm
}
export default usuarioServices;