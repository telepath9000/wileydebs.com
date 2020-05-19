const express = require('express');
const server = express();

const hostname = '206.189.170.144';
const port = 8080;

server.get('/', (req, res) => {
  res.send("HELLO");
});

server.listen(port, hostname);
