const express = require('express');
const server = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

server.use(express.static(path.join(path.resolve(__dirname, '..'), 'dist')));

server.get('/*', (req, res) => {
  res.sendFile(path.join(path.resolve(__dirname, '..'), 'index.html'));
});

server.listen(port, hostname, () =>{
  console.log(`started server at ${hostname}:${port}`);
});
