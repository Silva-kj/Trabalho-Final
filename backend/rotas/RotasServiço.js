const express = require('express');
const router = express.Router();
const ServicoController = require('../controlador/ControladorServico');

// Rota para criar um novo servico
router.post('/servicos', ServicoController.createServico);

// Rota para obter todos os servicos
router.get('/servicos', ServicoController.getAllServicos);

// Rota para obter um servico pelo ID
router.get('/servicos/:id', ServicoController.getServicoById);

// Rota para atualizar um servico
router.put('/servicos/:id', ServicoController.updateServico);

// Rota para deletar um servico
router.delete('/servicos/:id', ServicoController.deleteServico);

// Rota para registrar entrada de estoque
//router.post('/servicos/:id/entrada', ServicoController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/servicos/:id/saida', ServicoController.registrarSaida);

module.exports = router;