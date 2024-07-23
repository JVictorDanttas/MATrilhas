const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega variáveis de ambiente do .env

// Cria uma instância de Sequelize para conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Certifique-se de adicionar a porta
  dialect: 'postgres', // Define o tipo de banco de dados
  dialectOptions: {
    ssl: {
      require: true, // Adiciona SSL para conexão segura
      rejectUnauthorized: false // Pode ser necessário dependendo da configuração
    }
  }
});

module.exports = sequelize; // Exporta a instância para uso em outros arquivos
