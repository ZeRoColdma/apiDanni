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

    dataEstoque: {
      type: [String],
    },

    cliente: {
      type: String,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
<<<<<<< HEAD
    dataEstoque: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
=======
>>>>>>> ec482fa3b4ff535d2803213d2534387eb25395f9
  },
  { timestamps: true },
);

const Produto = mongoose.model('Produtos', ProdutosSchema);

module.exports = Produto;
