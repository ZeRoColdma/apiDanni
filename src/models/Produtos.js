const mongoose = require('mongoose');

const ProdutosSchema = mongoose.Schema(
  {
    vendas: {
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
    dataEstoque: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
      },
    ],
  },
  { timestamps: true },
);

const Produto = mongoose.model('Produtos', ProdutosSchema);

module.exports = Produto;
