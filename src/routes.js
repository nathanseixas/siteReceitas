import { Router } from 'express';
const router = Router();

import { buscarTodas, buscarUma, inserir, alterar } from './controllers/ReceitaController.js';

router.get('/receita', buscarTodas);
router.get('/receita/codigo', buscarUma);
router.post('/receita', inserir);
router.put('/receita/codigo', alterar);
//router.delete('/receita/codigo', excluir);

export default router;