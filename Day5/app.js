const http = require("http");
const syntax = require("./syntex");
const runtime = require("./runtime");
const logical = require("./logical");

const server = http.createServer((req, res) => {
  console.log(req.url);
    // syntax(); // Call the function from syntex.js
    // runtime(); // Call the function from runtime.js
    logical(); // Call the function from logical.js
});

const PORT = 3000;
const HOSTNAME = "localhost";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
