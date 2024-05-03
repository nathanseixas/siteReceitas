
import receitaService from "../services/ReceitaServices.js";

    export async function buscarTodas(req, res) {
        let json = {error: '', result: [] };

        let receita = await receitaService.buscarTodas();


        for(let i in receita){
            json.result.push({
                codigo: receita[i].codigo,
                descrição: receita[i].modelo
            });
        }

        return res.json(json);
    }

    export async function buscarUma(req, res) {
        let json = {error: '', result:{}};
        
        let codigo = rq.params.codigo;
        let receita = await receitaService.buscarUma(codigo);

        if(receita){
            json.result = receita;
        }
        return res.json(json);
    }

    export async function inserir(req, res) {
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

