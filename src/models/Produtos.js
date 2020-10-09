const mongoose = require('mongoose');

const ProdutosSchema = mongoose.Schema(
  {
    produto: {
      type: [String],
      require: true,
    },
    quantidade: {
      type: Number,
      require: true,
    },
    promocao: {
      type: Boolean,
      require: true,
    },
    cliente: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const Produto = mongoose.model('Produtos', ProdutosSchema);

module.exports = Produto;
