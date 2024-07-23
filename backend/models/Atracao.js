const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo Atracao que representa a tabela 'atracoes'
const Atracao = sequelize.define('Atracao', {
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
  titulo: {
    type: DataTypes.STRING, // Tipo de dado string
    allowNull: false, // Não permite valores nulos
  },
  descricao: {
    type: DataTypes.TEXT, // Tipo de dado texto para descrições longas
  },
  bairro: {
    type: DataTypes.STRING, // Tipo de dado string
  },
  rua: {
    type: DataTypes.STRING, // Tipo de dado string
  },
  numero: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
  },
  longitude: {
    type: DataTypes.DOUBLE, // Tipo de dado para coordenadas geográficas
  },
  latitude: {
    type: DataTypes.DOUBLE, // Tipo de dado para coordenadas geográficas
  },
}, {
  tableName: 'atracoes', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = Atracao; // Exporta o modelo para uso em outros arquivos
