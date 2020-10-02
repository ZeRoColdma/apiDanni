const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.create({ email, password });

    return res.json(user);
  },

  async login(req, res) {
    const { email, password } = req.body;

    const userValidate = await User.findOne({ email, password });

    return res.json(userValidate);
  },
};
