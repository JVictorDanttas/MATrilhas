const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo AtracaoEstabelecimento que representa a tabela 'atracoes_estabelecimentos'
const AtracaoEstabelecimento = sequelize.define('AtracaoEstabelecimento', {
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
  estabeleicimento_id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    references: {
      model: 'Estabelecimentos', // Referencia a tabela 'estabelecimentos'
      key: 'id' // Chave estrangeira
    },
    allowNull: false, // Não permite valores nulos
  },
}, {
  tableName: 'atracoes_estabelecimentos', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = AtracaoEstabelecimento; // Exporta o modelo para uso em outros arquivos
