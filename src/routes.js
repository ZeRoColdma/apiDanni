const expess = require('express');
const routes = expess.Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

//!Rotas de Sessão
routes.post('/cadastro', UserController.store);
routes.post('/login', SessionController.login);

//!Rotas Produtos
routes.post('/products', (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;
