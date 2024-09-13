const Agendamento = require('../modelo/Agendamento');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const AgendamentoController = {
    createAgendamento: async (req, res) => {
        try {
            const novoAgendamento = await Agendamento.create(req.body);
            res.json(novoAgendamento);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllAgendamentos: async (req, res) => {
        try {
            const agendamentos = await Agendamento.findAll();
            res.json(agendamentos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAgendamentoById: async (req, res) => {
        try {
            const agendamento = await Agendamento.findByPk(req.params.id);
            if (!agendamento) {
                return res.status(404).send('Agendamento não encontrado');
            }
            res.json(agendamento);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateAgendamento: async (req, res) => {
        try {
            const agendamento = await Agendamento.findByPk(req.params.id);
            if (!agendamento) {
                return res.status(404).send('Agendamento não encontrado');
            }
            await agendamento.update(req.body);
            res.send('Agendamento atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteAgendamento: async (req, res) => {
        try {
            const agendamento = await Agendamento.findByPk(req.params.id);
            if (!agendamento) {
                return res.status(404).send('Agendamento não encontrado');
            }
            await agendamento.destroy();
            res.send('Agendamento deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = AgendamentoController;