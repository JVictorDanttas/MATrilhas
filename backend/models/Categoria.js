const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo Categoria que representa a tabela 'categorias'
const Categoria = sequelize.define('Categoria', {
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
}, {
  tableName: 'categorias', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = Categoria; // Exporta o modelo para uso em outros arquivos
