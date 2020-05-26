const express = require('express');
const path = require('path');
const server = express();
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 8080;

server.use(express.static(path.join(path.resolve(__dirname, '..'), 'dist')))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(__dirname, '..'), 'index.html'));
});

server.get('/about', (req, res) => {
  res.send(/*get about from mongo*/{text: "Text"});
});

server.listen(port, hostname, () =>{
  console.log(`started server at ${hostname}:${port}`);
});
