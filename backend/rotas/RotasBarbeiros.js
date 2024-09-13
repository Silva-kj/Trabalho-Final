const express = require('express');
const router = express.Router();
const BarbeirosController = require('../controlador/ControladorBarbeiros');

// Rota para criar um novo barbeiros
router.post('/barbeiross', BarbeirosController.createBarbeiros);

// Rota para obter todos os barbeiross
router.get('/barbeiross', BarbeirosController.getAllBarbeiross);

// Rota para obter um barbeiros pelo ID
router.get('/barbeiross/:id', BarbeirosController.getBarbeirosById);

// Rota para atualizar um barbeiros
router.put('/barbeiross/:id', BarbeirosController.updateBarbeiros);

// Rota para deletar um barbeiros
router.delete('/barbeiross/:id', BarbeirosController.deleteBarbeiros);

// Rota para registrar entrada de estoque
//router.post('/barbeiross/:id/entrada', BarbeirosController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/barbeiross/:id/saida', BarbeirosController.registrarSaida);

module.exports = router;