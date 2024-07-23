const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo DestinoImagem que representa a tabela 'destinos_imagens'
const DestinoImagem = sequelize.define('DestinoImagem', {
  id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    autoIncrement: true, // Auto-incrementa o valor para cada novo registro
    primaryKey: true, // Define como chave primária
  },
  cidade_id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    references: {
      model: 'Destinos', // Referencia a tabela 'destinos'
      key: 'id' // Chave estrangeira
    },
    allowNull: false, // Não permite valores nulos
  },
  imagem: {
    type: DataTypes.STRING, // Tipo de dado string para o caminho da imagem
    allowNull: false, // Não permite valores nulos
  },
}, {
  tableName: 'destinos_imagens', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = DestinoImagem; // Exporta o modelo para uso em outros arquivos
