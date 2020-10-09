const expess = require('express');
const routes = expess.Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProdutosController = require('./controllers/ProdutosController');

//!Rotas de Sessãoo
routes.get('/index', (req, res) => {
  return res.json({ Menssage: 'Tudo bem' });
});
routes.post('/cadastro', UserController.store);

//!Rotas em Sessao
routes.post('/login', SessionController.login);

//!Rotas Produtos
routes.post('/products', ProdutosController.store);

module.exports = routes;
