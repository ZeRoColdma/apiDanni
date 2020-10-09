const User = require('../models/User');

module.exports = {
  async store(request, response) {
    const { email, senha, nivel } = request.body;

    let user = await User.findOne({ email });

    if (user) {
      return response.status(401).json({ erro: 'Usuario existente' });
    }

    let data = await User.create({
      email,
      senha,
      nivel,
    });

    return response.json(data);
  },
};
