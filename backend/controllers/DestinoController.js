const { Destino, DestinoImagem } = require('../models');

// Obtém todos os destinos
exports.getAllDestinations = async (req, res) => {
  try {
    const destinos = await Destino.findAll({
      include: [
        { model: DestinoImagem, as: 'imagens' }
      ]
    });
    res.json(destinos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter destinos' });
  }
};

// Obtém um destino pelo ID
exports.getDestinationById = async (req, res) => {
  try {
    const destino = await Destino.findByPk(req.params.id, {
      include: [
        { model: DestinoImagem, as: 'imagens' }
      ]
    });
    if (destino) {
      res.json(destino);
    } else {
      res.status(404).json({ error: 'Destino não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o destino' });
  }
};