const { Sequelize } = require('sequelize'); // Importa Sequelize

// Cria uma instância de Sequelize para conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // Define o tipo de banco de dados
});

module.exports = sequelize; // Exporta a instância para uso em outros arquivos
