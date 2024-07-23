const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo AtracaoImagem que representa a tabela 'atracoes_imagens'
const AtracaoImagem = sequelize.define('AtracaoImagem', {
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
  imagem: {
    type: DataTypes.STRING, // Tipo de dado string para o caminho da imagem
    allowNull: false, // Não permite valores nulos
  },
}, {
  tableName: 'atracoes_imagens', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = AtracaoImagem; // Exporta o modelo para uso em outros arquivos
