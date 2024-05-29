import { Router } from 'express';
const router = Router();

import { buscarTodas, buscarUma, inserir, receita_usuario, deletarReceitas } from './controllers/ReceitaController.js';
import validarUsuario from './middlewares/token.js';
import { criarUsuarios, logarUsuario } from './controllers/usuarioController.js';

router.get('/receita', buscarTodas);
router.get('/receita/:codigo', buscarUma);
router.post('/receita', inserir);
router.get('/receita/usuario/:codigo', receita_usuario);
router.post('/usuario', criarUsuarios);
router.post('/login', logarUsuario);
router.delete('/receita/:codigo', validarUsuario, deletarReceitas);

export default router;