const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Cliente extends Model {}

Cliente.init({
    idcliente: {
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
    email: {
        type: DataTypes.STRING
    },
    telefone: { 
        type: DataTypes.STRING
    },
    senha: { 
        type: DataTypes.STRING
    }

    

}, {
    sequelize,
    modelName: 'clientes',
    timestamps: false
});

module.exports = Cliente;