const express = require('express');
const router = express.Router();
const AgendamentoController = require('../controlador/ControladorAgendamento');

// Rota para criar um novo agendamento
router.post('/agendamentos', AgendamentoController.createAgendamento);

// Rota para obter todos os agendamentos
router.get('/agendamentos', AgendamentoController.getAllAgendamentos);

// Rota para obter um agendamento pelo ID
router.get('/agendamentos/:id', AgendamentoController.getAgendamentoById);

// Rota para atualizar um agendamento
router.put('/agendamentos/:id', AgendamentoController.updateAgendamento);

// Rota para deletar um agendamento
router.delete('/agendamentos/:id', AgendamentoController.deleteAgendamento);

// Rota para registrar entrada de estoque
//router.post('/agendamentos/:id/entrada', AgendamentoController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/agendamentos/:id/saida', AgendamentoController.registrarSaida);

module.exports = router;