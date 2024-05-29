
import receitaService from "../services/ReceitaServices.js";

    export async function buscarTodas(req, res) {
        let json = {error: '', result: [] };

        let receita = await receitaService.buscarTodas();

        if(receita){
            json.result = receita;
        }

        return res.json(json);
    }

    export async function buscarUma(req, res) {
        let json = {error: '', result:{}};
        
        let codigo = req.params.codigo;
        let receita = await receitaService.buscarUma(codigo);

        if(receita){
            json.result = receita;
        }
        return res.json(json);
    }

    export async function inserir(req, res) {
        let json = {error: '', result:{}};
        
        const {nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario, imagem} = req.body;
        
        if(nome_receita && categoria && ingredientes && modo_preparo && tempo_preparo && id_usuario && imagem){
            let receita = await receitaService.inserir(nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario, imagem);
            json.result = receita 
                
        }else {
            json.error = 'Campo nao encontrado'
        }
        return res.json(json);
    }

    export async function receita_usuario(req, res) {
        let json = {error: '', result: [] };

        let codigo = req.params.codigo;

        let receita = await receitaService.receita_usuario(codigo);

        if(receita){
            json.result = receita;
        }

        return res.json(json);
    }


    export async function deletarReceitas(req, res) {
        let json = {error: '', result:{}}

        let codigo = req.params.codigo;

        let usuarioId = res.locals.usuario;
        let receita = await receitaService.buscarUma(codigo);

        if (receita.id_usuario == usuarioId){
            receitaService.excluir(codigo);
            json.result = receita;
        }else{
            json.error = 'nao foi posssivel deletar a receita, tente novamente mais tarde!'
        }
        
        return res.json(json);
    }





