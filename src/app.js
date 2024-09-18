const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());

app.use(express.json());
routes(app);

module.exports = app;

const http = require('http');
const PORT = 3003;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Servidor escutando!');
});
