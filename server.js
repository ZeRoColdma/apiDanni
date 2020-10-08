const express = require('express');
const routes = require('./src/routes');
const server = require('./src/server/index');

const app = express();

//!Conexão com servidor
server.connection;

//
app.use(express.json());
app.use(routes);

port = process.env.PORT || 3333;

app.listen(port);
