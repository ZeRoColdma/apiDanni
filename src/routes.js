const expess = require('express');
const routes = expess.Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

//!Rotas de Sessão
routes.post('/cadastro', UserController.store);
routes.post('/login', SessionController.login);

<<<<<<< HEAD

=======
//!Rotas Produtos
routes.post('/products', (req, res) => {
  return res.json({ ok: true });
});
>>>>>>> b367910a7bab38604f4b875900edbb6abdc5ac05

module.exports = routes;
