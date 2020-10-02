const expess = require('express');
const routes = expess.Router();

const UserController = require('./controllers/UserController');

//!Rotas de Sessão
routes.post('/login', UserController.login);
routes.post('/cadastro', UserController.store);

module.exports = routes;
