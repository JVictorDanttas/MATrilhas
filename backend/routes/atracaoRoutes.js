const express = require('express');
const router = express.Router();
const AtracaoController = require('../controllers/AtracaoController');

// Rota para obter todas as atrações
router.get('/', AtracaoController.getAllAttractions);
// Rota para obter uma atração pelo ID
router.get('/:id', AtracaoController.getAttractionById);

module.exports = router; // Exporta o roteador para uso em outros arquivos
