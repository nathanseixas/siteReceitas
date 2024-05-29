import usuarioServices from "../services/usuarioServices.js";

    export async function criarUsuarios(req, res) {
        let json = {error: '', result:{}}

        const {nome, cpf, sexo, endereco, telefone, data_nascimento } = req.body;
        if(nome && cpf && sexo && endereco && telefone && data_nascimento ){
            let usuarios = await usuarioServices.criarUsuarios(nome, cpf, sexo, endereco, telefone, data_nascimento);
            json.result = usuarios
                
        }else {
            json.error = 'Campo nao encontrado'
        }
        return res.json(json);



    }

    export async function logarUsuario(req, res) {
        let json = {error: '', result:{}}
        const {nome, cpf} = req.body;
        let usuario = await usuarioServices.buscarUm(nome);
        if(usuario.cpf == cpf){
            json.result = usuario
        }else {
            json.error = 'Usuário nao encontrado'
        }
        return res.json(json);
    }


   
    

