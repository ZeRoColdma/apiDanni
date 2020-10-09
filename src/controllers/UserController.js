const User = require('../models/User');

module.exports = {
  async index(request, response) {},

  async store(request, response) {
    const { email, password } = request.body;

    let user = await User.findOne({ email });

    if (user) {
      return response.status(401).json({ erro: 'Usuario existente' });
    }

    let data = await User.create({
      email,
      password,
    });

    return response.json({ email });
  },
};
