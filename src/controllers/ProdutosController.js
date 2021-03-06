const Produtos = require('../models/Produtos');

module.exports = {
  async index(request, response) {
    const estoqueUser = await Produtos.find();

    return response.status(200).send(estoqueUser);
  },

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

    return response.sendStatus(200).send(data);
  },

  async delete(request, response) {},
};
