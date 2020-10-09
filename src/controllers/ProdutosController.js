const Produtos = require('../models/Produtos');

module.exports = {
  async store(request, response) {
    const { vendas, quantidade, cliente, promocao } = request.body;
    const { user_id } = request.headers;

    const data = await Produtos.create({
      user: user_id,
      vendas,
      quantidade,
      cliente,
      promocao,
    });

    await data.populate('product').execPopulate();

    return response.json(data);
  },
};
