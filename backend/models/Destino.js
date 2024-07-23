const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo Destino que representa a tabela 'destinos'
const Destino = sequelize.define('Destino', {
  id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    autoIncrement: true, // Auto-incrementa o valor para cada novo registro
    primaryKey: true, // Define como chave primária
  },
  estado_id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    references: {
      model: 'Estados', // Referencia a tabela 'estados'
      key: 'id' // Chave estrangeira
    },
    allowNull: false, // Não permite valores nulos
  },
  titulo: {
    type: DataTypes.STRING, // Tipo de dado string
    allowNull: false, // Não permite valores nulos
  },
  slug: {
    type: DataTypes.STRING, // Tipo de dado string
  },
  descricao: {
    type: DataTypes.TEXT, // Tipo de dado texto para descrições longas
  },
  latitude: {
    type: DataTypes.DOUBLE, // Tipo de dado para coordenadas geográficas
  },
  longitude: {
    type: DataTypes.DOUBLE, // Tipo de dado para coordenadas geográficas
  },
}, {
  tableName: 'destinos', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = Destino; // Exporta o modelo para uso em outros arquivos
