const expess = require('express');
const routes = expess.Router();

const UserController = require('./controllers/UserController');

//!Rotas de Sessão
routes.post('/cadastro', UserController.store);
routes.post('/login', UserController.login);

routes.get('/index', (req, res) => {
  return res.send('Funcionando');
});

module.exports = routes;
