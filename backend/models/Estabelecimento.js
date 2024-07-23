const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo Estabelecimento que representa a tabela 'estabelecimentos'
const Estabelecimento = sequelize.define('Estabelecimento', {
  id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    autoIncrement: true, // Auto-incrementa o valor para cada novo registro
    primaryKey: true, // Define como chave primária
  },
  titulo: {
    type: DataTypes.STRING, // Tipo de dado string
    allowNull: false, // Não permite valores nulos
  },
  slug: {
    type: DataTypes.STRING, // Tipo de dado string
  },
  icone: {
    type: DataTypes.STRING, // Tipo de dado string para o ícone
  },
}, {
  tableName: 'estabelecimentos', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = Estabelecimento; // Exporta o modelo para uso em outros arquivos
