import usuarioServices from "../services/usuarioServices.js";

export default async function validarUsuario(req, res ,next){
    const { nome, cpf } = req.headers;
    console.log(nome, cpf)
    let usuario = await usuarioServices.buscarUm(nome);
    console.log(usuario)
    console.log(usuario.cpf == cpf)//usar trim pra remover as aspas
    if(usuario.cpf == cpf){
        res.locals.usuario = usuario.id
        next();
    }
    else{console.log("usuario nao encontrado")}
}