const express = require('express');
const router = express.Router();
const DestinoController = require('../controllers/DestinoController');

// Rota para obter todos os destinos
router.get('/', DestinoController.getAllDestinations);
// Rota para obter um destino pelo ID
router.get('/:id', DestinoController.getDestinationById);

module.exports = router; // Exporta o roteador para uso em outros arquivos
