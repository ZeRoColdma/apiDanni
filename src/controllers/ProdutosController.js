const Produtos = require('../models/Produtos');

module.exports = {
  async store(request, response) {
    const { produto, quantidade, clientes, promocao } = request.body;
    const { user_id } = request.headers;

    console.log(user_id);

    const data = await Produtos.create({
      user: user_id,
      produto,
      quantidade,
      clientes,
      promocao,
    });

    await data.populate('product').execPopulate();

    return response.json(data);
  },
};
