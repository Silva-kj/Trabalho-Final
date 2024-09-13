const Barbeiros = require('../modelo/Barbeiros');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const BarbeirosController = {
    createBarbeiros: async (req, res) => {
        try {
            const novoBarbeiros = await Barbeiros.create(req.body);
            res.json(novoBarbeiros);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllBarbeiross: async (req, res) => {
        try {
            const barbeiross = await Barbeiros.findAll();
            res.json(barbeiross);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getBarbeirosById: async (req, res) => {
        try {
            const barbeiros = await Barbeiros.findByPk(req.params.id);
            if (!barbeiros) {
                return res.status(404).send('Barbeiros não encontrado');
            }
            res.json(barbeiros);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateBarbeiros: async (req, res) => {
        try {
            const barbeiros = await Barbeiros.findByPk(req.params.id);
            if (!barbeiros) {
                return res.status(404).send('Barbeiros não encontrado');
            }
            await barbeiros.update(req.body);
            res.send('Barbeiros atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteBarbeiros: async (req, res) => {
        try {
            const barbeiros = await Barbeiros.findByPk(req.params.id);
            if (!barbeiros) {
                return res.status(404).send('Barbeiros não encontrado');
            }
            await barbeiros.destroy();
            res.send('Barbeiros deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = BarbeirosController;