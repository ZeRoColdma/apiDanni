const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdutosSchema = mongoose.Schema(
  {
    produto: {
      type: String,
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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const Produto = mongoose.model('Produtos', ProdutosSchema);

module.exports = Produto;
