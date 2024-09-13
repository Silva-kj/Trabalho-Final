const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Agendamento extends Model {}

Agendamento.init({
    idagendamento: {
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
    modelName: 'Agendamento',
    timestamps: false
});

module.exports = Agendamento;