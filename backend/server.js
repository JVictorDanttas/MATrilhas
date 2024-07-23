const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const app = express();
const sequelize = require('./config/db'); // Importa a configuração do banco de dados
const atracaoRoutes = require('./routes/atracaoRoutes'); // Importa as rotas de atração
const destinoRoutes = require('./routes/destinoRoutes'); // Importa as rotas de destino
require('dotenv').config(); // Carrega variáveis de ambiente

app.use(cors()); // Adiciona o middleware CORS para permitir requisições de qualquer origem
app.use(express.json()); // Permite que o Express parseie JSON

// Define as rotas
app.use('/atracoes', atracaoRoutes);
app.use('/destinos', destinoRoutes);

// Inicia o servidor e a conexão com o banco de dados
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Testa a conexão com o banco de dados
    console.log('Conectado ao banco de dados PostgreSQL');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

startServer(); // Inicia o servidor
