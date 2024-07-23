const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo AtracaoCategoria que representa a tabela 'atracoes_categorias'
const AtracaoCategoria = sequelize.define('AtracaoCategoria', {
  id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    autoIncrement: true, // Auto-incrementa o valor para cada novo registro
    primaryKey: true, // Define como chave primária
  },
  atracao_id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    references: {
      model: 'Atracoes', // Referencia a tabela 'atracoes'
      key: 'id' // Chave estrangeira
    },
    allowNull: false, // Não permite valores nulos
  },
  categoria_id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    references: {
      model: 'Categorias', // Referencia a tabela 'categorias'
      key: 'id' // Chave estrangeira
    },
    allowNull: false, // Não permite valores nulos
  },
}, {
  tableName: 'atracoes_categorias', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = AtracaoCategoria; // Exporta o modelo para uso em outros arquivos
