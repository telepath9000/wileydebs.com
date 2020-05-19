const express = require('express');
const server = express();

const hostname = '127.0.0.1';
const port = 8080;

server.get('/', (req, res) => {
  res.send("HELLO");
});

server.listen(port, hostname, () =>{
  console.log(`started server at ${hostname}:${port}`);
});
