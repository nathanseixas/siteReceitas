
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
        
        const {nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario} = req.body;
        
        if(nome_receita && categoria && ingredientes && modo_preparo && tempo_preparo && id_usuario ){
            let receita = await receitaService.inserir(nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario);
            json.result = receita 
                
        }else {
            json.error = 'Campos nao encontrado'
        }
        return res.json(json);
    }

    export async function alterar(req, res) {
        let json = {error: '', result:{}};

        
        let nome = rq.body.nome;
        let categoria = rq.body.categoria;
        
        if(nome && categoria ){
            let receita = await receitaService.inserir(codigo);
            json.result = {
                codigo: ReceitaCodigo,
                nome,
                categoria
            };
        }else {
            json.error = 'Campos nao encontrado'
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



