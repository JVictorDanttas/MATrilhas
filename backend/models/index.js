const Atracao = require('./Atracao'); // Importa o modelo Atracao
const Categoria = require('./Categoria'); // Importa o modelo Categoria
const Destino = require('./Destino'); // Importa o modelo Destino
const DestinoImagem = require('./DestinoImagem'); // Importa o modelo DestinoImagem
const Estabelecimento = require('./Estabelecimento'); // Importa o modelo Estabelecimento
const AtracaoImagem = require('./AtracaoImagem'); // Importa o modelo AtracaoImagem
const AtracaoEstabelecimento = require('./AtracaoEstabelecimento'); // Importa o modelo AtracaoEstabelecimento
const AtracaoCategoria = require('./AtracaoCategoria'); // Importa o modelo AtracaoCategoria
const Estado = require('./Estado'); // Importa o modelo Estado

// Define os relacionamentos entre os modelos

// Uma atração pertence a um destino
Atracao.belongsTo(Destino, { foreignKey: 'cidade_id' });
// Um destino pode ter muitas atrações
Destino.hasMany(Atracao, { foreignKey: 'cidade_id' });

// Uma atração pode ter muitas imagens
Atracao.hasMany(AtracaoImagem, { foreignKey: 'atracao_id', as: 'imagens' });
// Uma imagem pertence a uma atração
AtracaoImagem.belongsTo(Atracao, { foreignKey: 'atracao_id' });

// Uma atração pode ter muitos estabelecimentos
Atracao.belongsToMany(Estabelecimento, { through: AtracaoEstabelecimento, foreignKey: 'atracao_id', as: 'estabelecimentos' });
// Um estabelecimento pode estar em muitas atrações
Estabelecimento.belongsToMany(Atracao, { through: AtracaoEstabelecimento, foreignKey: 'estabelecimento_id' });

// Uma atração pode ter muitas categorias
Atracao.belongsToMany(Categoria, { through: AtracaoCategoria, foreignKey: 'atracao_id', as: 'categorias' });
// Uma categoria pode estar em muitas atrações
Categoria.belongsToMany(Atracao, { through: AtracaoCategoria, foreignKey: 'categoria_id' });

// Um destino pode ter muitas imagens
Destino.hasMany(DestinoImagem, { foreignKey: 'cidade_id', as: 'imagens' });
// Uma imagem pertence a um destino
DestinoImagem.belongsTo(Destino, { foreignKey: 'cidade_id' });

module.exports = {
  Atracao,
  Categoria,
  Destino,
  DestinoImagem,
  Estabelecimento,
  AtracaoImagem,
  AtracaoEstabelecimento,
  AtracaoCategoria,
  Estado,
};
