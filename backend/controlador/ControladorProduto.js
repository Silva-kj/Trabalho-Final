const Produtos = require('../modelo/Produtos');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const ProdutosController = {
    createProdutos: async (req, res) => {
        try {
            const novoProdutos = await Produtos.create(req.body);
            res.json(novoProdutos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProdutoss: async (req, res) => {
        try {
            const produtoss = await Produtos.findAll();
            res.json(produtoss);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProdutosById: async (req, res) => {
        try {
            const produtos = await Produtos.findByPk(req.params.id);
            if (!produtos) {
                return res.status(404).send('Produtos não encontrado');
            }
            res.json(produtos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProdutos: async (req, res) => {
        try {
            const produtos = await Produtos.findByPk(req.params.id);
            if (!produtos) {
                return res.status(404).send('Produtos não encontrado');
            }
            await produtos.update(req.body);
            res.send('Produtos atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteProdutos: async (req, res) => {
        try {
            const produtos = await Produtos.findByPk(req.params.id);
            if (!produtos) {
                return res.status(404).send('Produtos não encontrado');
            }
            await produtos.destroy();
            res.send('Produtos deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ProdutosController;