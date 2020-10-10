const User = require('../models/User');

module.exports = {
  async login(request, response) {
    const { email, password } = request.body;
    const userValidate = await User.findOne({ email, password });

    if (!userValidate) {
      return response.status(401).json({ Error: 'Erro no usuario ou senha' });
    }

    return response.json(userValidate);
  },
};
