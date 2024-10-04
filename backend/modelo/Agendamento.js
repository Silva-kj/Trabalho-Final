const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Agendamento extends Model {}

Agendamento.init({
    idagendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    servico: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.STRING
    },
    hora: {
        type: DataTypes.STRING
    },
    duracao: {
        type: DataTypes.STRING
    },
    barbeiro: {
        type: DataTypes.STRING
    }

}, {
    sequelize,
    modelName: 'Agendamento',
    timestamps: false
});

module.exports = Agendamento;