const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a configuração do banco de dados

// Define o modelo Estado que representa a tabela 'estados'
const Estado = sequelize.define('Estado', {
  id: {
    type: DataTypes.INTEGER, // Tipo de dado inteiro
    autoIncrement: true, // Auto-incrementa o valor para cada novo registro
    primaryKey: true, // Define como chave primária
  },
  titulo: {
    type: DataTypes.STRING, // Tipo de dado string
    allowNull: false, // Não permite valores nulos
  },
  uf: {
    type: DataTypes.STRING, // Tipo de dado string para a sigla do estado
  },
  iso: {
    type: DataTypes.STRING, // Tipo de dado string para o código ISO do estado
  },
  slug: {
    type: DataTypes.STRING, // Tipo de dado string para o identificador amigável
  },
}, {
  tableName: 'estados', // Nome da tabela no banco de dados
  timestamps: false, // Desativa os timestamps automáticos
});

module.exports = Estado; // Exporta o modelo para uso em outros arquivos
