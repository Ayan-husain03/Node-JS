const http = require("http");
const requestHandler = require("./index");

const server = http.createServer(requestHandler);

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
