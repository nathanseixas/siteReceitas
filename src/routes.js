import { Router } from 'express';
const router = Router();

import { buscarTodas, buscarUma, inserir, alterar, receita_usuario } from './controllers/ReceitaController.js';
import validarUsuario from './middlewares/token.js';
import { criarUsuarios } from './controllers/usuarioController.js';

router.get('/receita', buscarTodas);
router.get('/receita/:codigo', buscarUma);
router.post('/receita', inserir);
router.get('/receita/usuario/:codigo', receita_usuario);
router.post('/usuario', criarUsuarios);
//router.put('/receita/:codigo', alterar);
router.delete('/receita/:codigo', validarUsuario);

export default router;