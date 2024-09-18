const app = require('./src/app.js');
const http = require('http');


const PORT = 3003;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Servidor escutando!');
});
