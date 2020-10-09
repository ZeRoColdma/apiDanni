const User = require('../models/User');

module.exports = {
  async login(request, response) {
    const { email, senha } = request.body;
    const userValidate = await User.findOne({ email, senha });

    if (!userValidate) {
      return response.status(401).json({ Error: 'Usuario nao encontrado' });
    }

    return response.json(userValidate);
  },
};
