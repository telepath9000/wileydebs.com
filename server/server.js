const db = require('./db.js');
const express = require('express');
const path = require('path');
const server = express();
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 8080;

server.use(express.static(path.join(path.resolve(__dirname, '..'), 'dist')))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
db.initDb();

server.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(__dirname, '..'), 'index.html'));
});

server.get('/links', (req, res) => {
  res.send(db.getLinks());
});

server.get('/about', (req, res) => {
  res.send(db.getBio());
});

server.listen(port, hostname, () =>{
  console.log(`started server at ${hostname}:${port}`);
});
