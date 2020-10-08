const mongoose = require('mongoose');

const ProdutosSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    senha: {
      type: String,
      require: true,
    },
    nivel: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

const Produto = mongoose.model('Produtos', ProdutosSchema);

module.exports = Produto;
