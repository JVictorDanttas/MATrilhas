const { Atracao, AtracaoImagem, AtracaoEstabelecimento } = require('../models');

// Obtém todas as atrações
exports.getAllAttractions = async (req, res) => {
  try {
    const atracoes = await Atracao.findAll({
      include: [
        { model: AtracaoImagem, as: 'imagens' },
        { model: AtracaoEstabelecimento, as: 'estabelecimentos' }
      ]
    });
    res.json(atracoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter atrações' });
  }
};

// Obtém uma atração pelo ID
exports.getAttractionById = async (req, res) => {
  try {
    const atracao = await Atracao.findByPk(req.params.id, {
      include: [
        { model: AtracaoImagem, as: 'imagens' },
        { model: AtracaoEstabelecimento, as: 'estabelecimentos' }
      ]
    });
    if (atracao) {
      res.json(atracao);
    } else {
      res.status(404).json({ error: 'Atração não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter a atração' });
  }
};
