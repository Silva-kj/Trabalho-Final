const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Servico extends Model {}

Servico.init({
    idservico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelName: 'Servico',
    timestamps: false
});

module.exports = Servico;