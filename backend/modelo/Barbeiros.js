const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Barbeiros extends Model {}

Barbeiros.init({
    idbarbeiros: {
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
    modelName: 'Barbeiros',
    timestamps: false
});

module.exports = Barbeiros;